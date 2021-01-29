<script>
import ZTabItem from '@/components/ZTabs/ZTabItem'

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
        .replace(new RegExp(/\w/), (s) => s.toUpperCase())
    }
  },
  render(h) {
    const children = this.$slots.default?.map((child, index) => {
      const options = child.componentOptions
      if (options && this.toPascal(options.tag || '') === 'ZTabItem') {
        const props = {
          index,
          updateActiveIndex: () => {
            const $parent = this.$parent
            $parent.updateActiveIndex(index)
          },
          ...options.propsData
        }
        return h(
          ZTabItem,
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

    return h('div', { class: 'z-tab-list space-x-5 overflow-auto flex flex-nowrap' }, children)
  }
}
</script>
