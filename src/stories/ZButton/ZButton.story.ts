import ZButton from '../../components/ZButton/ZButton.vue'
import { Meta, Story } from '@storybook/addon-docs/blocks'
import { component } from 'vue/types/umd'

export const ButtonWithText = () => ({
  components: { ZButton },
  template: '<z-button>Hello Button</button>',
  title: 'ZButton'
})

ButtonWithText.story = {
  name: 'Button with Text'
}
