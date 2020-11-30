import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Button from '../components/MyButton.vue'

export default {
  title: 'Button'
}

export const withText = () => ({
  components: { Button },
  template: '<button @click="action">Hello Button</button>',
  methods: { action: action('clicked') }
})

export const withJSX = () => ({
  render() {
    // return <MyButton onClick={linkTo('Button', 'With Some Emoji')}>With JSX</MyButton>
  }
})

export const withSomeEmoji = () => ({
  components: { Button },
  template: '<button>😀 😎 👍 💯<button>'
})
