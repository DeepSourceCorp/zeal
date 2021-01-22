<script lang="ts">
import Vue, { VNode, CreateElement, VNodeChildren } from 'vue'
import ZTab from './ZTab.vue'

export default Vue.extend({
  name: 'ZTabList',
  computed: {
    getActiveIndex(): number {
      const $parent: any = this.$parent
      return $parent.activeIndex
    }
  },
  render(h: CreateElement): VNode {
    const children = this.$slots.default?.map((child: VNode, index: number) => {
      const options = child.componentOptions
      if (options && options.tag === 'z-tab') {
        const props = {
          index,
          updateActiveIndex: () => {
            const $parent: any = this.$parent
            $parent.updateActiveIndex(index)
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

    return h('div', { class: 'z-tab-list -mx-3 overflow-auto flex flex-nowrap' }, children)
  }
})
</script>
