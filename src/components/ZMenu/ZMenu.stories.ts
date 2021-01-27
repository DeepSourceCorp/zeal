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

export const BasicExample = () => ({
  components: { ZMenu, ZMenuItem, ZMenuSection, ZDivider },
  template: `
    <div class="container">
        <z-menu>
          <template slot="trigger">
            <span class="bg-ink-100 text-vanilla-100 p-2 px-4 rounded-lg shadow-sm outline-none focus:outline-none">Menu</span>
          </template>
          <template slot="body">
            <z-menu-section title="Logged In As">
              <z-menu-item>evan@deepsource.io</z-menu-item>
            </z-menu-section>
            <z-menu-section title="Actions">
              <z-menu-item :action="goToSettings">Account Settings</z-menu-item>
              <z-menu-item :action="goToSettings" :disabled="true">Autofix (Coming Soon)</z-menu-item>
              <z-menu-item :action="goToSettings">Contact Support</z-menu-item>
              <z-menu-item :action="goToSettings">Give Feedback</z-menu-item>
            </z-menu-section>
            <z-menu-section :divider="false">
              <z-menu-item :action="goToSettings">Switch User</z-menu-item>
              <z-menu-item :action="goToSettings">Sign out</z-menu-item>
            </z-menu-section>
          </template>
        </z-menu>
    </div>`,
  methods: {
    goToSettings() {
      alert('Action Triggered')
    }
  }
})
