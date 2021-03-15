<template>
  <span>{{ format(animatedValue) }}</span>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: Number,
      required: true
    },
    format: {
      type: Function,
      required: false,
      default: (val: string): string => val
    }
  },
  data: function () {
    return {
      animatedValue: 0
    }
  },
  watch: {
    value: function (newValue, oldValue) {
      this.animate(oldValue, newValue)
    }
  },
  mounted: function () {
    this.animate(0, this.value)
  },
  methods: {
    animate: function (from: number, to: number) {
      const duration = 500

      const easingFunction = (
        progress: number,
        from: number,
        diff: number,
        duration: number
      ): number => {
        progress = progress / duration - 1
        return -diff * (Math.pow(progress, 4) - 1) + from
      }

      let start: number | null = null
      const diff = to - from

      const loop = () => {
        const timestamp = new Date().getTime()
        start = !start ? timestamp : start
        const progress = timestamp - start

        this.animatedValue = Math.round(easingFunction(progress, from, diff, duration))

        if (progress < duration) {
          window.requestAnimationFrame(loop)
        } else {
          // Finish anyway
          this.animatedValue = to
        }
      }

      window.requestAnimationFrame(loop)
    }
  }
})
</script>
