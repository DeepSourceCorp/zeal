import '../../assets/css/layout.css'
import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'

import ZAvatar from '../ZAvatar/ZAvatar.vue'
import ZIcon from '../ZIcon/ZIcon.vue'
import ZTimeline from './ZTimeline.vue'
import ZTimelineItem from './ZTimelineItem/ZTimelineItem.vue'

export default {
  title: 'Timeline',
  component: ZTimeline,
  excludeStories: /.*Data$/
}

export const BasicTimeline = () => ({
  components: { ZTimeline, ZTimelineItem },
  template: `<div class='padded-container'>
    <z-timeline>
      <z-timeline-item class="h-32" content="Carter Workman" timestamp="Friday, 4:24PM"></z-timeline-item>
      <z-timeline-item class="h-32" content="Carter Workman" timestamp="Friday, 4:24PM"></z-timeline-item>
      <z-timeline-item class="h-32" content="Carter Workman" timestamp="Friday, 4:24PM"></z-timeline-item>
      <z-timeline-item class="h-32" content="Carter Workman" timestamp="Friday, 4:24PM"></z-timeline-item>
    </z-timeline>
    </div>`
})

export const TimelineWithCustomIcon = () => ({
  components: { ZTimeline, ZTimelineItem, ZAvatar },
  template: `<div class='padded-container'>
    <z-timeline>
      <z-timeline-item class="h-32" content="Carter Workman" timestamp="Friday, 4:24PM">
        <template slot="icon">
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          user-name="Akshay Paliwal"
          size="sm"
        ></z-avatar></template>
      </z-timeline-item>
      <z-timeline-item class="h-32" content="Carter Workman" timestamp="Friday, 4:24PM">
        <template slot="icon">
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          user-name="Akshay Paliwal"
          size="sm"
        ></z-avatar></template>
      </z-timeline-item>
      <z-timeline-item class="h-32" content="Carter Workman" timestamp="Friday, 4:24PM">
        <template slot="icon">
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          user-name="Akshay Paliwal"
          size="sm"
      ></z-avatar></template>
      </z-timeline-item>
      <z-timeline-item class="h-32" content="Carter Workman" timestamp="Friday, 4:24PM">
        <template slot="icon">
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          user-name="Akshay Paliwal"
          size="sm"
        ></z-avatar></template>
      </z-timeline-item>
    </z-timeline>
    </div>`
})

export const TimelineWithCustomBorderWidth = () => ({
  components: { ZTimeline, ZTimelineItem, ZAvatar },
  template: `<div class='padded-container'>
    <z-timeline>
      <z-timeline-item content="Carter Workman" timestamp="Friday, 4:24PM" border-width-class="" class="h-32">
        <template slot="icon">
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          user-name="Akshay Paliwal"
          size="sm"
        ></z-avatar></template>
      </z-timeline-item>
      <z-timeline-item content="Carter Workman" timestamp="Friday, 4:24PM" border-width-class="" class="h-32">
        <template slot="icon">
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          user-name="Akshay Paliwal"
          size="sm"
        ></z-avatar></template>
      </z-timeline-item>
      <z-timeline-item content="Carter Workman" timestamp="Friday, 4:24PM" border-width-class="" class="h-32">
        <template slot="icon">
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          user-name="Akshay Paliwal"
          size="sm"
        ></z-avatar></template>
      </z-timeline-item>
      <z-timeline-item content="Carter Workman" timestamp="Friday, 4:24PM" border-width-class="" class="h-32">
        <template slot="icon">
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          user-name="Akshay Paliwal"
          size="sm"
        ></z-avatar></template>
      </z-timeline-item>
    </z-timeline>
    </div>`
})

export const AuditLogEventsAsTimelineItems = () => ({
  components: { ZTimeline, ZTimelineItem, ZIcon },
  data: function () {
    return {
      auditLogs: [
        {
          icon: 'bot',
          descriptionRendered: `<strong>John Doe's brother</strong> updated name of the namespace to <strong>@deepsourcelabs</strong>.`,
          createdAt: '1 month ago'
        },
        {
          icon: 'focus',
          descriptionRendered:
            '<strong>John Doe</strong> updated publish access to the namespace <strong>@deepsource</strong>. Members can now push to <strong>@deepsource/armory</strong>.',
          createdAt: '2 months ago'
        },
        {
          icon: 'bot',
          descriptionRendered: '<strong>John Doe</strong> created the namespace <strong>@deepsource</strong>.',
          createdAt: '3 months ago'
        }
      ]
    }
  },
  template: `<div class='padded-container'>
    <z-timeline>
      <z-timeline-item
      v-for="(log, idx) in auditLogs"
      :key="idx"
      border-width-class=""
      icon-align-items-class="items-baseline"
      class="w-full h-24 md:h-20"
    >
      <template #icon>
        <z-icon :icon="log.icon" />
      </template>

      <div
        class="flex flex-col w-full text-xs md:justify-between gap-y-1 md:gap-y-0 md:flex-row text-vanilla-400"
      >
        <p class="text-xs leading-5 prose" v-html="log.descriptionRendered"></p>

        <span class="leading-5">{{ log.createdAt }}</span>
      </div>
    </z-timeline-item>
    </z-timeline>
    </div>`
})
