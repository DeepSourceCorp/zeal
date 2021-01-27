import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZMenu from './ZMenu.vue'
import ZMenuItem from './ZMenuItem.vue'
import ZMenuSection from './ZMenuSection.vue'
import ZDivider from '../ZDivider/ZDivider.vue'

export default {
  title: 'Menu',
  component: ZMenu,
  excludeStories: /.*Data$/
}

export const Example = () => ({
  components: { ZMenu, ZMenuItem, ZMenuSection, ZDivider },
  template: `
    <div class="padded-container">
        <z-menu>
          <template slot="trigger">
            <button class="bg-ink-100 text-vanilla-100 p-2 px-4 rounded-lg shadow-sm">Hello World</button>
          </template>
          <div slot="body" class="bg-ink-300 flex flex-col my-2 rounded-sm">
            <z-menu-section title="Account Actions">
              <z-menu-item>Account Settings</z-menu-item>
              <z-menu-item>Contact Support</z-menu-item>
              <z-menu-item>Give Feedback</z-menu-item>
            </z-menu-section>
            <z-menu-section :divider="false">
              <z-menu-item>Switch User</z-menu-item>
              <z-menu-item>Sign out</z-menu-item>
            </z-menu-section>
          </template>
        </z-menu>
    </div>`
})
