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
import ZContentGuide from './components/marketing/layouts/ZContentGuide/index'
import ZPageLabel from './components/marketing/ZPageLabel/index'
import ZExpandable from './components/ZExpandable/index'
import ZInput from './components/ZInput/index'
import ZRadio from './components/ZRadio/index'
import ZRadioGroup from './components/ZRadioGroup/index'
import ZSelect from './components/ZSelect/index'
import ZOption from './components/ZOption/index'
import { ZTabs, ZTabList, ZTab, ZTabItems, ZTabItem } from './components/ZTabs'

const components = [
  ZButton,
  ZIcon,
  ZDivider,
  ZContentGuide,
  ZCarousel,
  ZSlide,
  ZCard,
  ZPageLabel,
  ZCheckbox,
  ZStepper,
  ZStep,
  ZExpandable,
  ZRadio,
  ZRadioGroup,
  ZInput,
  ZSelect,
  ZOption,
  ZTabs,
  ZTabList,
  ZTab,
  ZTabItems,
  ZTabItem
]

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
  ZStep,
  ZExpandable,
  ZRadio,
  ZRadioGroup,
  ZInput,
  ZSelect,
  ZOption,
  ZTabs,
  ZTabList,
  ZTab,
  ZTabItems,
  ZTabItem
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
export { default as ZContentGuide } from './components/marketing/layouts/ZContentGuide/index'
export { default as ZPageLabel } from './components/marketing/ZPageLabel/index'
export { default as ZExpandable } from './components/ZExpandable/index'
export { default as ZInput } from './components/ZInput/index'
export { default as ZRadio } from './components/ZRadio/index'
export { default as ZRadioGroup } from './components/ZRadioGroup/index'
export { default as ZSelect } from './components/ZSelect/index'
export { default as ZOption } from './components/ZOption/index'
export { default as ZTabs } from './components/ZTabs/index'
export { default as ZTabList } from './components/ZTabs/index'
export { default as ZTab } from './components/ZTabs/index'
export { default as ZTabItems } from './components/ZTabs/index'
export { default as ZTabItem } from './components/ZTabs/index'
