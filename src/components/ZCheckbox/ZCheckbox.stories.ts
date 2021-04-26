import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZCheckbox from './ZCheckbox.vue'

export default {
  title: 'Checkbox',
  component: ZCheckbox,
  excludeStories: /.*Data$/
}

export const DefaultCheckbox = () => ({
  components: { ZCheckbox },
  data() {
    return {
      selectedValue: false
    }
  },
  template: `<z-checkbox label="I love Pastries" value="pastry" v-model="selectedValue"/>`
})

export const DisabledCheckbox = () => ({
  components: { ZCheckbox },
  data() {
    return {
      selectedValue: false
    }
  },
  template: `<z-checkbox label="I love Pastries" value="pastry" v-model="selectedValue" disabled/>`
})

export const SelectedCheckboxWithDisabledProperty = () => ({
  components: { ZCheckbox },
  data() {
    return {
      selectedValue: true
    }
  },
  template: `<z-checkbox label="I love Pastries" value="pastry" v-model="selectedValue" disabled/>`
})

export const SelectedCheckbox = () => ({
  components: { ZCheckbox },
  data() {
    return {
      selectedValue: true
    }
  },
  template: `<z-checkbox label="I love Pastries" value="pastry" v-model="selectedValue"/>`
})

export const CheckboxGroup = () => ({
  components: { ZCheckbox },
  data() {
    return {
      selectedValues: ['pizza', 'coding']
    }
  },
  template: `<div class="container">
    <z-checkbox label="Pizza" value="pizza" v-model="selectedValues"/>
    <z-checkbox label="Coding" value="coding" v-model="selectedValues"/>
    <z-checkbox label="Walk by myself to get water" value="walk" v-model="selectedValues"/>
  </div>`
})
