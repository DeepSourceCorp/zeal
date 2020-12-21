import ZHero from './ZHero.vue'

import { action } from '@storybook/addon-actions'

import '../../../assets/css/tailwind.css'
import '../../../assets/css/typography.css'
import '../../../assets/css/layout.css'

export default {
  title: 'Zeal/Marketing/Sections/Hero',
  component: ZHero,
  excludeStories: /.*Data$/
}

export const VerticalItems = () => ({
  components: { ZHero },
  template: `
    <z-hero direction="something">
      <h1>Hero Title</h1>
      <h2>Hero Subtitle</h2>
      <p>This is a paragraph</p>
      <img slot="illustration" src="https://i.imgur.com/C3IjDqe.jpg" />
    </z-hero>
  `
})
