import ZList from '../../src/components/ZList'
import ZListItem from '../../src/components/ZListItem'
import { mount } from '@vue/test-utils'

const BasicList = {
  template: `<z-list class="text-vanilla-100 space-y-2">
            <template slot="title">
                <div class="font-medium">Heading</div>
            </template>
            <z-list-item as="a" to="#">First</z-list-item>
            <z-list-item as="a" to="#">Second</z-list-item>
            <z-list-item as="a" to="#">Third</z-list-item>
        </z-list>`,
  components: {
    ZList,
    ZListItem
  }
}

const ListWithTitle = {
  template: `<z-list class="text-vanilla-100 space-y-2" title="Headings">
            <z-list-item as="a" to="#">First</z-list-item>
            <z-list-item as="a" to="#">Second</z-list-item>
            <z-list-item as="a" to="#">Third</z-list-item>
        </z-list>`,
  components: {
    ZList,
    ZListItem
  }
}

describe('ZList', () => {
  it('renders a list with link list items', async () => {
    const wrapper = mount(BasicList)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('renders a list with title', async () => {
    const wrapper = mount(ListWithTitle)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
