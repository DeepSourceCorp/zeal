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
      <div class="h-full flex flex-col lg:flex-row items-center p-1 justify-between" slot="header">
        <div class="flex space-x-1 items-center">
          <z-icon icon="globe" size="small"></z-icon>
          <span class="hidden lg:block">MediaCorp</span>
        </div>
        <div class="flex lg:space-x-1 items-center">
          <z-avatar
            image="https://randomuser.me/api/portraits/women/24.jpg"
            user-name="Akshay Paliwal"
            size="sm"
            class="hidden lg:block"
          ></z-avatar>
          <z-avatar
            image="https://randomuser.me/api/portraits/women/24.jpg"
            user-name="Akshay Paliwal"
            size="xs"
            class="block lg:hidden"
          ></z-avatar>
          <z-icon icon="chevron-down" size="small" class="hidden lg:block"></z-icon>
        </div>
      </div>
      <template slot-scope="{ isCollapsed }">
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
              :class="isCollapsed ? 'hidden' : 'hidden lg:block'">
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
      <div slot="footer" class="h-full flex flex-col justify-evenly">
        <z-sidebar-item icon="users">My team</z-sidebar-item>
        <z-sidebar-item icon="settings">Team settings</z-sidebar-item>
        <z-sidebar-item icon="star" icon-color="juniper">Upgrade to Pro</z-sidebar-item>
      </div>
    </z-sidebar-menu>
  </div>`
})

export const RightSidebarMenu = () => ({
  components: { ZSidebarMenu, ZSidebarItem, ZIcon, ZAvatar, ZButton },
  template: `
  <div class="w-80">  
    <z-sidebar-menu direction="right">
      <template v-slot:header="{ isCollapsed }">
        <div class="h-full flex items-center p-1 justify-between"
            :class="isCollapsed ? 'flex-col' : 'flex-col lg:flex-row'">
          <div class="flex space-x-1 items-center">
            <z-icon icon="globe" size="small"></z-icon>
            <span :class="isCollapsed ? 'hidden' : 'hidden lg:block'">
              MediaCorp
            </span>
          </div>
          <div class="flex items-center"
              :class="{'lg:space-x-1': !isCollapsed}">
            <z-avatar
              image="https://randomuser.me/api/portraits/women/24.jpg"
              user-name="Akshay Paliwal"
              size="sm"
              :class="isCollapsed ? 'hidden' : 'hidden lg:block'"
            ></z-avatar>
            <z-avatar
              image="https://randomuser.me/api/portraits/women/24.jpg"
              user-name="Akshay Paliwal"
              size="xs"
              :class="isCollapsed ? 'block' : 'block lg:hidden'"
            ></z-avatar>
            <z-icon icon="chevron-down" 
                    size="small" 
                    :class="isCollapsed ? 'hidden' : 'hidden lg:block'">
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
              :class="isCollapsed ? 'hidden' : 'hidden lg:block'">
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
