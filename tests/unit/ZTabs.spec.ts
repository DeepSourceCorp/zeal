import { ZTabs, ZTab, ZTabList, ZTabItems, ZTabItem } from '../../src/components/ZTabs'
import { mount } from '@vue/test-utils'

const BasicTab = {
  template: `<z-tabs>
              <z-tab-list>
                <z-tab>Overview</z-tab>
                <z-tab id="issues-tab">Issues</z-tab>
                <z-tab id="fixes-tab">Fixes</z-tab>
                <z-tab id="disabled-tab" :disabled="true">Metrics</z-tab>
              </z-tab-list>
              <z-tab-items>
                <z-tab-item>Overview of the code.</z-tab-item>
                <z-tab-item>There are the list of issues.</z-tab-item>
                <z-tab-item>There are the list of fixes.</z-tab-item>
                <z-tab-item>This are metrics.</z-tab-item>
              </z-tab-items>
            </z-tabs>`,
  components: {
    ZTabs,
    ZTab,
    ZTabList,
    ZTabItems,
    ZTabItem
  }
}

const TabsWithicon = {
  template: `<z-tabs>
              <z-tab-list>
                <z-tab icon="code">Overview</z-tab>
                <z-tab icon="code">Issues</z-tab>
                <z-tab icon="code">Metrics</z-tab>
              </z-tab-list>
              <z-tab-items>
                <z-tab-item>Overview of the code.</z-tab-item>
                <z-tab-item>There are the list of issues.</z-tab-item>
                <z-tab-item>This are metrics.</z-tab-item>
              </z-tab-items>
            </z-tabs>`,
  components: {
    ZTabs,
    ZTab,
    ZTabList,
    ZTabItems,
    ZTabItem
  }
}

describe('ZTabs', () => {
  it('renders a default tab component', () => {
    const wrapper = mount(BasicTab)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('.z-tab').length).toEqual(4)
    expect(wrapper.findAll('.z-tab-item').length).toEqual(1)
  })

  it('renders tabs with icons', () => {
    const wrapper = mount(TabsWithicon)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('.z-tab').length).toEqual(3)
    expect(wrapper.findAll('.z-tab > .z-icon').length).toEqual(3)
  })

  it('tabs switch on click', async () => {
    const wrapper = mount(BasicTab)

    wrapper.find('#issues-tab').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.z-tab-item').text()).toEqual('There are the list of issues.')

    wrapper.find('#fixes-tab').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.z-tab-item').text()).toEqual('There are the list of fixes.')

    // disabled click
    wrapper.find('#fixes-tab').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.z-tab-item').text()).toEqual('There are the list of fixes.')
  })
})
