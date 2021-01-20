<script lang="ts">
import Vue, { VNode, CreateElement } from 'vue'

export default Vue.extend({
  name: 'TabItems',
  inject: ['tabs'], // tabs from ZTabs
  render(h: CreateElement): VNode {
    return h(
      'div',
      {
        attrs: {
          role: 'tabpanel',
          tabindex: 0
        }
      },
      [this.$slots.default?.[this.tabs.currentIndex]]
    )
  }
})
</script>
