<template>
  <div class="relative flex timeline__item gap-x-2">
    <div class="flex items-start gap-x-4">
      <slot name="avatar" />
      <div class="grid h-full justify-items-center">
        <div class="flex items-center self-start justify-center w-6 h-6">
          <slot name="icon">
            <span class="inline-block w-full h-full rounded-full bg-juniper"></span>
          </slot>
        </div>
        <z-divider direction="vertical" margin="mx-0" class="self-stretch" />
      </div>
      <slot>
        <div class="flex flex-col space-y-2 text-xs">
          <div class="text-vanilla-100">{{ content }}</div>
          <div class="text-vanilla-400">{{ timestamp }}</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import ZDivider from '@/components/ZDivider/ZDivider.vue'
export default {
  components: { ZDivider },
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
