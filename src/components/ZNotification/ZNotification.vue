<template>
  <div class="z-notification inline">
    <div class="flex items-center justify-center rounded-full text-center text-xxs text-vanilla-100 font-medium w-5 h-5"
        :class="[`bg-${color}`]"
        v-text="content"
        ></div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ZNotification',
  props: {
    value: {
        type: [Number, String]
    },
    max: {
        type: Number,
        default: 99
    },
    color: {
        type: String,
        default: "cherry"
    }
  },
  computed: {
    content() {
      const value = this.value,
        max = this.max
      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value
      }
      return value
    }
  }
}
</script>
