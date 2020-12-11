import Vue from 'vue'
import './assets/css/tailwind.css'
import './assets/css/typography.css'
import './assets/css/layout.css'
// import App from './App.vue';
import ZButton from './components/ZButton/index'

const components = [ZButton]

const install = (Vue: any) => {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  ZButton
}
