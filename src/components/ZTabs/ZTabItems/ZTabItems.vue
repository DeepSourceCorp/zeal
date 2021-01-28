<script lang="ts">
import Vue, { VNode, CreateElement } from 'vue'

interface ZTabsT extends Vue {
  activeIndex: number
}

export default Vue.extend({
  name: 'TabItems',
  computed: {
    activeIndex(): number {
      const $parent = this.$parent as ZTabsT
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
