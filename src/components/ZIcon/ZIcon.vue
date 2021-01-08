<template>
  <svg
    class="stroke-2"
    :class="[
      'z-icon',
      `${getSizeStyle}`,
      `${icon && `z-icon--${icon}`}`,
      `${position && `${getPositionStyle}`}`,
      `${customStyle}`,
      `text-${color}`
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
    },
    color: {
      type: String,
      default: 'vanilla-400'
    }
  },
  data() {
    return {
      customStyle: ''
    }
  },
  computed: {
    getSizeStyle() {
      if (this.size === 'small') {
        return 'w-4 h-4'
      }
      return 'w-6 h-6'
    },
    getPositionStyle() {
      if (this.position === 'left') {
        return 'absolute left-2 w-4'
      } else if (this.position === 'right') {
        return 'absolute right-2 w-4'
      }
      return ''
    }
  },
  methods: {
    getIcon(iconName) {
      let DOM = null
      if (customIcons[iconName]) {
        DOM = customIcons[iconName] && customIcons[iconName].contents
      } else {
        DOM = feather.icons[iconName] && feather.icons[iconName].contents
        // For feathericons, stroke has to be added, while for custom icons it has to be none
        this.customStyle = 'stroke-current'
      }
      return DOM
    }
  }
}
</script>
