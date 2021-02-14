import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZNavBar from './ZNavBar.vue'
import ZButton from '../../components/ZButton/ZButton.vue'
import ZIcon from '../../components/ZIcon/ZIcon.vue'
import ZDivider from '../../components/ZDivider/ZDivider.vue'
import ZList from '../../components/ZList/ZList.vue'
import ZListItem from '../../components/ZList/ZListItem.vue'
import ZMenu from '../../components/ZMenu/ZMenu.vue'
import ZMenuItem from '../../components/ZMenu/ZMenuItem/ZMenuItem.vue'
import ZMenuSection from '../../components/ZMenu/ZMenuItem/ZMenuItem.vue'

export default {
  title: 'NavBar',
  component: ZNavBar,
  excludeStories: /.*Data$/
}

export const Horizontal = () => ({
  components: {
    ZNavBar,
    ZButton,
    ZMenuItem,
    ZMenu,
    ZList,
    ZListItem,
    ZMenuSection,
    ZIcon,
    ZDivider
  },
  data() {
    return {
      resources: ['Documentation', 'Discourse forum', 'Learning Center', 'Blog', 'Slack User Group']
    }
  },
  template: `<div class="bg-gradient-galaxy h-screen w-full-screen">
                <z-nav-bar class="text-vanilla-100">
                    <template slot="brand">
                        <img class="h-5 lg:h-7 max-w-none" src="https://assets.deepsource.io/fc583c0/images/logo-wordmark-white.svg"/>
                    </template>
                    <template slot="links">
                        <z-menu width="auto">
                            <template v-slot:trigger="{ toggle }">
                                <span class="block px-4 py-2 hover:bg-ink-300 rounded-sm" @mouseover="toggle()">Product</span>
                            </template>
                            <template slot="body" @mouseleave="toggle()">
                                <div class="flex w-full space-x-4">
                                    <z-list class="text-vanilla-400 text-sm lg:text-base space-y-3 w-auto lg:w-32 uppercase p-4" title="Integrations">
                                        <div class="flex flex-col gap-y-4 text-vanilla-100 capitalize">
                                            <z-list-item v-for="i in 3" :key="i" as="a" icon="gitlab" iconSize="medium" class="text-xs lg:text-sm flex cursor-pointer items-end space-x-2">
                                                GitHub
                                            </z-list-item>
                                        </div>
                                    </z-list>
                                    <div class="h-auto w-px bg-slate"></div>
                                    <z-list class="text-vanilla-400 text-sm lg:text-base space-y-3 w-auto lg:w-72 uppercase p-4" title="Languages">
                                        <div class="flex flex-col flex-nowrap lg:flex-row lg:flex-wrap gap-x-0 gap-y-4 lg:gap-x-3 lg:gap-y-3 text-vanilla-100 capitalize">
                                            <z-list-item v-for="i in 10" :key="i" class="cursor-pointer" itemStyle="w-full flex items-center space-x-2">
                                                <img src="https://i.imgur.com/6r5cdUd.png" class="h-4 lg:h-10" />
                                                <a class="text-xs lg:text-sm flex lg:hidden hover:text-juniper transition-all duration-300 ease-in-out">JavaScript</a>    
                                            </z-list-item>
                                        </div>
                                    </z-list>
                                </div>
                            </template>
                        </z-menu>
                        <z-menu :collapseOnMobile="true">
                            <template v-slot:trigger="{ toggle }">
                                <span class="block px-4 py-2 hover:bg-ink-300 rounded-sm" @mouseover="toggle()">Resources</span>
                            </template>
                            <template slot="body">
                                <z-menu-item v-for="item in resources" :key="item">
                                    <a class="text-xs lg:text-sm text-vanilla-400 lg:text-vanilla-100 inline-block cursor-pointer py-1 lg:hover:text-vanilla-100 hover:text-juniper transition-all duration-300 ease-in-out">{{item}}</a>    
                                </z-menu-item>
                            </template>
                        </z-menu>
                        <a class="flex px-4 py-2 hover:bg-ink-300 justify-start sm:justify-center" href="https://deepsource.io/">Enterprise</a>
                        <a class="flex px-4 py-2 hover:bg-ink-300" href="https://deepsource.io/pricing">Pricing</a>
                    </template>
                    <template slot="cta">
                        <z-button color="link" type="link" class="text-sm lg:text-base">Log in</z-button>
                        <z-button color="primary" size="small" spacing="px-4 lg:px-6">Sign up</z-button>
                    </template>
                </z-nav-bar>
            </div>`
})
