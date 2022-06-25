<template>
  <z-dialog-generic class="z-modal-backdrop" @onClose="closeModal">
    <template v-slot:default="{ close }">
      <div
        class="z-modal w-full"
        :class="{
          'sm:w-96': width === 'narrow',
          'sm:w-102': width === 'base',
          'sm:w-120 max-w-2xl': width === 'wide'
        }"
        @click.stop
      >
        <div
          class="flex items-center justify-between p-4 space-x-2 border-ink-200"
          :class="{ 'border-b': showHeaderBorder }"
        >
          <slot name="title">
            <span class="text-base text-vanilla-100">{{ title }}</span>
          </slot>
          <!--This icon is too small, we can increase it a point-->
          <z-button icon="x" buttonType="secondary" size="x-small" class="z-modal-close-x" @click="close"></z-button>
        </div>
        <slot :close="close">
          <div class="p-4 text-sm text-vanilla-100 min-h-20">
            {{ body }}
          </div>
        </slot>
        <slot name="footer" :close="close">
          <div v-if="primaryActionLabel" class="p-4 space-x-4 text-right text-vanilla-100 border-ink-200">
            <z-button
              :icon="primaryActionIcon"
              class="modal-primary-action"
              :buttonType="primaryActionType"
              size="small"
              @click="primaryAction(close)"
              >{{ primaryActionLabel }}</z-button
            >
          </div>
        </slot>
      </div>
    </template>
  </z-dialog-generic>
</template>

<script lang="ts">
import Vue from 'vue'
import ZButton from '../ZButton/ZButton.vue'
import ZDialogGeneric from '../ZDialogGeneric/ZDialogGeneric.vue'

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
      validator: function(value: string): boolean {
        return ['narrow', 'base', 'wide'].includes(value)
      }
    },
    closeAfterPrimaryAction: {
      type: Boolean,
      default: true
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
    showHeaderBorder: {
      type: Boolean,
      default: true
    }
  },
  components: {
    ZButton,
    ZDialogGeneric
  },
  methods: {
    closeModal(): void {
      this.$emit('onClose')
    },
    primaryAction(close: () => void): void {
      this.$emit('primaryAction')
      if (this.closeAfterPrimaryAction) {
        close()
      }
    }
  }
})
</script>
