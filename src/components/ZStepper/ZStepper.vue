<template>
  <div class="z-stepper flex">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ZStepper',
  props: {
    active: {
      default: 0,
      type: Number
    }
  },
  data() {
    return {
      steps: [],
      stepOffSet: 0
    }
  },
  watch: {
    steps(steps: any) {
      steps.forEach((step: any, index: number) => {
        step.index = index
        if (index === this.active) {
          step.internalStatus = 'active'
        } else if (index < this.active) {
          step.internalStatus = 'completed'
        }
      })
    }
  }
}
</script>
