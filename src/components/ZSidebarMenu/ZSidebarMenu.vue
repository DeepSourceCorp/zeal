<template>
  <div>
    <div
      v-outside-click="closeModal"
      v-on:click="openModal()"
      class="absolute z-10 block cursor-pointer top-2 left-2 lg:hidden"
      :class="{ hidden: isOpen }"
    >
      <z-icon icon="menu"></z-icon>
    </div>
    <div
      class="absolute top-0 z-30 flex flex-col h-screen transition-all duration-300 ease-in-out cursor-pointer group bg-ink-400 sidebar-menu border-ink-200 text-vanilla-100"
      :class="[getWidth, getDirectionClasses, getBorderClasses, isOpen && 'shadow-black']"
    >
      <header
        class="w-full p-2 border-b border-solid border-ink-200"
        v-if="$scopedSlots.header"
        :class="[isCollapsed ? 'h-20' : 'h-12']"
      >
        <slot name="header" :isCollapsed="isCollapsed"></slot>
      </header>
      <div class="flex-1 w-full p-2 overflow-scroll sidebar-items">
        <slot :isCollapsed="isCollapsed"></slot>
      </div>
      <footer
        class="w-full px-2 py-4 border-t border-solid border-ink-200"
        v-if="$scopedSlots.footer"
      >
        <slot name="footer" :isCollapsed="isCollapsed"></slot>
      </footer>
      <div
        class="absolute top-0 hidden w-px h-full lg:group-hover:block -right-px bg-gradient-juniper_gradient"
      ></div>
      <div
        class="lg:group-hover:block hidden bg-juniper p-0.5 rounded-full relative lg:absolute top-3"
        @click.stop="collapseSidebar()"
        :class="getHoverStyle"
      >
        <z-icon :icon="getArrow" size="small" color="ink-400"></z-icon>
      </div>
    </div>
    <!-- Overlay -->
    <div
      :class="{ 'absolute w-full h-screen bg-ink-400 opacity-50 left-0 top-0 z-20': isOpen }"
    ></div>
  </div>
</template>

<script>
import Vue from 'vue'
import ZIcon from '@/components/ZIcon/ZIcon.vue'
import outsideClickDirective from '@/directives/outside-click'

export default {
  name: 'ZSidebarMenu',
  components: {
    ZIcon
  },
  directives: {
    outsideClick: outsideClickDirective
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
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        if (this.windowScreenWidth < this.largeScreenSize) this.isOpen = false
      })
    })
  },
  data() {
    return {
      isCollapsed: this.collapsed,
      isOpen: false,
      largeScreenSize: 1024,
      windowScreenWidth: window.innerWidth
    }
  },
  computed: {
    sidebarWidth() {
      return this.isCollapsed ? this.widthCollapsed : this.width
    },
    getDirectionClasses() {
      const directionStyle = {
        left: 'lg:left-0 -left-3/4',
        right: 'lg:right-0 -right-3/4'
      }
      const openDirections = {
        left: 'left-0',
        right: 'right-0'
      }
      if (this.isOpen) {
        return openDirections[this.direction]
      }
      return directionStyle[this.direction]
    },
    getBorderClasses() {
      const borders = {
        left: 'border-r',
        right: 'border-l'
      }
      return !this.isOpen && borders[this.direction]
    },
    getWidth() {
      if (this.isCollapsed) return `lg:w-${this.widthCollapsed} w-9/12`
      return `lg:w-${this.width} w-9/12`
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
    },
    openModal() {
      this.isOpen = !this.isOpen
    },
    closeModal() {
      this.isOpen = false
    }
  }
}
</script>

