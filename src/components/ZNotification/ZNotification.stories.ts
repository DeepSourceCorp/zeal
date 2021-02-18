import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZNotification from './ZNotification.vue'

export default {
  title: 'Notification',
  component: ZNotification,
  excludeStories: /.*Data$/
}

export const DefaultNotification = () => ({
  components: { ZNotification },
  template: `<div class='input-container flex space-x-12'>
        <z-notification value="55"></z-notification>
        <z-notification value="2"></z-notification>
         <z-notification :value="1200" :max="99"></z-notification>
    </div>`
})

export const NotificationOnTab = () => ({
  components: { ZNotification },
  template: `<div class='input-container'>
        <z-notification :value="1200" :max="99"></z-notification>
    </div>`
})
