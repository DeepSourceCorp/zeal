<template>
  <div 
    class="z-stepper flex">
    <slot></slot>
  </div>
</template>

<script>
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
    steps(steps) {
      steps.forEach((step, index) => {
        step.index = index
        if(index === this.active) {
          step.internalStatus = 'active';
        } else if(index < this.active) {
          step.internalStatus = 'completed'
        }
      })
    }
  }
}
</script>

