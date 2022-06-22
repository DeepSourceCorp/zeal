<template>
  <div class="relative flex timeline__item gap-x-2">
    <div class="flex flex-col items-center justify-center gap-y-2">
      <div class="flex justify-center flex-shrink-0 w-6 h-6" :class="iconAlignItemsClass">
        <slot name="icon">
          <span class="inline-block w-full h-full rounded-full bg-juniper"></span>
        </slot>
      </div>
      <span
        class="h-full border-l rounded-sm left-4"
        :class="[
          {
            'border-transparent': index === lastIndex,
            'border-slate-400': index !== lastIndex
          },
          borderWidthClass
        ]"
      ></span>
    </div>
    <slot>
      <div class="flex flex-col space-y-2 text-xs">
        <div class="text-vanilla-100">{{ content }}</div>
        <div class="text-vanilla-400">{{ timestamp }}</div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'ZTimelineItem',
  props: {
    content: {
      type: String,
      default: ''
    },
    timestamp: {
      type: String,
      default: ''
    },
    borderWidthClass: {
      type: String,
      default: 'border-2'
    },
    iconAlignItemsClass: {
      type: String,
      default: 'items-center'
    }
  },
  data() {
    return {
      index: 0
    }
  },
  computed: {
    lastIndex() {
      return this.$parent.length - 1
    }
  }
}
</script>
