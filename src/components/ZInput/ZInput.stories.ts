import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZInput from './ZInput.vue'

export default {
  title: 'Form Inputs and Controls: Input',
  component: ZInput,
  excludeStories: /.*Data$/
}

export const DefaultInput = () => ({
  components: { ZInput },
  template: `<div class='padded-container'>
        <div class="input-container">
            <z-input v-model="name"></z-input>
        </div>
        <p class="text-vanilla-100 mt-2">{{name}}</p>
    </div>`
})

export const InputWithCustomPlaceholder = () => ({
  components: { ZInput },
  template: `<div class='padded-container'>
        <div class="input-container">
            <z-input v-model="name"
                    placeholder="captainmarvel@marvel.com"></z-input>
        </div>
        <p class="text-vanilla-100 mt-2">{{name}}</p>
    </div>`
})

export const DisabledInput = () => ({
  components: { ZInput },
  data() {
    return {
      name: 'Hello World'
    }
  },
  template: `<div class='padded-container'>
        <div class="input-container">
            <z-input v-model="name" 
                    :disabled="true"></z-input>
        </div>
        <p class="text-vanilla-100 mt-2">{{name}}</p>
    </div>`
})

export const InputWithClearable = () => ({
  components: { ZInput },
  data() {
    return {
      name: 'Hello World'
    }
  },
  template: `<div class='padded-container'>
        <div class="input-container">
            <z-input v-model="name"
                    :clearable="true"></z-input>
        </div>
        <p class="text-vanilla-100 mt-2">{{name}}</p>
    </div>`
})

export const InputWithIconOnLeft = () => ({
  components: { ZInput },
  data() {
    return {
      name: 'Hello World'
    }
  },
  template: `<div class='padded-container'>
        <div class="input-container">
            <z-input v-model="name"
                    icon="search"
                    iconPosition="left"></z-input>
        </div>
        <p class="text-vanilla-100 mt-2">{{name}}</p>
    </div>`
})

export const InputWithIconOnRight = () => ({
  components: { ZInput },
  data() {
    return {
      name: 'Hello World'
    }
  },
  template: `<div class='padded-container'>
        <div class="input-container">
            <z-input v-model="name"
                    icon="search"
                    iconPosition="right"></z-input>
        </div>
        <p class="text-vanilla-100 mt-2">{{name}}</p>
    </div>`
})
