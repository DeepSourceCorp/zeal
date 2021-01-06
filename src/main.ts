import './assets/css/tailwind.css'
import './assets/css/typography.css'
import './assets/css/layout.css'

import ZButton from './components/ZButton/index'
import ZIcon from './components/ZIcon/index'
import ZDivider from './components/ZDivider/index'
import ZCarousel from './components/ZCarousel/index'
import ZSlide from './components/ZSlide/index'
import ZCard from './components/ZCard/index'
import ZCheckbox from './components/ZCheckbox/index'
import ZStepper from './components/ZStepper/index'
import ZStep from './components/ZStep/index'

const components = [ZButton, ZIcon, ZDivider, ZCarousel, ZSlide, ZCard, ZCheckbox, ZStepper, ZStep]

const install = (Vue: any) => {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ZButton,
  ZIcon,
  ZDivider,
  ZCarousel,
  ZSlide,
  ZCard,
  ZStepper,
  ZStep
}

export { default as ZButton } from './components/ZButton/index'
export { default as ZIcon } from './components/ZIcon/index'
export { default as ZDivider } from './components/ZDivider/index'
export { default as ZCarousel } from './components/ZCarousel/index'
export { default as ZSlide } from './components/ZSlide/index'
export { default as ZCard } from './components/ZCard/index'
export { default as ZCheckbox } from './components/ZCheckbox/index'
export { default as ZStepper } from './components/ZStepper/index'
export { default as ZStep } from './components/ZStep/index'
