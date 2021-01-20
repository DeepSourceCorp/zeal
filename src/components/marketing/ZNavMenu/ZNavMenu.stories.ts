import ZNavMenu from './ZNavMenu.vue'

export default {
  title: 'Zeal Marketing/Nav Menu',
  component: ZNavMenu,
  excludeStories: /.*Data$/,
  parameters: {
    layout: 'fullscreen'
  }
}

export const Basic = () => ({
  components: { ZNavMenu },
  template: `<div class='bg-gradient-skeleton'>
      <z-nav-menu></z-nav-menu>
    </div>`
})
