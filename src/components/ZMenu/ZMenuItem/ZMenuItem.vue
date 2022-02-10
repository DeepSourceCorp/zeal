<template>
  <component
    v-bind="$attrs"
    :is="as"
    class="flex items-center gap-2 p-3 leading-none outline-none z-menu-item focus:outline-none"
    :class="{
      'hover:bg-ink-200 cursor-pointer': !disabled,
      'text-vanilla-400 cursor-not-allowed': disabled
    }"
    v-on="$listeners"
    @click="itemClicked"
  >
    <z-icon v-if="icon" :icon="icon" size="small" color="disabled ? 'vanilla-400' : 'vanilla-100'"></z-icon>
    <slot></slot>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '../../ZIcon/ZIcon.vue'

interface ZMenuParentT extends Vue {
  close: () => void
}

export default Vue.extend({
  name: 'ZMenuItem',
  components: {
    ZIcon
  },
  props: {
    icon: {
      type: String,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    as: {
      type: String,
      default: 'div'
    }
  },
  methods: {
    itemClicked(): void {
      if (this.closeOnClick) {
        const parent = this.$parent as ZMenuParentT
        parent.close()
      }
    }
  }
})
</script>
