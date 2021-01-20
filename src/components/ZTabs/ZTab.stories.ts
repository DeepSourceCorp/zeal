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
                  <z-tab>Code</z-tab>
                  <z-tab>Issues</z-tab>
                  <z-tab>Pull Requests</z-tab>
                </z-tab-list>
                <z-tab-items>
                  <z-tab-item>This is your code.</z-tab-item>
                  <z-tab-item>There are the list of issues.</z-tab-item>
                  <z-tab-item>All the Pull Requests</z-tab-item>
                </z-tab-items>
              </z-tabs>
      </div>`
})
