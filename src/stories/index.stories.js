import BaseButton from '../components/BaseButton.vue'

export default {
  component: BaseButton,
  title: 'BaseButton'
}

export const withText = () => ({
  components: { BaseButton },
  template: '<base-button>Hello BaseButton</base-button>'
})
