<template>
  <div class="group fixed sidebar-menu h-screen flex flex-col border-r border-ink-200 text-vanilla-100 top-0 left-0 w-12 sm:w-64 hover:border-2 hover:border-juniper cursor-pointer" 
        :class="[`max-w-${this.width}`]">
    <header class="w-full h-20 sm:h-12 border-b border-solid border-ink-200 p-2" 
            v-if="$slots.header">
        <slot name="header"></slot>
    </header>
    <div class="sidebar-items w-full flex-1 p-2 overflow-scroll">
        <slot></slot>
    </div>
    <footer class="w-full border-t border-solid border-ink-200 px-2 py-4" v-if="$slots.footer">
        <slot name="footer"></slot>
    </footer>
    <div class="bg-juniper p-1 rounded-full absolute top-2 right-0"><z-icon icon="chevron-left" size="small" color="ink-400"></z-icon></div>
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
        default: '16'
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
    }
  }
}
</script>
<style scoped>
.sidebar-menu {
    transition: 0.3s all ease;
}
</style>
