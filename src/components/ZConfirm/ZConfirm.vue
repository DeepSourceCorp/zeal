<template>
  <z-dialog-generic @onClose="closeDialog">
    <template v-slot:default="{ close }">
      <div class="p-6 sm:p-8 sm:w-100" @click.stop>
        <slot>
          <div class="mb-2 text-base leading-relaxed font-medium text-vanilla-100">{{ title }}</div>
          <div class="text-sm leading-relaxed text-vanilla-400">
            {{ subtitle }}
          </div>
        </slot>
        <slot name="footer" :close="close">
          <div class="mt-6 space-x-4 text-right text-vanilla-100 flex items-center justify-end">
            <z-button
              v-if="showSecondaryAction"
              buttonType="ghost"
              class="text-vanilla-100"
              size="small"
              @click="close"
              >{{ secondaryActionLabel }}</z-button
            >
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
    subtitle: {
      type: String,
      default: undefined
    },
    closeAfterPrimaryAction: {
      type: Boolean,
      default: true
    },
    primaryActionLabel: {
      type: String,
      default: 'Confirm'
    },
    secondaryActionLabel: {
      type: String,
      default: 'Cancel'
    },
    primaryActionIcon: {
      type: String,
      default: 'check'
    },
    primaryActionType: {
      type: String,
      default: 'primary'
    },
    showSecondaryAction: {
      type: Boolean,
      default: true
    }
  },
  components: {
    ZButton,
    ZDialogGeneric
  },
  methods: {
    closeDialog(): void {
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
