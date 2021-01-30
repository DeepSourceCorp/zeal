import ZTabs from '../../src/components/ZTabs'
import ZTabList from '../../src/components/ZTabs/ZTabList'
import ZTabItem from '../../src/components/ZTabs/ZTabItem'
import ZTabPanes from '../../src/components/ZTabs/ZTabPanes'
import ZTabPane from '../../src/components/ZTabs/ZTabPane'
import { mount } from '@vue/test-utils'

const BasicTab = {
  template: `<z-tabs>
              <z-tab-list>
                <z-tab-item>Overview</z-tab-item>
                <z-tab-item id="issues-tab">Issues</z-tab-item>
                <z-tab-item id="fixes-tab">Fixes</z-tab-item>
                <z-tab-item id="disabled-tab" :disabled="true">Metrics</z-tab-item>
              </z-tab-list>
              <z-tab-panes>
                <z-tab-pane>Overview of the code.</z-tab-pane>
                <z-tab-pane>There are the list of issues.</z-tab-pane>
                <z-tab-pane>There are the list of fixes.</z-tab-pane>
                <z-tab-pane>This are metrics.</z-tab-pane>
              </z-tab-panes>
            </z-tabs>`,
  components: {
    ZTabs,
    ZTabItem,
    ZTabList,
    ZTabPanes,
    ZTabPane
  }
}

const TabsWithicon = {
  template: `<z-tabs>
              <z-tab-list>
                <z-tab-item icon="code">Overview</z-tab-item>
                <z-tab-item icon="code">Issues</z-tab-item>
                <z-tab-item icon="code">Metrics</z-tab-item>
              </z-tab-list>
              <z-tab-panes>
                <z-tab-pane>Overview of the code.</z-tab-pane>
                <z-tab-pane>There are the list of issues.</z-tab-pane>
                <z-tab-pane>This are metrics.</z-tab-pane>
              </z-tab-panes>
            </z-tabs>`,
  components: {
    ZTabs,
    ZTabItem,
    ZTabList,
    ZTabPanes,
    ZTabPane
  }
}

describe('ZTabs', () => {
  it('renders a default tab component', () => {
    const wrapper = mount(BasicTab)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('.z-tab-item').length).toEqual(4)
    expect(wrapper.findAll('.z-tab-pane').length).toEqual(1)
  })

  it('renders tabs with icons', () => {
    const wrapper = mount(TabsWithicon)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('.z-tab-item').length).toEqual(3)
    expect(wrapper.findAll('.z-tab-item > .z-icon').length).toEqual(3)
  })

  it('tabs switch on click', async () => {
    const wrapper = mount(BasicTab)

    wrapper.find('#issues-tab').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.z-tab-pane').text()).toEqual('There are the list of issues.')

    wrapper.find('#fixes-tab').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.z-tab-pane').text()).toEqual('There are the list of fixes.')

    // disabled click
    wrapper.find('#fixes-tab').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.z-tab-pane').text()).toEqual('There are the list of fixes.')
  })
})
