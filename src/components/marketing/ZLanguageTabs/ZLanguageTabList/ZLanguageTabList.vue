<script>
import ZLanguageTabItem from '@/components/marketing/ZLanguageTabs/ZLanguageTabItem'
import { toPascal } from '@/helpers/components/utils.ts'

export default {
  name: 'ZLanguageTabList',
  computed: {
    getActiveIndex() {
      const $parent = this.$parent
      return $parent.activeIndex
    }
  },
  render(h) {
    const children = this.$slots.default?.map((child, index) => {
      const options = child.componentOptions
      if (options && toPascal(options.tag || '') === 'ZLanguageTabItem') {
        const props = {
          index,
          updateActiveIndex: () => {
            const $parent = this.$parent
            $parent.updateActiveIndex(index)
          },
          ...options.propsData
        }
        return h(
          ZLanguageTabItem,
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

    return h('div', { class: 'flex flex-row items-center justify-center space-x-12' }, children)
  }
}
</script>
