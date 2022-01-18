<template>
  <div
    class="mr-0 z-step"
    :class="{
      'w-1/3 flex-shrink-0 flex-grow-0': align === 'horizontal' && isLast,
      'w-1/2': align == 'horizontal' && !isLast,
      'flex flex-row': align === 'vertical'
    }"
  >
    <div
      class="relative z-step__head"
      :class="{
        currentStatus: true,
        'w-full': align === 'horizontal',
        'flex flex-col justify-center': align === 'vertical' && !isLast
      }"
    >
      <div
        v-if="align == 'horizontal' && !isLast"
        class="z-step__line absolute h-0.5 top-2.5 rounded-sm w-auto left-7 right-1"
        :class="{
          'bg-juniper': currentStatus === 'completed',
          'bg-ink-200': currentStatus !== 'completed'
        }"
      ></div>
      <div
        class="w-6 h-6 rounded-full z-step__icon"
        :class="{
          'bg-juniper': currentStatus == 'completed',
          'bg-robin': currentStatus == 'active',
          'bg-ink-200': !showNumbers && currentStatus == 'default',
          'border border-vanilla-200': showNumbers && currentStatus == 'default',
          'flex-shrink-0': align === 'vertical'
        }"
      >
        <span v-if="showNumbers" class="flex items-center justify-center h-full text-base font-bold text-vanilla-100">{{
          index + 1
        }}</span>
        <span
          v-else-if="currentStatus == 'completed'"
          class="flex items-center justify-center h-full text-base font-bold text-ink-400"
          >✓</span
        >
      </div>
      <div
        v-if="align == 'vertical' && !isLast"
        class="z-step__line h-full w-0.5 my-1 rounded-sm mx-auto"
        :class="{
          'bg-juniper': currentStatus === 'completed',
          'bg-ink-200': currentStatus !== 'completed'
        }"
      ></div>
    </div>
    <div class="z-step__main" :class="{ 'mt-4': align === 'horizontal', 'mb-4 ml-4 w-full': align === 'vertical' }">
      <slot name="title">
        <div class="mt-1 text-xs font-medium leading-snug tracking-widest uppercase z-step__title text-vanilla-400">
          {{ title }}
        </div>
      </slot>
      <div
        class="mt-1 text-sm font-bold leading-6 z-step__description"
        :class="{
          'text-vanilla-200': currentStatus,
          'text-vanilla-400': currentStatus == 'default'
        }"
      >
        <slot name="description" v-bind:status="currentStatus">{{ description }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZStep',
  props: {
    title: {
      required: false,
      default: undefined,
      type: String
    },
    description: {
      required: false,
      default: undefined,
      type: String
    },
    status: {
      required: false,
      type: String,
      default: 'default',
      validator: value => {
        return ['default', 'active', 'completed'].includes(value)
      }
    }
  },
  data() {
    return {
      index: -1,
      showNumbers: false,
      internalStatus: 'default',
      align: 'horizontal'
    }
  },
  computed: {
    currentStatus() {
      return this.status || this.internalStatus
    },
    isLast() {
      const parent = this.$parent
      return parent.steps[parent.steps.length - 1] === this
    }
  },
  beforeCreate() {
    const parent = this.$parent
    parent.steps.push(this)
  },
  beforeDestroy() {
    const parent = this.$parent,
      steps = parent.steps
    const index = steps.indexOf(this)
    if (index >= 0) {
      steps.slice(index, 1)
    }
  }
}
</script>
