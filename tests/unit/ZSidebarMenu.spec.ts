import ZSidebarMenu from '../../src/components/ZSidebarMenu'
import ZSidebarItem from '../../src/components/ZSidebarItem'
import { mount } from '@vue/test-utils'

const defaultSidebar = {
  template: `
        <z-sidebar-menu>
        <div slot="header">
            <span>Deepsource</span>
        </div>
        <z-sidebar-item icon="globe">asgard</z-sidebar-item>
        <z-sidebar-item icon="git-merge">asgard-office</z-sidebar-item>
        <z-sidebar-item icon="git-merge">second-release</z-sidebar-item>
        <z-sidebar-item icon="git-merge">another-release</z-sidebar-item>
        <div slot="footer">
            <z-sidebar-item icon="users">My team</z-sidebar-item>
            <z-sidebar-item icon="settings">Team settings</z-sidebar-item> 
        </div>
        </z-sidebar-menu>`,
  components: {
    ZSidebarMenu,
    ZSidebarItem
  }
}

describe('ZMenu', () => {
  it('renders a sidebar in the specified direction', async () => {
    const wrapper = mount(defaultSidebar)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
