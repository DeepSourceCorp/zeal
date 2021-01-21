import ZNavMenu from './ZNavMenu.vue'

export default {
  title: 'Zeal Marketing/Nav Menu',
  component: ZNavMenu,
  excludeStories: /.*Data$/,
}

export const Dropdown = () => ({
  components: { ZNavMenu },
  template: `<div class='bg-padded-container px-40'>
      <z-nav-menu title="Documentation">
        <ul>
          <li class="p-2">Link</li>
          <li class="p-2">Link</li>
          <li class="p-2">Link</li>
        </ul>
      </z-nav-menu>
    </div>`
})

export const Accordion = () => ({
  components: { ZNavMenu },
  template: `<div class='bg-padded-container px-40'>
      <z-nav-menu type="accordion" title="Documentation">
        <ul>
          <li class="p-2">Link</li>
          <li class="p-2">Link</li>
          <li class="p-2">Link</li>
        </ul>
      </z-nav-menu>
    </div>`
})
