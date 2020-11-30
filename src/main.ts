import Vue from 'vue'
import * as components from './components'

// import Button from "../packages/hello-button/index"
// import Button from "./components/Button.vue";

Vue.config.productionTip = false

const ComponentLibrary = {
  install(Vue: any, options = {}) {
    //components
    for (const componentName in components) {
      const component = components[componentName]

      Vue.component(component.name, component)
    }
  }
}

export default ComponentLibrary

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary)
}
