<template>
  <svg
    :class="[
      'z-icon',
      `${size && `z-icon--${size}`}`,
      `${icon && `z-icon--${icon}`}`,
      'z-icon--default',
      `${position && `z-icon--${position}`}`
    ]"
    viewBox="0 0 24 24"
    v-html="getIcon(icon)"
    fill="none"
  ></svg>
</template>

<script>
import feather from 'feather-icons'
import customIcons from '../../utils/icon-helper'

export default {
  name: 'ZIcon',
  props: {
    icon: {
      default: '',
      type: String
    },
    size: {
      default: '',
      type: String
    },
    position: {
      default: '',
      type: String
    }
  },
  methods: {
    getIcon(iconName) {
      let DOM = null
      if (feather.icons[iconName]) {
        DOM = feather.icons[iconName] && feather.icons[iconName].contents
      } else {
        DOM = customIcons[iconName] && customIcons[iconName].contents
      }
      return DOM
    }
  }
}

</script>

<style lang="css" scoped>
.z-icon {
  @apply w-6 h-6 stroke-current stroke-2;
}

.z-icon--default {
  @apply text-vanilla-400;
}

.z-icon--small {
  @apply w-4 h-4;
}

.z-icon--left {
  @apply absolute left-1 w-4;
}

.z-icon--right {
  @apply absolute right-1 w-4;
}
</style>
