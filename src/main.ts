import Vue from 'vue'

import './assets/css/tailwind.css'
import './assets/css/typography.css'
import './assets/css/layout.css'

import ZButton from './components/ZButton/index'
import ZIcon from './components/ZIcon/index'
import ZDivider from './components/ZIcon/index'
import ZCarousel from './components/ZCarousel/index'
import ZSlide from './components/ZSlide/index'
import ZCard from './components/ZIcon/index'
import ZContent from './components/marketing/layouts/ZContent/index'
import '../dist/tailwind.css'

const components = [ZButton, ZIcon, ZDivider, ZContent, ZCarousel, ZSlide, ZCard]

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
export { default as ZContent } from './components/marketing/layouts/ZContent/index'
