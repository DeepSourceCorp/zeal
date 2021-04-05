<template>
  <div
    class="z-menu-item flex items-center gap-2 px-3 py-2 leading-none outline-none focus:outline-none"
    :class="{
      'hover:bg-ink-100 cursor-pointer': !disabled,
      'text-vanilla-400 cursor-not-allowed': disabled
    }"
    @click="itemClicked"
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
    action: {
      type: Function,
      default: undefined
    }
  },
  methods: {
    itemClicked(event: Event): void {
      this.$emit('click')

      if (this.action) {
        console.warn('Action Prop for ZMenuItem is deprecated, use the @click event')
        this.action(event)
      }

      const parent = this.$parent as ZMenuParentT
      parent.close()
    }
  }
})
</script>
