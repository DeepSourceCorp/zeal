import Vue from 'vue'

import './assets/css/tailwind.css'
import './assets/css/typography.css'
import './assets/css/layout.css'
import './assets/css/gradient.css'

import ZButton from './components/ZButton/index'
import ZIcon from './components/ZIcon/index'
import ZDivider from './components/ZIcon/index'
import ZCarousel from './components/ZCarousel/index'
import ZSlide from './components/ZSlide/index'
import ZCard from './components/ZIcon/index'
import ZContentGuide from './components/marketing/layouts/ZContentGuide/index'
import ZPageLabel from './components/marketing/ZPageLabel/index'

const components = [ZButton, ZIcon, ZDivider, ZContentGuide, ZCarousel, ZSlide, ZCard, ZPageLabel]

const install = (Vue: any) => {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { default as ZButton } from './components/ZButton/index'
export { default as ZIcon } from './components/ZIcon/index'
export { default as ZDivider } from './components/ZDivider/index'
export { default as ZCarousel } from './components/ZCarousel/index'
export { default as ZSlide } from './components/ZSlide/index'
export { default as ZCard } from './components/ZCard/index'
export { default as ZContentGuide } from './components/marketing/layouts/ZContentGuide/index'
export { default as ZPageLabel } from './components/marketing/ZPageLabel/index'
