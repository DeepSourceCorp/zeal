<script lang="ts">
import Vue, { VNode, CreateElement } from 'vue'

export default Vue.extend({
  name: 'ZTab',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number
    },
    updateActiveIndex: {
      type: Function
    }
  },
  inject: ['tabs'],
  render(h: CreateElement): VNode {
    let children
    const isScoped = this.$scopedSlots.default

    const isActive = this.index === this.tabs.currentIndex

    const attrs: {} = {
      role: 'tab',
      tabindex: isActive ? 0 : -1,
      'aria-selected': String(isActive)
    }

    if (isScoped) {
      children = this.$scopedSlots.default?.({
        aria: attrs,
        index: this.index,
        updateActiveIndex: this.updateActiveIndex
      })
    } else {
      children = this.$slots.default
    }

    return h(
      'button',
      {
        attrs: attrs,
        on: {
          click: () => {
            if (!this.disabled) {
              this.updateActiveIndex()
            }
          }
        }
      },
      children
    )
  }
})
</script>
