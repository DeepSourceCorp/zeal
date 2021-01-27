import { ZMenu, ZMenuItem, ZMenuSection } from '../../src/components/ZMenu'
import { mount } from '@vue/test-utils'

const BasicTab = {
  template: `<z-menu>
              <template slot="trigger">
                <span id="triggerClick" class="bg-ink-100 text-vanilla-100 p-2 px-4 rounded-lg shadow-sm outline-none focus:outline-none">Menu</span>
              </template>
              <template slot="body">
                <z-menu-section title="Logged In As">
                  <z-menu-item>evan@deepsource.io</z-menu-item>
                </z-menu-section>
                <z-menu-section title="Actions">
                  <z-menu-item>Account Settings</z-menu-item>
                  <z-menu-item :disabled="true">Autofix (Coming Soon)</z-menu-item>
                  <z-menu-item>Contact Support</z-menu-item>
                  <z-menu-item>Give Feedback</z-menu-item>
                </z-menu-section>
                <z-menu-section :divider="false">
                  <z-menu-item>Switch User</z-menu-item>
                  <z-menu-item>Sign out</z-menu-item>
                </z-menu-section>
              </template>
            </z-menu>`,
  components: {
    ZMenu,
    ZMenuItem,
    ZMenuSection
  }
}

describe('ZMenu', () => {
  it('triggers on click', async () => {
    const wrapper = mount(BasicTab)

    wrapper.find('#triggerClick').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('.z-menu-section').length).toEqual(3)

    // Hides on click again
    wrapper.find('#triggerClick').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('.z-menu-section').length).toEqual(0)
  })
})
