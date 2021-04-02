import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZTimeline from './ZTimeline.vue'
import ZTimelineItem from './ZTimelineItem/ZTimelineItem.vue'

export default {
  title: 'Timeline',
  component: ZTimeline,
  excludeStories: /.*Data$/
}

export const BasicBreadcrumb = () => ({
  components: { ZTimeline, ZTimelineItem },
  template: `<div class='padded-container'>
    </div>`
})
