import ZAvatar from '../../src/components/ZAvatar'
import ZTimeline from '../../src/components/ZTimeline'
import ZTimelineItem from '../../src/components/ZTimeline/ZTimelineItem'

import { mount } from '@vue/test-utils'

const BasicTimeline = {
  template: `<z-timeline>
      <z-timeline-item class="h-32" content="Carter Workman" timestamp="Friday, 4:24PM"></z-timeline-item>
      <z-timeline-item class="h-32" content="Carter Workman" timestamp="Friday, 4:24PM"></z-timeline-item>
    </z-timeline>`,
  components: {
    ZTimeline,
    ZTimelineItem
  }
}

const TimelineWithCustomIcon = {
  template: `<z-timeline>
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
      </z-timeline>`,
  components: {
    ZTimeline,
    ZTimelineItem,
    ZAvatar
  }
}

describe('ZTimeline', () => {
  it('renders a default timeline component', () => {
    let wrapper = mount(BasicTimeline)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('renders a timeline component with custom icon', () => {
    let wrapper = mount(TimelineWithCustomIcon)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
