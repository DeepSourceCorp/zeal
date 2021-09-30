<template>
  <div class="z-list-item flex space-x-1">
    <z-icon v-if="icon" :icon="icon" :size="iconSize"></z-icon>
    <component :is="as" :href="href" :to="to" :class="[tagSpecificStyles]">
      <slot></slot>
    </component>
  </div>
</template>

<script>
import ZIcon from '@/components/ZIcon/ZIcon.vue'

export default {
  name: 'ZListItem',
  components: {
    ZIcon
  },
  props: {
    as: {
      type: String,
      default: 'div'
    },
    to: {
      type: String
    },
    href: {
      type: String
    },
    icon: {
      type: String
    },
    iconSize: {
      type: String,
      default: 'small'
    }
  },
  data() {
    return {
      styles: {
        a: 'hover:text-juniper transition-all duration-300 ease-in-out'
      }
    }
  },
  computed: {
    tagSpecificStyles() {
      return this.styles[this.as] || ''
    }
  }
}
</script>
