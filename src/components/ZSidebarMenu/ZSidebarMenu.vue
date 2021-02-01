<template>
  <div>
    <div
      class="absolute top-2 left-2 block lg:hidden cursor-pointer z-10"
      v-outside-click="closeModal"
      @click="openModal()"
    >
      <z-icon icon="menu" size="small"></z-icon>
    </div>
    <div
      class="group bg-ink-400 absolute z-20 sidebar-menu h-screen flex flex-col border-ink-200 text-vanilla-100 top-0 cursor-pointer transition-all duration-300 ease-in-out"
      :class="[getWidth, getDirectionClasses, getBorderClasses, isOpen && 'shadow-black']"
    >
      <header
        class="w-full border-b border-solid border-ink-200 p-2"
        v-if="$scopedSlots.header"
        :class="[isCollapsed ? 'h-20' : 'h-12']"
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
        class="hidden lg:group-hover:block absolute top-0 right-0 h-full w-px bg-gradient-to-t from-vanilla-300 via-juniper to-juniper"
      ></div>
      <div
        class="lg:group-hover:block hidden bg-juniper p-1 rounded-full relative lg:absolute top-3"
        @click.stop="collapseSidebar()"
        :class="getHoverStyle"
      >
        <z-icon :icon="getArrow" size="small" color="ink-400"></z-icon>
      </div>
    </div>
    <div
      :class="{ 'absolute w-full h-screen bg-ink-400 opacity-50 left-0 top-0 z-0': isOpen }"
    ></div>
  </div>
</template>

<script>
import Vue from 'vue'
import ZIcon from '@/components/ZIcon/ZIcon.vue'
import outsideClickDirective from '../../directives/outside-click'

Vue.directive('outside-click', outsideClickDirective)

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
      isCollapsed: this.collapsed,
      isOpen: false
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
