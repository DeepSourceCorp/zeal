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
      <z-page-label class="bg-green">Page</z-page-label>
    </div>`
})
