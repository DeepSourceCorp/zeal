import '@/assets/css/layout.css'
import '@/assets/css/typography.css'
import '@/assets/css/tailwind.css'
import ZSidebarMenu from './ZSidebarMenu.vue'
import ZSidebarItem from '@/components/ZSidebarMenu/ZSidebarItem.vue'
import ZIcon from '@/components/ZIcon/ZIcon.vue'
import ZButton from '@/components/ZButton/ZButton.vue'
import ZDivider from '../ZDivider/ZDivider.vue'
import ZAvatar from '../ZAvatar/ZAvatar.vue'
import ZMenu from '@/components/ZMenu/ZMenu.vue'
import ZMenuItem from '@/components/ZMenu/ZMenuItem'
import ZMenuSection from '@/components/ZMenu/ZMenuSection'

export default {
  title: 'Sidebar Menu',
  component: ZSidebarMenu,
  excludeStories: /.*Data$/
}

export const DefaultSidebarMenu = () => ({
  components: {
    ZSidebarMenu,
    ZSidebarItem,
    ZIcon,
    ZAvatar,
    ZButton,
    ZMenu,
    ZMenuItem,
    ZMenuSection,
    ZDivider
  },
  template: `
  <div class="w-80">  
    <z-sidebar-menu>
      <template v-slot:header="{ isCollapsed }">
        <div class="h-full flex items-center p-1 justify-between"
            :class="isCollapsed ? 'flex-col' : 'flex-row'">
          <div class="flex space-x-1 items-center">
            <z-icon icon="globe" size="small"></z-icon>
            <span :class="isCollapsed ? 'hidden' : 'block'">
              MediaCorp
            </span>
          </div>
          <div class="items-center hidden lg:flex"
              :class="{'lg:space-x-1': !isCollapsed}">
            <z-avatar
              image="https://randomuser.me/api/portraits/women/24.jpg"
              user-name="Akshay Paliwal"
              size="sm"
              :class="isCollapsed ? 'hidden' : 'block'"
            ></z-avatar>
            <z-avatar
              image="https://randomuser.me/api/portraits/women/24.jpg"
              user-name="Akshay Paliwal"
              size="xs"
              :class="isCollapsed ? 'block' : 'hidden'"
            ></z-avatar>
            <z-icon icon="chevron-down" 
                    size="small" 
                    :class="isCollapsed ? 'hidden' : 'block'">
            </z-icon>
          </div>
        </div>
      </template>
      <template v-slot="{ isCollapsed }">
        <z-sidebar-item icon="columns">My dashboard</z-sidebar-item>
        <z-sidebar-item icon="home">Team home</z-sidebar-item>
        <z-sidebar-item icon="activity" :active="true">
          <span class="flex-1">Actively Analyzing</span>
          <z-button color="primary" 
              icon="plus" 
              iconColor="ink-400" 
              iconSize="small">
          </z-button>
        </z-sidebar-item>
        <div class="ml-5 text-vanilla-400"
              :class="isCollapsed ? 'hidden' : 'block'">
          <z-sidebar-item icon="refresh-ccw" icon-color="juniper">org-activity-archive</z-sidebar-item>
          <z-sidebar-item icon="globe">marvin</z-sidebar-item>
          <z-sidebar-item icon="git-merge">asgard-office</z-sidebar-item>
          <z-sidebar-item icon="globe">first-release-with-a...</z-sidebar-item>
          <z-sidebar-item icon="globe">asgard</z-sidebar-item>
          <z-sidebar-item icon="git-merge">asgard-office</z-sidebar-item>
          <z-sidebar-item icon="git-merge">second-release</z-sidebar-item>
          <z-sidebar-item icon="git-merge">another-release</z-sidebar-item>
        </div>
        <z-sidebar-item icon="archive">All repositories</z-sidebar-item>
      </template>
      <template v-slot:footer>
        <div class="h-full flex flex-col justify-evenly">
          <z-sidebar-item icon="users">My team</z-sidebar-item>
          <z-sidebar-item icon="settings">Team settings</z-sidebar-item>
          <z-sidebar-item icon="star" icon-color="juniper">Upgrade to Pro</z-sidebar-item>
        </div>
      </template>
    </z-sidebar-menu>
  </div>`
})
