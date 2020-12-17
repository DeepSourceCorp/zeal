import Vue from 'vue'
import './assets/css/tailwind.css'
import './assets/css/typography.css'
import './assets/css/layout.css'
import ZButton from './components/ZButton/index';
import ZIcon from './components/ZIcon/index';
import ZDivider from './components/ZIcon/index';


const components = [ZButton, ZIcon, ZDivider]

const install = (Vue: any) => {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { default as ZButton } from './components/ZButton/index';
export { default as ZIcon } from './components/ZIcon/index';
export { default as ZDivider } from './components/ZDivider/index';

