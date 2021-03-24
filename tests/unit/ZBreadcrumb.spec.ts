import ZBreadcrumb from '../../src/components/ZBreadcrumb'
import ZBreadcrumbItem from '../../src/components/ZBreadcrumb/ZBreadcrumbItem'

import { mount } from '@vue/test-utils'

const BasicBreadcrumb = {
  template: `<z-breadcrumb separator="/" class="text-sm text-vanilla-100">
    <z-breadcrumb-item><a href="#">Autofix</a></z-breadcrumb-item>
    <z-breadcrumb-item>Method has no argument</z-breadcrumb-item>
  </z-breadcrumb>`,
  components: {
    ZBreadcrumb,
    ZBreadcrumbItem
  }
}

const BreadcrumbWithCurrentPage = {
  template: `<z-breadcrumb separator="/" class="text-sm text-vanilla-100">
    <z-breadcrumb-item><a href="#">Home</a></z-breadcrumb-item>
    <z-breadcrumb-item><a href="#">Repository</a></z-breadcrumb-item>
    <z-breadcrumb-item isCurrent>Settings</z-breadcrumb-item>
  </z-breadcrumb>`,
  components: {
    ZBreadcrumb,
    ZBreadcrumbItem
  }
}

describe('ZBreadcrumb', () => {
  it('renders a default breadcrumb component', () => {
    let wrapper = mount(BasicBreadcrumb)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('renders a breadcrumb component with current set by the user', () => {
    let wrapper = mount(BreadcrumbWithCurrentPage)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
