<template>
  <svg
    class="stroke-current stroke-2 text-vanilla-400"
    :class="[
      'z-icon',
      `${getSizeStyle}`,
      `${icon && `z-icon--${icon}`}`,
      `${position && `${getPositionStyle}`}`
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
  computed: {
    getSizeStyle() {
      if(this.size === 'small') {
        return 'w-4 h-4';
      }
      return 'w-6 h-6';
    },
    getPositionStyle() {
      if(this.position === 'left') {
        return 'absolute left-1 w-4';
      } else if(this.position === 'right') {
        return 'absolute right-1 w-4';
      }
      return '';
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
