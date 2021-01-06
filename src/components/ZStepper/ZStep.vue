<template>
  <div class="z-step w-1/2 mr-0" :class="[isLast && 'w-1/3 flex-shrink-0 flex-grow-0']">
    <div class="z-step__head relative w-full" :class="[`${currentStatus}`]">
      <div
        class="z-step__line absolute h-0.5 top-2.5 rounded-sm w-auto left-7 right-1"
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
        class="z-step__title uppercase text-slate font-medium mt-4 tracking-wider leading-snug text-sm"
      >
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="z-step__description font-bold leading-6 mt-1" :class="[getTextStyle]">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const bgColors = {
  completed: 'bg-juniper',
  active: 'bg-robin',
  default: 'bg-ink-200'
}

export default Vue.extend({
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
    currentStatus(): any {
      return this.status || this.internalStatus
    },
    getIconStyle(): string {
      return bgColors[this.currentStatus] || bgColors['default']
    },
    getTextStyle(): string {
      const activeColor = 'text-vanilla-200',
        defaultColor = 'text-vanilla-400'
      return (this.currentStatus && activeColor) || defaultColor
    },
    isLast(): boolean {
      const parent: any = this.$parent
      return parent.steps[parent.steps.length - 1] === this
    }
  },
  beforeCreate() {
    const parent: any = this.$parent
    parent.steps.push(this)
  },
  beforeDestroy() {
    const parent: any = this.$parent,
      steps = parent.steps
    const index = steps.indexOf(this)
    if (index >= 0) {
      steps.slice(index, 1)
    }
  }
})
</script>
