<template>
  <div class="z-radio-group" role="radiogroup">
      <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: "ZRadioGroup",
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
    model: {
        prop: 'modelValue',
        event: 'change'
    }, 
    methods: {
        updateInput(value: string): void {
            this.$emit('change', value)
        }
    }
})
</script>

