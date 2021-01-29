import '@/assets/css/layout.css'
import '@/assets/css/typography.css'
import '@/assets/css/tailwind.css'
import ZSidebarMenu from './ZSidebarMenu.vue'
import ZSidebarItem from '@/components/ZSidebarMenu/ZSidebarItem.vue'
import ZAvatar from '@/components/ZAvatar/ZAvatar.vue'
import ZIcon from '@/components/ZIcon/ZIcon.vue'
import ZButton from '@/components/ZButton/ZButton.vue'

export default {
  title: 'Sidebar Menu',
  component: ZSidebarMenu,
  excludeStories: /.*Data$/
}

export const DefaultSidebarMenu = () => ({
  components: { ZSidebarMenu, ZSidebarItem, ZIcon, ZAvatar, ZButton },
  template: `
  <div class="w-80">  
    <z-sidebar-menu>
      <div slot="header" class="h-full flex flex-col sm:flex-row items-center p-1 justify-between">
        <div class="flex space-x-1 items-center">
          <z-icon icon="globe" size="small"></z-icon>
          <span class="hidden sm:block">MediaCorp</span>
        </div>
        <div class="flex sm:space-x-1 items-center">
          <z-avatar
            image="https://randomuser.me/api/portraits/women/24.jpg"
            user-name="Akshay Paliwal"
            size="sm"
            class="hidden sm:block"
          ></z-avatar>
          <z-avatar
            image="https://randomuser.me/api/portraits/women/24.jpg"
            user-name="Akshay Paliwal"
            size="xs"
            class="block sm:hidden"
          ></z-avatar>
          <z-icon icon="chevron-down" size="small" class="hidden sm:block"></z-icon>
        </div>
      </div>
      <z-sidebar-item icon="columns">My dashboard</z-sidebar-item>
      <z-sidebar-item icon="home">Team home</z-sidebar-item>
      <z-sidebar-item icon="activity">
        <span class="flex-1">Actively Analyzing</span>
        <z-button color="primary" 
            icon="plus" 
            iconColor="ink-400" 
            iconSize="small">
        </z-button>
      </z-sidebar-item>
      <z-sidebar-item icon="archive">All repositories</z-sidebar-item>
      <div slot="footer" class="h-full flex flex-col justify-evenly">
        <z-sidebar-item icon="users">My team</z-sidebar-item>
        <z-sidebar-item icon="settings">Team settings</z-sidebar-item>
        <z-sidebar-item icon="star" icon-color="juniper">Upgrade to Pro</z-sidebar-item>
      </div>
    </z-sidebar-menu>
  </div>`
})
