<template>
  <div
    class="sidebar-item flex space-x-2 px-2 py-2 items-center cursor-pointer hover:bg-ink-300 text-sm transition-all duration-300 ease-in-out"
    :class="{ 'bg-ink-300': active }"
  >
    <z-icon v-if="icon" :icon="icon" size="small" :color="iconColor"></z-icon>
    <div
      class="items-center space-x-1 w-full text-xs sm:text-sm"
      :class="[isCollapsed ? 'hidden' : 'flex']"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ZIcon from '@/components/ZIcon/ZIcon.vue'
export default {
  name: 'ZSidebarMenuItem',
  components: {
    ZIcon
  },
  props: {
    icon: {
      type: String
    },
    iconColor: {
      type: String
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isCollapsed() {
      return this.$parent.isCollapsed
    }
  }
}
</script>
