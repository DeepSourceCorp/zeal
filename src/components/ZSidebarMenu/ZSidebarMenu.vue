<template>
  <div
    class="group absolute sidebar-menu h-screen flex flex-col border-ink-200 text-vanilla-100 top-0 hover:border-2 lg:hover:border-juniper cursor-pointer transition-all duration-300 ease-in-out"
    :class="[
      isCollapsed ? `w-${widthCollapsed}` : `w-${widthCollapsed} lg:w-${width}`,
      getDirectionClasses
    ]"
  >
    <header
      class="w-full border-b border-solid border-ink-200 p-2"
      v-if="$scopedSlots.header"
      :class="[isCollapsed ? 'h-20' : 'h-20 lg:h-12']"
    >
      <slot name="header" :isCollapsed="isCollapsed"></slot>
    </header>
    <div class="sidebar-items w-full flex-1 p-2 overflow-scroll">
      <slot :isCollapsed="isCollapsed"></slot>
    </div>
    <footer
      class="w-full border-t border-solid border-ink-200 px-2 py-4"
      v-if="$scopedSlots.footer"
    >
      <slot name="footer" :isCollapsed="isCollapsed"></slot>
    </footer>
    <div
      class="lg:group-hover:block hidden bg-juniper p-1 rounded-full relative lg:absolute top-3"
      @click.stop="collapseSidebar()"
      :class="getHoverStyle"
    >
      <z-icon :icon="getArrow" size="small" color="ink-400"></z-icon>
    </div>
  </div>
</template>

<script>
import ZIcon from '@/components/ZIcon/ZIcon.vue'
export default {
  name: 'ZSidebarMenu',
  components: {
    ZIcon
  },
  props: {
    width: {
      type: String,
      default: '64'
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    widthCollapsed: {
      type: String,
      default: '12'
    },
    direction: {
      type: String,
      default: 'left'
    }
  },
  data() {
    return {
      isCollapsed: this.collapsed
    }
  },
  computed: {
    sidebarWidth() {
      return this.isCollapsed ? this.widthCollapsed : this.width
    },
    getDirectionClasses() {
      const directionStyle = {
        left: 'left-0 border-r',
        right: 'right-0 border-l'
      }
      return directionStyle[this.direction]
    },
    getHoverStyle() {
      const directionStyle = {
        left: '-right-3',
        right: '-left-3'
      }
      return directionStyle[this.direction]
    },
    getArrow() {
      if (
        (this.direction == 'left' && !this.isCollapsed) ||
        (this.direction == 'right' && this.isCollapsed)
      ) {
        return `chevron-left`
      }
      return `chevron-right`
    }
  },
  methods: {
    collapseSidebar() {
      this.isCollapsed = !this.isCollapsed
    }
  }
}
</script>
