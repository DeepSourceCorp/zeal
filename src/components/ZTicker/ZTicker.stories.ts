import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZTicker from './ZTicker.vue'

export default {
  title: 'Ticker',
  component: ZTicker,
  excludeStories: /.*Data$/
}

export const DefaultTicker = () => ({
  components: { ZTicker },
 
  template: `<div class='padded-container'>
        <div class="input-container">
            <z-ticker></z-ticker>
        </div>
    </div>`
})

