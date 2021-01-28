<script>
// import Vue, { VNode, CreateElement } from 'vue'
import ZTab from '../ZTab'

// interface ZTabsT extends Vue {
//   updateActiveIndex: (index: number) => void
//   activeIndex: number
// }

export default {
  name: 'ZTabList',
  computed: {
    getActiveIndex() {
      const $parent = this.$parent
      return $parent.activeIndex
    }
  },
  methods: {
    toPascal(word) {
      // https://stackoverflow.com/a/53952925
      return `${word}`
        .replace(new RegExp(/[-_]+/, 'g'), ' ')
        .replace(new RegExp(/[^\w\s]/, 'g'), '')
        .replace(
          new RegExp(/\s+(.)(\w+)/, 'g'),
          ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
        )
        .replace(new RegExp(/\s/, 'g'), '')
        .replace(new RegExp(/\w/), s => s.toUpperCase())
    }
  },
  render(h) {
    const children = this.$slots.default?.map((child, index) => {
      const options = child.componentOptions
      if (options && this.toPascal(options.tag || '') === 'ZTab') {
        const props = {
          index,
          updateActiveIndex: () => {
            const $parent = this.$parent
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
}
</script>
