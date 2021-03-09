<template>
  <div
    class="z-menu-item flex items-center gap-2 px-3 py-2 leading-none outline-none focus:outline-none"
    :class="{
      'hover:bg-ink-100 cursor-pointer': !disabled,
      'text-vanilla-400 cursor-not-allowed': disabled
    }"
    v-on:click="itemClicked"
  >
    <z-icon
      v-if="icon"
      :icon="icon"
      size="small"
      color="disabled ? 'vanilla-400' : 'vanilla-100'"
    ></z-icon>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '../../ZIcon/ZIcon.vue'

interface ZMenuParent extends Vue {
  close: () => void
}

export default Vue.extend({
  name: 'ZMenuItem',
  components: {
    ZIcon
  },
  props: {
    icon: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    action: {
      type: Function
    }
  },
  methods: {
    itemClicked(event: Event): void {
      if (this.action) {
        this.action(event)
      }
      const parent = this.$parent as ZMenuParent
      parent.close()
    }
  }
})
</script>
