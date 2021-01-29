<template>
  <div
    class="flex items-center px-2 py-2 space-x-2 text-sm transition-all duration-300 ease-in-out cursor-pointer sidebar-item hover:bg-ink-300"
    :class="{ 'bg-ink-300': active }"
  >
    <z-icon v-if="icon" :icon="icon" size="small" :color="iconColor"></z-icon>
    <div
      class="items-center w-full space-x-1 text-xs sm:text-sm"
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
