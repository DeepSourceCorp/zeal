import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'

import ZDivider from '../ZDivider/ZDivider.vue'
import ZAvatar from '../ZAvatar/ZAvatar.vue'

import ZMenu from './ZMenu.vue'
import ZMenuItem from './ZMenuItem.vue'
import ZMenuSection from './ZMenuSection.vue'

export default {
  title: 'Menu',
  component: ZMenu,
  excludeStories: /.*Data$/
}

export const BasicMenu = () => ({
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

export const MenuWithIcons = () => ({
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
              <z-menu-item :action="goToSettings" icon="settings">Account Settings</z-menu-item>
              <z-menu-item :action="goToSettings" :disabled="true" icon="cpu">Autofix (Coming Soon)</z-menu-item>
              <z-menu-item :action="goToSettings" icon="headphones">Contact Support</z-menu-item>
              <z-menu-item :action="goToSettings" icon="message-square">Give Feedback</z-menu-item>
            </z-menu-section>
            <z-menu-section :divider="false">
              <z-menu-item :action="goToSettings" icon="users">Switch User</z-menu-item>
              <z-menu-item :action="goToSettings" icon="log-out">Sign out</z-menu-item>
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

export const MenuWithAvatarTrigger = () => ({
  components: { ZMenu, ZMenuItem, ZMenuSection, ZDivider, ZAvatar },
  template: `
    <div class="container">
        <z-menu>
          <template slot="trigger">
          <z-avatar
            type="span"
            image="https://randomuser.me/api/portraits/women/24.jpg"
            user-name="Akshay Paliwal"
            href="https://example.com"
          ></z-avatar>
          </template>
          <template slot="body">
            <z-menu-section title="Logged In As">
              <z-menu-item>evan@deepsource.io</z-menu-item>
            </z-menu-section>
            <z-menu-section :divider="false">
              <z-menu-item :action="goToSettings">Preferences</z-menu-item>
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

export const MenuWithComplexItems = () => ({
  components: { ZMenu, ZMenuItem, ZMenuSection, ZDivider, ZAvatar },
  template: `
    <div class="container">
        <z-menu>
          <template slot="trigger">
            <span class="bg-ink-100 text-vanilla-100 p-2 px-4 rounded-lg shadow-sm outline-none focus:outline-none">Switch User</span>
          </template>
          <template slot="body">
            <z-menu-section title="Switch User">
              <z-menu-item :action="goToSettings">
                <z-avatar
                  type="span"
                  image="https://randomuser.me/api/portraits/women/24.jpg"
                  user-name="Akshay Paliwal"
                  href="https://example.com"
                ></z-avatar>
                <div class="flex-col">
                  Simona Dsouza
                  <p class="text-vanilla-400 mt-1">simona@deepsource.io</p> 
                </div>
              </z-menu-item>
              <z-menu-item :action="goToSettings">
                <z-avatar
                  type="span"
                  image="https://randomuser.me/api/portraits/men/24.jpg"
                  user-name="Akshay Paliwal"
                  href="https://example.com"
                ></z-avatar>
                <div class="flex-col">
                  Alex Garcia
                  <p class="text-vanilla-400 mt-1">alex@deepsource.io</p> 
                </div>
              </z-menu-item>
            </z-menu-section>
            <z-menu-section :divider="false">
              <z-menu-item icon="plus" :action="goToSettings">Add an Account</z-menu-item>
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
