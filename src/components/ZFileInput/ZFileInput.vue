<template>
  <label
    :class="{
      'cursor-pointer': !disabled && !processing,
      'cursor-wait': processing,
      'cursor-not-allowed': disabled,
      'flex items-center space-x-1 border border-ink-200 rounded-sm pr-1': !!$slots.activator
    }"
  >
    <span class="sr-only">{{ label }}</span>
    <input
      ref="fileUpload"
      id="file-upload"
      v-bind="$attrs"
      type="file"
      class="hidden"
      :disabled="disabled"
      v-on="fileInputListeners"
    />
    <slot name="activator" :open="openFilePicker" :empty="filesEmptied" :file-names="uploadedFileNames">
      <z-input
        v-model="uploadedFileNames"
        :read-only="true"
        :placeholder="uploadedFileNames || 'No files uploaded'"
        :show-border="false"
        type="text"
        aria-label="uploaded files"
        class="pointer-events-none -ml-4"
      />
      <z-button
        v-if="!uploadedFiles.length"
        icon="paperclip"
        size="small"
        button-type="secondary"
        :disabled="disabled"
        :is-loading="processing"
        loading-label="Processing"
        label="Add files"
        type="button"
        @keyup.prevent="
          () => {
            if ($event.code === 'Space' || $event.code === 'Enter') openFilePicker()
          }
        "
        @click="openFilePicker"
      />
      <button
        v-else
        class="p-2 hover:bg-light-cherry hover:bg-opacity-20 rounded-sm disabled:opacity-50"
        :class="disabled || processing ? 'cursor-not-allowed' : 'cursor-pointer'"
        :disabled="disabled"
        v-tooltip="'Remove files'"
        type="button"
        @click="filesEmptied"
      >
        <z-icon icon="trash-2" color="cherry" size="small"></z-icon>
      </button>
    </slot>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '../ZIcon'
import ZInput from '../ZInput'
import ZButton from '../ZButton'

export default Vue.extend({
  name: 'ZFileInput',
  inheritAttrs: false,
  components: {
    ZIcon,
    ZInput,
    ZButton
  },
  props: {
    processing: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Add file'
    }
  },
  data() {
    return {
      uploadedFiles: [] as File[],
      prevFiles: [] as File[]
    }
  },
  computed: {
    uploadedFileNames(): string {
      const nameExtractor = (acc: string, file: File): string => {
        return acc + file.name + ', '
      }
      return this.uploadedFiles.reduce(nameExtractor, '').slice(0, -2)
    },
    fileInputListeners(): Record<string, Function | Function[]> {
      return Object.assign({}, this.$listeners, {
        change: (event: Event) => {
          const fileList = (event.target as HTMLInputElement)?.files
          if (fileList) {
            this.prevFiles = this.uploadedFiles
            this.uploadedFiles = Array.from(fileList)
          }
          this.$emit('change', event)
        }
      })
    }
  },
  methods: {
    openFilePicker(): void {
      ;(this.$refs['fileUpload'] as HTMLInputElement).click()
    },
    emptyFiles(): void {
      this.prevFiles = this.uploadedFiles
      this.uploadedFiles = []
    },
    invalidateChanges(): void {
      this.uploadedFiles = this.prevFiles
      this.prevFiles = []
    },
    updateFileList(newFiles: File[]): void {},
    filesEmptied(): void {
      this.prevFiles = this.uploadedFiles
      this.uploadedFiles = []
      this.$emit('files-emptied')
    }
  }
})
</script>
