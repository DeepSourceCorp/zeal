import Vue from 'vue'
import ZModal from '../../src/components/ZModal'
import ZButton from '../../src/components/ZButton'
import { mount, Wrapper } from '@vue/test-utils'

const BasicModal = Vue.extend({
  components: { ZModal, ZButton },
  data() {
    return {
      isOpen: false,
      primaryActionTriggered: false
    }
  },
  methods: {
    close() {
      this.isOpen = false
    },
    confirm() {
      this.primaryActionTriggered = true
    }
  },
  template: `<div class='wrapper'>
        <z-button id="triggerClick" color="primary" @click="() => { this.isOpen = !this.isOpen }">Save Settings</z-button>
        <z-modal
          v-if="isOpen"
          title="Save Config"
          @primaryAction="confirm"
          body="Are you sure you want to save this config?"
          primaryActionLabel="Confirm"
          @onClose="close"
        ></z-modal>
    </div>`
})

const clickAwait = (wrapper: Wrapper<Vue>, selector: string) => {
  wrapper.find(selector).trigger('click')
  return wrapper.vm.$nextTick()
}

describe('ZModal', () => {
  it('opens and close action', async () => {
    const wrapper = mount(BasicModal)

    await clickAwait(wrapper, '#triggerClick')
    expect(wrapper.findAll('.z-modal').length).toEqual(1)

    // Hides on click x
    await clickAwait(wrapper, '.z-icon')
    expect(wrapper.findAll('.z-modal').length).toEqual(0)

    // Hides on backdrop click
    await clickAwait(wrapper, '#triggerClick')
  })

  it('triggers primary action', async () => {
    const wrapper = mount(BasicModal)
    await clickAwait(wrapper, '#triggerClick')
    expect(wrapper.vm.primaryActionTriggered).toBe(false)
    await clickAwait(wrapper, '.modal-primary-action')
    expect(wrapper.vm.primaryActionTriggered).toBe(true)
  })
})
