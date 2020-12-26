import ZScrollSpy from './ZScrollSpy.vue'

export default {
  title: 'Zeal Marketing/Scroll Spy Nav',
  component: ZScrollSpy,
  excludeStories: /.*Data$/
}

export const DefaultWithoutText = () => ({
  components: { ZScrollSpy },
  template: `<div class='padded-container'>
      <z-scroll-spy></z-scroll-spy>
    </div>`
})