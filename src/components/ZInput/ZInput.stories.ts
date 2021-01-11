import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZInput from './ZInput.vue'

export default {
  title: 'Form Controls: Input',
  component: ZInput,
  excludeStories: /.*Data$/
}

export const DefaultInput = () => ({
    components: { ZInput },
    data() {
        return {
            name: "Hello World"
        }
    },
    template: `<div class='padded-container'>
        <div class="input-container">
            <z-input v-model="name" 
                    :disabled="false"
                    :clearable="true"></z-input>
        </div>
        <p class="text-vanilla-100 mt-2">{{name}}</p>
    </div>`
})

