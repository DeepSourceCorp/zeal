import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZCode from './ZCode.vue'

export default {
  title: 'Code',
  component: ZCode,
  excludeStories: /.*Data$/
}

export const DefaultCode = () => ({
  components: { ZCode },
  data() {
    return {
      content: `<div class='input-container'>
        <z-code :content="content"></z-code>           
    </div>`
    }
  },
  template: `<div class='input-container'>
        <z-code :content="content"></z-code>           
    </div>`
})
