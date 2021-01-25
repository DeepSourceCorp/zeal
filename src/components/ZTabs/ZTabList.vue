<script lang="ts">
import Vue, { VNode, CreateElement } from 'vue'
import ZTab from './ZTab.vue'

interface ZTabsT extends Vue {
  updateActiveIndex: Function
  activeIndex: number
}

export default Vue.extend({
  name: 'ZTabList',
  computed: {
    getActiveIndex(): number {
      const $parent = this.$parent as ZTabsT
      return $parent.activeIndex
    }
  },
  methods: {
    toPascal(word: string): string {
      // https://stackoverflow.com/a/53952925
      return `${word}`
        .replace(new RegExp(/[-_]+/, 'g'), ' ')
        .replace(new RegExp(/[^\w\s]/, 'g'), '')
        .replace(
          new RegExp(/\s+(.)(\w+)/, 'g'),
          ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
        )
        .replace(new RegExp(/\s/, 'g'), '')
        .replace(new RegExp(/\w/), (s) => s.toUpperCase())
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
              const $parent = this.$parent as ZTabsT
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
