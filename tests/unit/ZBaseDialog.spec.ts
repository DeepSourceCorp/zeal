import Vue from 'vue'
import ZBaseDialog from '../../src/components/ZBaseDialog'
import ZButton from '../../src/components/ZButton'
import { mount, Wrapper } from '@vue/test-utils'

const BasicDialog = Vue.extend({
  components: { ZBaseDialog, ZButton },
  data() {
    return {
      isOpen: false,
      primaryActionTriggered: false
    }
  },
  methods: {
    close() {
      this.isOpen = false
    }
  },
  template: `<div class='wrapper'>
        <z-button id="triggerClick" color="primary" @click="() => { this.isOpen = true }">Open dialog</z-button>
        <z-base-dialog v-if="isOpen" @onClose="close">
          <div class="w-80 p-4 bg-ink-200 text-vanilla-400 flex items-center">Hello!!</div>
        </z-base-dialog>
    </div>`
})

const clickAwait = (wrapper: Wrapper<Vue>, selector: string) => {
  wrapper.find(selector).trigger('click')
  return wrapper.vm.$nextTick()
}

describe('ZBaseDialog', () => {
  it('opens and close action', async () => {
    const wrapper = mount(BasicDialog)

    await clickAwait(wrapper, '#triggerClick')
    expect(wrapper.findAll('.z-base-dialog').length).toEqual(1)

    // Hides on backdrop click
    await clickAwait(wrapper, '#triggerClick')
    await clickAwait(wrapper, '.z-base-dialog div')
    expect(wrapper.findAll('.z-base-dialog').length).toEqual(0)
  })
})
