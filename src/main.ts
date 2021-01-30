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
import ZAvatar from './components/ZAvatar/index'
import ZTab from './components/ZTab/index'
import ZTabs from './components/ZTabs/index'
import ZTabList from './components/ZTabs/ZTabList/index'
import ZTabItem from './components/ZTabs/ZTabItem/index'
import ZTabPanes from './components/ZTabs/ZTabPanes/index'
import ZTabPane from './components/ZTabs/ZTabPane/index'
import ZLabel from './components/ZLabel/index'
import ZTag from './components/ZTag/index'
import ZPulse from './components/ZPulse/index'
import ZMenu from './components/ZMenu'
import ZMenuSection from './components/ZMenu/ZMenuSection'
import ZMenuItem from './components/ZMenu/ZMenuItem'
import ZSidebarMenu from './components/ZSidebarMenu/index'
import ZSidebarItem from './components/ZSidebarItem/index'

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
  ZLabel,
  ZAvatar,
  ZTag,
  ZPulse,
  ZMenu,
  ZMenuSection,
  ZMenuItem,
  ZTab,
  ZTabs,
  ZTabList,
  ZTabItem,
  ZTabPanes,
  ZTabPane,
  ZSidebarMenu,
  ZSidebarItem
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
  ZTab,
  ZTabs,
  ZTabList,
  ZTabItem,
  ZLabel,
  ZAvatar,
  ZTag,
  ZPulse,
  ZMenu,
  ZMenuSection,
  ZMenuItem,
  ZSidebarMenu,
  ZSidebarItem
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
export { default as ZLabel } from './components/ZLabel/index'
export { default as ZAvatar } from './components/ZAvatar/index'
export { default as ZTag } from './components/ZTag/index'
export { default as ZPulse } from './components/ZPulse/index'
export { default as ZMenu } from './components/ZMenu/index'
export { default as ZMenuSection } from './components/ZMenu/ZMenuSection/index'
export { default as ZMenuItem } from './components/ZMenu/ZMenuItem/index'
export { default as ZTab } from './components/ZTab/index'
export { default as ZTabs } from './components/ZTabs/index'
export { default as ZTabList } from './components/ZTabs/ZTabList'
export { default as ZTabItem } from './components/ZTabs/ZTabItem'
export { default as ZTabPanes } from './components/ZTabs/ZTabPanes'
export { default as ZTabPane } from './components/ZTabs/ZTabPane'
export { default as ZSidebarMenu } from './components/ZSidebarMenu/index'
export { default as ZSidebarItem } from './components/ZSidebarItem/index'
