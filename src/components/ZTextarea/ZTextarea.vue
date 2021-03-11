<template>
  <div
    class="h-full overflow-scroll p-1 border border-ink-200 flex items-start focus-within:shadow-white rounded-sm"
    :class="{
      'cursor-not-allowed': disabled,
      'resize-none': !resizable,
      resize: resizable
    }"
  >
    <textarea
      class="w-full h-full p-1 bg-transparent resize-none outline-none"
      :class="[
        `text-${textSize}`,
        disabled ? 'text-slate' : `text-${textColor}`,
        {
          'cursor-not-allowed': disabled
        }
      ]"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="updateSelf($event.target.value)"
    >
    </textarea>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ZTextarea',
  props: {
    value: {
      default: '',
      type: String
    },
    placeholder: {
      default: 'Once upon a time...',
      type: String
    },
    textSize: {
      type: String,
      default: 'xs'
    },
    textColor: {
      type: String,
      default: 'vanilla-400'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    resizable: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },

  methods: {
    updateSelf(value: string): void {
      if (!this.disabled) this.$emit('input', value)
    }
  }
})
</script>
