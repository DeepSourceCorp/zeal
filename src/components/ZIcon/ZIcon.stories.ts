import ZIcon from './ZIcon.vue'

import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'

export default {
  title: 'Icons',
  component: ZIcon,
  excludeStories: /.*Data$/
}

export const Default = () => ({
  components: { ZIcon },
  template: `<div class='wrapper'>
        <z-icon icon='arrow-up'></z-icon>
        <p class="icon-title">arrow-up</p>
    </div>`
})

export const IconWithCustomColor = () => ({
    components: { ZIcon },
    template: `<div class="wrapper">
        <z-icon icon="activity" color="#6A5ACD"></z-icon>
    </div>`
})

export const SmallIcon = () => ({
  components: { ZIcon },
  template: `<div class='wrapper'>
        <z-icon icon='arrow-up' size="small"></z-icon>
        <p class='icon-title'>arrow-up</p>
    </div>`
})
