<template>
  <div
    class="z-modal-backdrop fixed inset-0 flex items-center bg-opacity-75 bg-black px-2 sm:px-0"
    @click="close"
  >
    <div
      class="z-modal mx-auto mb-12 rounded-md shadow-md bg-ink-300"
      :class="[modalWidth]"
      @click.stop
    >
      <div
        class="flex items-center justify-between py-2 px-3 space-x-2 border-ink-200"
        :class="{ 'border-b': showHeaderBorder }"
      >
        <slot name="title">
          <span class="text-sm font-medium text-vanilla-100">{{ title }}</span>
        </slot>
        <z-icon
          icon="x"
          color="vanilla-100"
          size="small"
          class="cursor-pointer"
          @click="close"
        ></z-icon>
      </div>
      <slot>
        <div class="py-2 px-3 text-vanilla-100 text-sm">
          {{ body }}
        </div>
      </slot>
      <slot name="footer">
        <div
          v-if="primaryActionLabel"
          class="py-2 px-3 space-x-2 text-right text-vanilla-100 border-ink-200"
          :class="{ 'border-t': showFooterBorder }"
        >
          <z-button color="secondary" size="small" @click="close">Cancel</z-button>
          <z-button
            class="modal-primary-action"
            :color="primaryActionType"
            size="small"
            @click="primaryAction"
            >{{ primaryActionLabel }}</z-button
          >
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '../ZIcon/ZIcon.vue'
import ZButton from '../ZButton/ZButton.vue'

export default Vue.extend({
  name: 'ZModal',
  props: {
    title: {
      type: String,
      default: undefined
    },
    body: {
      type: String,
      default: undefined
    },
    width: {
      type: String,
      default: 'base',
      validator: function (value: string): boolean {
        return ['narrow', 'base', 'wide'].includes(value)
      }
    },
    primaryActionLabel: {
      type: String,
      default: undefined
    },
    primaryActionType: {
      type: String,
      default: 'primary'
    },
    showFooterBorder: {
      type: Boolean,
      default: true
    },
    showHeaderBorder: {
      type: Boolean,
      default: true
    }
  },
  components: {
    ZIcon,
    ZButton
  },
  mounted() {
    document.addEventListener('keyup', this.handleKeyup)
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.handleKeyup)
  },
  computed: {
    modalWidth(): string {
      const width: Record<string, string> = {
        narrow: 'w-80 max-w-md',
        base: 'w-102 max-w-xl',
        wide: 'w-2/3 max-w-2xl'
      }
      return width[this.width]
    }
  },
  methods: {
    close(): void {
      this.$emit('onClose')
    },
    primaryAction(): void {
      this.$emit('primaryAction')
      this.close()
    },
    handleKeyup(e: KeyboardEvent): void {
      if (e.key === 'Escape') {
        this.close()
      }
    }
  }
})
</script>
