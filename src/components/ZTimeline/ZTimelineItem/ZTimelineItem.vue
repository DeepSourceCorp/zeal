<template>
  <div class="timeline__item flex relative gap-x-4">
    <div class="flex flex-col justify-center items-center gap-y-2">
      <div class="w-8 h-8 flex justify-center items-center">
        <slot name="icon">
          <span class="inline-block h-full w-full rounded-full bg-juniper"></span>
        </slot>
      </div>
      <span
        class="h-full border-l border-2 rounded-sm left-4"
        :class="{
          'border-transparent': index === lastIndex,
          'border-ink-100': index !== lastIndex
        }"
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
