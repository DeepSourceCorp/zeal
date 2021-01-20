<script lang="ts">
import Vue, { VNode, CreateElement } from 'vue'

export default Vue.extend({
  name: 'ZTabItem',
  inject: ['tabs'], // tabs from ZTabs
  render(h: CreateElement): VNode {
    return h(
      'div',
      {
        key: Math.random()
          .toString(36)
          .substring(7)
      },
      this.$slots.default
    )
  }
})
</script>
