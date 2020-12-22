import ZPageLabel from './ZPageLabel.vue'

export default {
  title: 'Zeal Marketing/Page Label',
  component: ZPageLabel,
  excludeStories: /.*Data$/
}

export const DefaultWithoutText = () => ({
  components: { ZPageLabel },
  template: `<div class='padded-container'>
      <z-page-label></z-page-label>
    </div>`
})

export const PageLabelWithText = () => ({
  components: { ZPageLabel },
  template: `<div class='padded-container'>
      <z-page-label>Page</z-page-label>
    </div>`
})

export const PageLabelWithCustomColoredBackgrounds = () => ({
  components: { ZPageLabel },
  template: `<div class='padded-container'>
      <z-page-label background-color="ink-400">Page</z-page-label>
      <z-page-label background-color="vanilla-300" text-color="ink-400">Page</z-page-label>
      <z-page-label background-color="slate">Page</z-page-label>
      <z-page-label background-color="juniper">Page</z-page-label>
      <z-page-label background-color="gradient-dawn">Page</z-page-label>
      <z-page-label background-color="gradient-splash">Page</z-page-label>
    </div>`
})
