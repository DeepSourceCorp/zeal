import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZTabs from './ZTabs.vue'
import ZTab from './ZTab.vue'
import ZTabList from './ZTabList.vue'
import ZTabItems from './ZTabItems.vue'
import ZTabItem from './ZTabItem.vue'
import ZIcon from '../ZIcon/ZIcon.vue'

export default {
  title: 'Tabs',
  component: ZTabs,
  excludeStories: /.*Data$/
}

export const BasicTabs = () => ({
  components: { ZTabs, ZTabList, ZTab, ZTabItems, ZTabItem },
  template: `<div class='padded-container'>
              <z-tabs>
                <z-tab-list>
                  <z-tab>Overview</z-tab>
                  <z-tab>Issues</z-tab>
                  <z-tab>Metrics</z-tab>
                  <z-tab>Autofix</z-tab>
                </z-tab-list>
                <z-tab-items>
                  <z-tab-item>Overview of the code.</z-tab-item>
                  <z-tab-item>There are the list of issues.</z-tab-item>
                  <z-tab-item>This are metrics.</z-tab-item>
                  <z-tab-item>Works like magic</z-tab-item>
                </z-tab-items>
              </z-tabs>
      </div>`
})

export const DisabledTabs = () => ({
  components: { ZTabs, ZTabList, ZTab, ZTabItems, ZTabItem },
  template: `<div class='padded-container'>
              <z-tabs>
                <z-tab-list>
                  <z-tab>Overview</z-tab>
                  <z-tab>Issues</z-tab>
                  <z-tab disabled=true>Metrics (Disabled)</z-tab>
                  <z-tab disabled=true>Autofix (Disabled)</z-tab>
                </z-tab-list>
                <z-tab-items>
                  <z-tab-item>Overview of the code.</z-tab-item>
                  <z-tab-item>There are the list of issues.</z-tab-item>
                  <z-tab-item>This are metrics.</z-tab-item>
                  <z-tab-item>Works like magic</z-tab-item>
                </z-tab-items>
              </z-tabs>
      </div>`
})

export const TabsWithIcons = () => ({
  components: { ZTabs, ZTabList, ZTab, ZTabItems, ZTabItem, ZIcon },
  template: `<div class='padded-container'>
              <z-tabs>
                <z-tab-list class="bg-ink-300 p-4 pb-0">
                  <z-tab>
                    <z-icon icon="activity" size="small"></z-icon>
                    Overview
                  </z-tab>
                  <z-tab>
                    <z-icon icon="code" size="small"></z-icon>
                    Issues
                  </z-tab>
                  <z-tab>
                    <z-icon icon="bar-chart" size="small"></z-icon>
                    Metrics
                  </z-tab>
                  <z-tab>
                  <z-icon icon="settings" size="small"></z-icon>
                    Settings
                  </z-tab>
                </z-tab-list>
                <z-tab-items class="p-4">
                  <z-tab-item>Overview of the code.</z-tab-item>
                  <z-tab-item>There are the list of issues.</z-tab-item>
                  <z-tab-item>This are metrics.</z-tab-item>
                  <z-tab-item>Works like magic</z-tab-item>
                </z-tab-items>
              </z-tabs>
      </div>`
})
