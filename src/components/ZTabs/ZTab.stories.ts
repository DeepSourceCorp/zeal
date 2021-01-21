import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZTabs from './ZTabs.vue'
import ZTab from './ZTab.vue'
import ZTabList from './ZTabList.vue'
import ZTabItems from './ZTabItems.vue'
import ZTabItem from './ZTabItem.vue'

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
  components: { ZTabs, ZTabList, ZTab, ZTabItems, ZTabItem },
  template: `<div class='padded-container'>
              <z-tabs>
                <z-tab-list class="bg-ink-300 p-4 pb-0">
                  <z-tab icon="activity">
                    Overview
                  </z-tab>
                  <z-tab icon="code">
                    Issues
                  </z-tab>
                  <z-tab icon="bar-chart">
                    Metrics
                  </z-tab>
                  <z-tab icon="settings">
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

export const MixedTabs = () => ({
  components: { ZTabs, ZTabList, ZTab, ZTabItems, ZTabItem },
  template: `<div class='padded-container'>
              <z-tabs>
                <z-tab-list class="bg-ink-300 p-4 pb-0">
                  <z-tab icon="activity">
                    With Icon
                  </z-tab>
                  <z-tab disabled=true icon="bar-chart">
                    With Icon Disabled
                  </z-tab>
                  <z-tab>
                    Without Icon
                  </z-tab>
                  <z-tab disabled=true>
                    Without Icon Disabled
                  </z-tab>
                </z-tab-list>
                <z-tab-items class="p-4">
                  <z-tab-item>This is a tab with an icon</z-tab-item>
                  <z-tab-item>This is a disabled tab with icon.</z-tab-item>
                  <z-tab-item>This is a tab without icon.</z-tab-item>
                  <z-tab-item>This is a disabled tab without icon </z-tab-item>
                </z-tab-items>
              </z-tabs>
      </div>`
})
