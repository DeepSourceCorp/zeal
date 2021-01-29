import '@/assets/css/layout.css'
import '@/assets/css/typography.css'
import '@/assets/css/tailwind.css'
import ZSidebar from './ZSidebar.vue'
import ZAvatar from '@/components/ZAvatar/ZAvatar.vue'
import ZIcon from '@/components/ZIcon/ZIcon.vue'
import ZButton from '@/components/ZButton/ZButton.vue'

export default {
  title: 'Sidebar',
  component: ZSidebar,
  excludeStories: /.*Data$/
}

export const DefaultSidebar = () => ({
  components: { ZSidebar, ZAvatar, ZIcon, ZButton },
<<<<<<< HEAD
  template: `<div class="w-full-screen h-screen min-h-full -mt-3">
=======
    template: `<div class="w-full-screen h-screen min-h-full -mt-3">
>>>>>>> Add Sidebar section and component
        <z-sidebar>
            <div slot="header" class="h-full flex items-center p-1">
                <div class="flex-1 items-center flex space-x-1 text-base font-normal">
                    <z-icon icon="globe" size="small"></z-icon>
                    <span class="">MediaCorp</span>
                </div>
                <div class="flex items-center">
                    <z-avatar
                        image="https://randomuser.me/api/portraits/women/24.jpg"
                        user-name="Akshay Paliwal"
                        size="sm"
                    ></z-avatar>
                    <z-icon icon="chevron-down" size="small"></z-icon>
                </div>
            </div>
            <div slot="body" class="flex flex-col text-vanilla-200 h-full font-medium">
                <div class="flex items-center space-x-2 text-sm px-2 py-2 cursor-pointer hover:bg-ink-300">
                    <z-icon icon="columns" size="small"></z-icon>
                    <span>My dashboard</span>
                </div>
                <div class="flex items-center space-x-2 text-sm px-2 py-2 cursor-pointer hover:bg-ink-300">
                    <z-icon icon="home" size="small"></z-icon>
                    <span>Team home</span>
                </div>
                <div class="flex items-center space-x-2 text-sm px-2 py-2 cursor-pointer hover:bg-ink-300">
                    <z-icon icon="activity" size="small"></z-icon>
                    <span class="flex-1">Actively analyzing</span>
                    <z-button color="primary" 
                        icon="plus" 
                        iconColor="ink-400" 
                        iconSize="small">
                    </z-button>
                </div>
                <div class="ml-4 text-vanilla-400 font-normal">
                    <div class="flex items-center space-x-2 text-sm px-2 py-2 cursor-pointer hover:bg-ink-300">
                        <z-icon icon="refresh-ccw" size="small" color="juniper"></z-icon>
                        <span>All repositories</span>
                    </div>
                    <div class="flex items-center space-x-2 text-sm px-2 py-2 cursor-pointer hover:bg-ink-300">
                        <z-icon icon="globe" size="small"></z-icon>
                        <span>All repositories</span>
                    </div>
                    <div class="flex items-center space-x-2 text-sm px-2 py-2 cursor-pointer hover:bg-ink-300">
                        <z-icon icon="git-merge" size="small"></z-icon>
                        <span>All repositories</span>
                    </div>
                    <div class="flex items-center space-x-2 text-sm px-2 py-2 cursor-pointer hover:bg-ink-300">
                        <z-icon icon="globe" size="small"></z-icon>
                        <span>All repositories</span>
                    </div>
                    <div class="flex items-center space-x-2 text-sm px-2 py-2 cursor-pointer hover:bg-ink-300">
                        <z-icon icon="globe" size="small"></z-icon>
                        <span>All repositories</span>
                    </div>
                    <div class="flex items-center space-x-2 text-sm px-2 py-2 cursor-pointer hover:bg-ink-300">
                        <z-icon icon="git-merge" size="small"></z-icon>
                        <span>All repositories</span>
                    </div>
                    <div class="flex items-center space-x-2 text-sm px-2 py-2 cursor-pointer hover:bg-ink-300">
                        <z-icon icon="git-merge" size="small"></z-icon>
                        <span>All repositories</span>
                    </div>
                </div>
                <div class="flex items-center space-x-2 text-sm px-2 py-2 cursor-pointer hover:bg-ink-300">
                    <z-icon icon="archive" size="small"></z-icon>
                    <span>All repositories</span>
                </div>
            </div>
            <div slot="footer" class="h-full flex flex-col justify-evenly">
                <div class="flex space-x-2 px-2 py-2 items-center cursor-pointer hover:bg-ink-300 text-sm">
                    <z-icon icon="users" size="small"></z-icon>
                    <span>My team</span>
                </div>
                <div class="flex space-x-2 px-2 py-2 items-center cursor-pointer hover:bg-ink-300 text-sm">
                    <z-icon icon="settings" size="small"></z-icon>
                    <span>Team settings</span>
                </div>
                <div class="flex space-x-2 px-2 py-2 items-center cursor-pointer hover:bg-ink-300 text-sm">
                    <z-icon icon="star" size="small" color="juniper"></z-icon>
                    <span>Upgrade to Pro</span>
                </div>
            </div>
        </z-sidebar>
    </div>`
})
