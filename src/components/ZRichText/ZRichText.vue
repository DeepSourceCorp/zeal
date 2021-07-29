<template>
  <div
    class="z-rich-text flex flex-col items-center w-full rounded-sm outline-none border border-transparent"
    :class="[
      borderStyles,
      {
        'text-slate cursor-not-allowed': disabled,
        'text-vanilla-300': !disabled,
        [padding]: padding
      }
    ]"
  >
    <editor-content :editor="editor" class="w-full outline-none px-3 py-2" />
    <div
      class="flex w-full min-h-11 justify-between items-center border-t border-transparent px-3 py-2"
      :class="[
        borderStyles,
        {
          'text-slate cursor-not-allowed': disabled,
          'text-vanilla-300': !disabled,
          [padding]: padding
        }
      ]"
    >
      <label v-if="enableImageUpload" class="flex">
        <z-icon
          :icon="isImageUploading ? 'spin-loader' : 'image'"
          size="medium"
          :class="{ 'animate-spin': isImageUploading }"
        />
        <input type="file" accept="image/png, image/jpeg" class="hidden" @change="uploadImage($event.target.files)" />
      </label>
      <div></div>
      <div class="flex items-center">
        <span v-if="!!maxLength" class="text-vanilla-400 mr-2">
          {{ editor && editor.getCharacterCount() }} / {{ maxLength }} Characters
        </span>
        <z-icon icon="z-markdown" size="base" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import CharacterCount from '@tiptap/extension-character-count'
import Image from '@tiptap/extension-image'
import ZIcon from '../ZIcon'

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
      if (this.showBorder && !this.isFocused) {
        return `border-ink-100`
      }
      if (this.isFocused) {
        return `border-vanilla-400`
      }
      return ''
    }
  },
  mounted() {
    this.editor = new Editor({
      content: this.value,
      editable: !this.disabled,
      extensions: [
        StarterKit,
        Link,
        Image,
        Placeholder.configure({
          placeholder: this.placeholder
        }),
        CharacterCount.configure({
          limit: this.maxLength
        })
      ],
      onUpdate: () => {
        this.$emit('input', this.editor?.getHTML())
      },
      onFocus: () => {
        this.isFocused = true
      },
      onBlur: () => {
        if (this.minLength) {
          this.invalidState = (this.editor?.getCharacterCount() || 0) < this.minLength
          if (this.invalidState) this.$emit('invalid', `Atleast ${this.minLength} characters required.`)
        }
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
        this.editor
          ?.chain()
          .focus()
          .setImage({ src: value })
          .run()
      }
    }
  },
  methods: {
    uploadImage(files: FileList) {
      if (files) this.$emit('editor-image-upload', files)
    }
  }
})
</script>

<style scoped>
.z-rich-text >>> .ProseMirror {
  @apply prose w-full max-w-full border-none min-h-36;
}
.z-rich-text >>> .ProseMirror-focused {
  @apply border-none outline-none;
}
.z-rich-text >>> .ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  color: #a1a1aa;
  @apply h-0 pointer-events-none float-left;
}
</style>
