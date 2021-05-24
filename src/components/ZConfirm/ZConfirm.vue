<template>
  <div
    class="z-modal-backdrop fixed inset-0 flex items-end sm:items-center bg-opacity-75 bg-black px-0"
    @click="close"
  >
    <div
      class="z-modal mx-auto sm:mb-12 sm:rounded-md shadow-md bg-ink-300 p-6 sm:p-8"
      style="width: 480px;"
    >
      <slot>
        <div class="text-vanilla-100 text-base mb-2 leading-relaxed">{{ title }} {{ title }}</div>
        <div class="text-vanilla-400 text-sm leading-relaxed">
          {{ subtitle }}
        </div>
      </slot>
      <slot name="footer">
        <div v-if="primaryActionLabel" class="space-x-4 text-right text-vanilla-100 mt-6">
          <z-button buttonType="ghost" class="text-vanilla-100" size="small" @click="close"
            >Cancel</z-button
          >
          <z-button
            :icon="primaryActionIcon"
            class="modal-primary-action "
            :buttonType="primaryActionType"
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
// import ZIcon from '../ZIcon/ZIcon.vue'
import ZButton from '../ZButton/ZButton.vue'

export default Vue.extend({
  name: 'ZModal',
  props: {
    title: {
      type: String,
      default: undefined
    },
    subtitle: {
      type: String,
      default: undefined
    },
    width: {
      type: String,
      default: 'base',
      validator: function(value: string): boolean {
        return ['narrow', 'base', 'wide'].includes(value)
      }
    },
    primaryActionLabel: {
      type: String,
      default: undefined
    },
    primaryActionIcon: {
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
    },
    showCancel: {
      type: Boolean,
      default: false
    }
  },
  components: {
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
        narrow: 'w-96 max-w-md',
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
