<script lang="ts">
import Vue, { VNode, CreateElement, VNodeChildren } from 'vue'
import ZTab from './ZTab.vue'

export default Vue.extend({
  name: 'ZTabList',
  // inject provided updateActiveIndex from ZTabs
  inject: ['updateActiveIndex'],
  render(h: CreateElement): VNode {
    const children = this.$slots.default?.map((child: VNode, index: number) => {
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

    return h('div', { class: 'z-tab-list -mx-3 overflow-x-scroll flex flex-nowrap' }, children)
  }
})
</script>
