import ZButton from './ZButton.vue'

import { action } from '@storybook/addon-actions'

import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'

export default {
  title: 'Zeal/Button',
  component: ZButton,
  excludeStories: /.*Data$/
}

export const DefaultWithoutText = () => ({
  components: { ZButton },
  template: '<z-button></z-button>'
})

export const ButtonWithText = () => ({
  components: { ZButton },
  template: '<z-button color="primary">Hello World</z-button>'
})

export const Colors = () => ({
  components: { ZButton },
  template: `<div>
        <z-button color="primary">Hello World</z-button>
        <z-button color="secondary">Hello World</z-button>
    </div>`
})

export const Sizes = () => ({
  components: { ZButton },
  template: `<div>
        <z-button size="small">Small Button</z-button>
        <z-button size="medium">Medium Button</z-button>
        <z-button size="large">Large Button</z-button>
        <z-button size="xlarge">Extra Large Button</z-button>
    </div>`
})

export const States = () => ({
  components: { ZButton },
  template: `<div>
        <z-button active>Active Button</z-button>
        <z-button disabled>Disabled Button</z-button>
        <z-button color="secondary" active>Active Secondary Button</z-button>
        <z-button color="secondary" disabled>Disabled Secondary Button</z-button>
    </div>`
})

export const FullWidthButton = () => ({
  components: { ZButton },
  template: `<div>
        <z-button full-width>Full Width Button</z-button>
    </div>`
})

export const DefaultLinkButton = () => ({
  components: { ZButton },
  template: `<div>
        <z-button color="link" type="link" to="https://deepsource.io/">Link Button</z-button>
    </div>`
})

export const ActiveLinkButton = () => ({
  components: { ZButton },
  template: `<div>
        <z-button color="link" type="link" to="https://deepsource.io/" active>Link Button</z-button>
    </div>`
})

export const DisabledLinkButton = () => ({
  components: { ZButton },
  template: `<div>
        <z-button color="link" type="link" to="https://deepsource.io/" disabled>Link Button</z-button>
    </div>`
})
