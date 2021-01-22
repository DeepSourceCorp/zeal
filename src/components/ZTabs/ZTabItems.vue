<script lang="ts">
import Vue, { VNode, CreateElement } from 'vue'

export default Vue.extend({
  name: 'TabItems',
  computed: {
    activeIndex(): number {
      const $parent: any = this.$parent
      return $parent.activeIndex
    }
  },
  render(h: CreateElement): VNode {
    return h(
      'div',
      {
        class: 'outline-none focus:outline-none z-tab-items',
        attrs: {
          role: 'tabpanel',
          tabindex: 0
        }
      },
      [this.$slots.default?.[this.activeIndex]] // activeIndex is reactive
    ) // Render the pane for the active tabs
  }
})
</script>
