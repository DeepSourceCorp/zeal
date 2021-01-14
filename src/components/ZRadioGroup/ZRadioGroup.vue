<template>
  <div class="z-radio-group flex flex-col gap-2" role="radiogroup">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ZRadioGroup',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: ''
    }
  },
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  watch: {
    value: function(newValue) {
      this.$emit('change', newValue)
    }
  }
})
</script>
