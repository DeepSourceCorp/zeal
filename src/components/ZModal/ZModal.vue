<template>
  <z-base-dialog v-on="$listeners">
    <div class="z-modal mx-auto mb-12 rounded-md shadow-md bg-ink-300" :class="[modalWidth]">
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
  </z-base-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '../ZIcon/ZIcon.vue'
import ZButton from '../ZButton/ZButton.vue'
import ZBaseDialog from '../ZBaseDialog/ZBaseDialog.vue'

interface ZBaseDialogT extends Vue {
  close: () => void
}

export default Vue.extend({
  name: 'ZModal',
  props: {
    title: {
      type: String
    },
    body: {
      type: String
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
      default: 'Continue'
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
    ZButton,
    ZBaseDialog
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
      const $parent = this.$parent as ZBaseDialogT
      $parent.close()
    },
    primaryAction(): void {
      this.$emit('primaryAction')
      this.close()
    }
  }
})
</script>
