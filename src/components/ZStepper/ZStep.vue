<template>
  <div class="z-step w-1/2 mr-0" :class="[isLast && 'w-1/3 flex-shrink-0 flex-grow-0']">
    <div class="z-step__head relative w-full" :class="[`${currentStatus}`]">
      <div
        class="z-step__line absolute h-0.5 r-0 w-10/12 left-8 top-2.5"
        :class="[(currentStatus == 'completed' && 'bg-juniper') || 'bg-ink-200']"
        v-if="!isLast"
      ></div>
      <div class="z-step__icon rounded-full w-6 h-6" :class="[getIconStyle]">
        <span
          v-if="currentStatus == 'completed'"
          class="text-vanilla-100 flex justify-center items-center text-base h-full font-bold"
          >✓</span
        >
      </div>
    </div>
    <div class="z-step__main">
      <div
        class="z-step__title text-xs uppercase text-slate font-medium mt-4 tracking-wider leading-snug"
      >
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="z-step__description font-bold leading-6 mt-1" :class="[getTextStyle]">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZStep',
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    status: {
      type: String
    }
  },
  data() {
    return {
      index: -1,
      internalStatus: ''
    }
  },
  computed: {
    currentStatus() {
      return this.status || this.internalStatus
    },
    getIconStyle() {
      const bgColors = {
        completed: 'bg-juniper',
        active: 'bg-robin'
      }
      return bgColors[this.currentStatus] || 'bg-ink-200'
    },
    getTextStyle() {
      const colors = {
        completed: 'text-vanilla-200',
        active: 'text-vanilla-200'
      }
      return colors[this.currentStatus] || 'text-vanilla-400'
    },
    isLast() {
      const parent = this.$parent
      return parent.steps[parent.steps.length - 1] === this
    }
  },
  beforeCreate() {
    this.$parent.steps.push(this)
  },
  beforeDestroy() {
    const steps = this.$parent.steps
    const index = steps.indexOf(this)
    if (index >= 0) {
      steps.slice(index, 1)
    }
  }
}
</script>
