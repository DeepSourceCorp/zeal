<script>
import ZIcon from '@/components/ZIcon/ZIcon.vue'
import ZAccordionItem from '@/components/ZAccordionItem/ZAccordionItem.vue'
import { toPascal } from '@/helpers/components/utils.ts'

export default {
  name: 'ZNavBar',
  components: {
    ZIcon,
    ZAccordionItem
  },
  props: {
    maxWidth: {
      type: String
    },
    hideLinksOnScroll: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: false,
      isScrolling: false,
      isUserOnTop: true,
      hideOnScroll: ''
    }
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    isScrolling() {
      this.scrollTimer = setTimeout(() => {
        this.isScrolling = false
      }, 1500)
    }
  },
  computed: {
    headerWrapperStyle() {
      return `${this.isScrolling && 'lg:backdrop-blur lg:bg-opacity-25'} ${
        this.isUserOnTop && 'lg:border-0'
      } 
        fixed left-0 top-0 flex z-1000 justify-center w-full max-w-full bg-ink-400 border-b border-ink-200 min-h-16`
    },
    mobHeaderStyle() {
      return `${this.isOpen ? 'right-0' : '-right-full'} 
              overflow-y-scroll lg:-right-full w-full h-screen absolute flex flex-col space-y-2 transition-all duration-700 ease-in-out top-0 bg-ink-300 flex flex-col`
    },
    linkSlotStyle() {
      return `${this.hideOnScroll} 
              second hidden lg:flex flex-1 items-center justify-center space-x-4 w-full transition-all duration-300 ease-in-out`
    }
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen
    },
    handleScroll() {
      this.isScrolling = true
      this.isUserOnTop = Boolean(!(window.scrollY > 50))
      this.hideOnScroll =
        window.scrollY > 50 && this.hideLinksOnScroll ? 'lg:opacity-0' : 'lg:opacity-1'
    },
    getComponent(parent, name, list = []) {
      parent.forEach((child) => {
        if (
          child &&
          child?.componentOptions &&
          toPascal(child.componentOptions.tag || '') === name
        ) {
          list.push(child)
        } else if (child?.children) {
          this.getComponent(child.children, name, list)
        }
      })
      return list
    }
  },
  render(h) {
    const mWidth = (this.maxWidth && `max-w-${this.maxWidth}`) || '',
      headerStyle = `${mWidth} 
        w-full flex items-center px-6`,
      header = (
        <header class={headerStyle}>
          <div class="first flex items-center flex-1">{this.$slots.brand}</div>
          <div class={this.linkSlotStyle}>{this.$slots.links}</div>
          <div class="third flex flex-1 items-center space-x-4 justify-end">{this.$slots.cta}</div>
          <div class="flex cursor-pointer lg:hidden space-x-2 pl-2" on-click={this.toggleModal}>
            <z-icon icon="menu" size="medium"></z-icon>
          </div>
        </header>
      ),
      menuItems = this.$slots.links?.map((child) => {
        const options = child.componentOptions
        if (options && toPascal(options.tag || '') === 'ZMenu') {
          if (options.propsData?.collapseOnMobile) {
            const items = this.getComponent(options.children, 'ZMenuItem'),
              // Checks if Menu Items are collapsible in Mobile, if true then render an accordion
              // Else the Menu item remains the same
              accordionItems = items.map((item) => {
                return h(
                  'div',
                  {
                    domProps: {
                      key: item.key
                    }
                  },
                  item?.componentOptions?.children
                )
              })
            return h(ZAccordionItem, {
              ...options.data,
              props: {
                title: 'Resources',
                ...options.propsData
              },
              class: {
                'px-4 py-2 border-b border-ink-200 lg:border-0': true
              },
              scopedSlots: {
                default: () => accordionItems
              }
            })
          } else {
            // If the menu item is a List Item Component, it will be rendered as a separate component
            // from the Menu Component
            const listItems = this.getComponent(options.children, 'ZList')
            return h('div', listItems)
          }
        }
        return child
      }),
      mobileHeader = (
        // Mobile Header Section
        <div class={this.mobHeaderStyle}>
          <div
            class="flex cursor-pointer justify-end p-4 border-b border-ink-200"
            on-click={this.toggleModal}
          >
            <z-icon icon="x" size="medium" color="vanilla-100"></z-icon>
          </div>
          {menuItems}
          <div class="flex flex-col space-y-4 p-4">{this.$slots.cta}</div>
        </div>
      )
    return (
      // Entire Header Wrapper
      <div class={this.headerWrapperStyle}>
        {header}
        {mobileHeader}
      </div>
    )
  }
}
</script>
