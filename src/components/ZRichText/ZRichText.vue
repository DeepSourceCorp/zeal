<template>
  <div
    class="z-rich-text flex flex-col items-center w-full rounded-md outline-none border border-transparent"
    :class="[
      borderStyles,
      {
        'text-slate cursor-not-allowed': disabled,
        'text-vanilla-300': !disabled,
        [padding]: padding
      }
    ]"
  >
    <editor-content :editor="editor" class="w-full outline-none" />
    <div
      class="flex w-full justify-between items-center border-t p-3 rounded-b-md"
      :class="[
        borderStyles,
        isFocused ? 'bg-ink-200' : 'bg-ink-300',
        {
          'text-slate cursor-not-allowed': disabled,
          'text-vanilla-300': !disabled,
          [padding]: padding
        }
      ]"
    >
      <label
        v-if="enableImageUpload"
        class="flex hover:text-vanilla-400 focus-within:text-vanilla-400 text-slate cursor-pointer"
      >
        <z-icon
          :icon="isImageUploading ? 'spin-loader' : 'image'"
          size="small"
          color="current"
          :class="{ 'animate-spin': isImageUploading }"
          aria-label="Upload an image"
        />
        <input
          type="file"
          accept="image/png, image/jpeg"
          class="opacity-0 h-1 w-1 absolute"
          @change="uploadImage($event.target.files)"
        />
      </label>
      <div></div>
      <div class="flex items-center space-x-3">
        <span
          v-if="!!maxLength"
          class="text-xs leading-none"
          :class="[editor && editor.getCharacterCount() > 0 ? 'text-vanilla-400' : 'text-slate']"
        >
          {{ editor && editor.getCharacterCount() }} / {{ maxLength }} Characters
        </span>
        <z-icon icon="z-markdown" size="base" color="slate" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Editor as EditorCore } from '@tiptap/core'
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import CharacterCount from '@tiptap/extension-character-count'
import Image from '@tiptap/extension-image'
import ZIcon from '../ZIcon'

interface HeadingLevel {
  Level: (1 | 2 | 3 | 4 | 5 | 6)[]
}

export default Vue.extend({
  name: 'ZRichText',
  components: {
    EditorContent,
    ZIcon
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    padding: {
      type: String,
      default: undefined
    },
    placeholder: {
      type: String,
      default: 'Enter a value'
    },
    showBorder: {
      type: Boolean,
      default: true
    },
    maxLength: {
      type: Number,
      default: 0
    },
    minLength: {
      type: Number,
      default: 0
    },
    disabled: {
      default: false,
      type: Boolean
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    enableImageUpload: {
      type: Boolean,
      default: false
    },
    addImageUrl: {
      type: String,
      default: ''
    },
    isImageUploading: {
      type: Boolean,
      default: false
    },
    headingLevels: {
      type: Array,
      default: () => [1, 2, 3, 4, 5, 6]
    },
    validateOnBlur: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      editor: null as Editor | null,
      invalidState: false,
      isFocused: false
    }
  },
  computed: {
    borderStyles(): string {
      if (this.isInvalid || this.invalidState) {
        return `border-cherry`
      }
      if (this.showBorder) {
        return `border-ink-200 focus-within:border-ink-100`
      }
      return ''
    }
  },
  mounted() {
    this.editor = new Editor({
      content: this.value,
      editable: !this.disabled,
      editorProps: {
        attributes: {
          class: 'prose focus:outline-none w-full max-w-full min-h-36 max-h-80 overflow-auto p-3'
        }
      },
      extensions: [
        StarterKit.configure({
          heading: {
            levels: this.headingLevels as HeadingLevel['Level']
          }
        }),
        Link,
        Image,
        Placeholder.configure({
          placeholder: this.placeholder
        }),
        CharacterCount.configure({
          limit: this.maxLength
        })
      ],
      onUpdate: ({ editor }) => {
        let editorHtml = editor.getHTML()
        /**
         * ! The following if snippet is to prevent a bug with tiptap.
         * ! Can be removed once the following is resolved:
         * ? Refer: https://github.com/ueberdosis/tiptap/issues/1672
         */
        if (editor.isEmpty) {
          editor.commands.clearContent()
          editorHtml = ''
        }
        this.$emit('input', editorHtml)
      },
      onFocus: () => {
        this.isFocused = true
      },
      onBlur: ({ editor }) => {
        this.validateInput(editor)
        this.isFocused = false
      }
    })
  },
  beforeDestroy() {
    this.editor?.destroy()
  },
  watch: {
    value(value) {
      const isSame = this.editor?.getHTML() === value
      if (isSame) {
        return
      }
      this.editor?.commands.setContent(this.value, false)
    },
    disabled(value) {
      this.editor?.setOptions({ editable: !value })
    },
    addImageUrl(value) {
      if (value) {
        this.editor?.chain().focus().setImage({ src: value }).run()
      }
    }
  },
  methods: {
    uploadImage(files: FileList) {
      if (files) this.$emit('editor-image-upload', files)
    },
    validateInput(editor: EditorCore) {
      //? Separate validateOnBlur and minLength if there are further validations added in the future
      if (this.validateOnBlur && this.minLength) {
        this.invalidState = (editor?.getCharacterCount() || 0) < this.minLength
        if (this.invalidState) this.$emit('invalid', `Atleast ${this.minLength} characters required.`)
      }
    }
  }
})
</script>

<style scoped>
.z-rich-text >>> .ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  @apply h-0 pointer-events-none float-left text-manatee;
}
</style>
