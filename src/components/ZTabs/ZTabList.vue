<script lang="ts">
import Vue, { VNode, CreateElement } from 'vue'
import ZTab from './ZTab.vue'

export default Vue.extend({
  name: 'ZTabList',
  computed: {
    getActiveIndex(): number {
      const $parent: any = this.$parent
      return $parent.activeIndex
    }
  },
  methods: {
    toPascal(word: string): string {
      return word.replace(/\w+/g, function(w) {
        return w[0].toUpperCase() + w.slice(1).toLowerCase()
      })
    }
  },
  render(h: CreateElement): VNode {
    const children = this.$slots.default?.map(
      (child: VNode, index: number): VNode => {
        const options = child.componentOptions
        if (options && this.toPascal(options.tag || '') === 'ZTab') {
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
      }
    )

    return h('div', { class: 'z-tab-list -mx-3 overflow-auto flex flex-nowrap' }, children)
  }
})
</script>
