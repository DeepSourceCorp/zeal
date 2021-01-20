<script lang="ts">
import Vue, { VNode, CreateElement } from 'vue'
import ZTab from './ZTab.vue'

export default Vue.extend({
  name: 'ZTabList',
  // inject provided updateActiveIndex from ZTabs
  inject: ['updateActiveIndex'],
  render(h: CreateElement): VNode {
    const children = this.$slots.default?.map((child, index) => {
      const options = child.componentOptions
      if (options && options.tag === 'z-tab') {
        const props = {
          index,
          updateActiveIndex: () => {
            // call injected function
            this.updateActiveIndex(index)
          },
          ...options.propsData
        }
        return h(
          ZTab,
          {
            ...child.data,
            props: {
              ...props
            }
          },
          options.children
        )
      }
      return child
    })

    return h('div', children)
  }
})
</script>
