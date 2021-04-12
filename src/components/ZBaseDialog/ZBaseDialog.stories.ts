import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZBaseDialog from './ZBaseDialog.vue'
import ZButton from '../ZButton/ZButton.vue'
import Vue from 'vue'

export default {
  title: 'Base Dialog',
  component: ZBaseDialog,
  excludeStories: /.*Data$/
}

export const BasicDialog = () =>
  Vue.extend({
    components: { ZBaseDialog, ZButton },
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      close() {
        this.isOpen = false
      }
    },
    template: `<div class='padded-container'>
        <z-button color="primary" @click="() => { this.isOpen = true }">Open dialog</z-button>
        <z-base-dialog v-if="isOpen" @onClose="close">
          <div class="w-80 p-4 bg-ink-200 text-vanilla-400 flex items-center">Hello!!</div>
        </z-base-dialog>
    </div>`
  })
