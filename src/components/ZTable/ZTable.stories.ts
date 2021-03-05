import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZTable from '../ZTable/ZTable.vue'

export default {
  title: 'Table',
  component: ZTable,
  excludeStories: /.*Data$/
}

export const DefaultTable = () => ({
  components: { ZTable },
  data() {
    return {
      value: true
    }
  },

  template: `<div class='padded-container'>
            <div class="input-container p-4">
                <z-toggle :value="value"
                @input="() => this.value = !this.value"></z-toggle>
            </div>
        </div>`
})
