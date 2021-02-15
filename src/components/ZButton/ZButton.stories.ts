import ZButton from './ZButton.vue'

import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'

export default {
  title: 'Button',
  component: ZButton,
  excludeStories: /.*Data$/
}

export const DefaultWithoutText = () => ({
  components: { ZButton },
  template: '<z-button color="primary"></z-button>'
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
        <z-button color="primary" size="small">Small Button</z-button>
        <z-button color="primary" size="medium">Medium Button</z-button>
        <z-button color="primary" size="large">Large Button</z-button>
        <z-button color="primary" size="xlarge">Extra Large Button</z-button>
    </div>`
})

export const States = () => ({
  components: { ZButton },
  template: `<div>
        <z-button color="primary" active>Active Button</z-button>
        <z-button color="primary" disabled>Disabled Button</z-button>
        <z-button color="secondary" active>Active Secondary Button</z-button>
        <z-button color="secondary" disabled>Disabled Secondary Button</z-button>
    </div>`
})

export const IconButton = () => ({
  components: { ZButton },
  template: `<div>
        <z-button color="primary"
                  icon="plus"
                  iconColor="ink-400"></z-button>
    </div>`
})

export const SmallIconButton = () => ({
  components: { ZButton },
  template: `<div>
        <z-button color="primary"
                  icon="plus"
                  iconColor="ink-400"
                  iconSize="small"></z-button>
    </div>`
})

export const FullWidthButton = () => ({
  components: { ZButton },
  template: `<div>
        <z-button color="primary" full-width>Full Width Button</z-button>
    </div>`
})

export const DefaultLinkButton = () => ({
  components: { ZButton },
  template: `<div>
        <z-button color="link" type="link" to="#">Link Button</z-button>
    </div>`
})

export const ActiveLinkButton = () => ({
  components: { ZButton },
  template: `<div>
        <z-button color="link" type="link" to="#" active>Link Button</z-button>
    </div>`
})

export const DisabledLinkButton = () => ({
  components: { ZButton },
  template: `<div>
        <z-button color="link" type="link" to="#" disabled>Link Button</z-button>
    </div>`
})

export const GhostButton = () => ({
  components: { ZButton },
  template: `<div class="flex flex-col space-x-2 items-center">
        <div class="w-full p-6 bg-ink-400">
          <z-button color="ghost" type="link" to="#" class="text-juniper" hoverOpacity="50">Ghost Link</z-button>
        </div>
        <div class="w-full p-6 bg-ink-300">
          <z-button color="ghost" type="button" class="text-vanilla-100" hoverOpacity="100">Ghost Button</z-button>
        </div>
        <div class="w-full p-6">
          <z-button color="ghost" icon="plus" iconColor="vanilla-100"></z-button>
        </div>
    </div>`
})
