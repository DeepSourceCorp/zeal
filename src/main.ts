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
import ZExpandable from './components/ZExpandable/index'
import ZInput from './components/ZInput/index'
import ZInputGroup from './components/ZInputGroup/index'
import ZInputAddon from './components/ZInputAddon/index'
import ZRadio from './components/ZRadio/index'
import ZRadioGroup from './components/ZRadioGroup/index'
import ZRadioButton from './components/ZRadioButton/index'
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
import ZBadge from './components/ZBadge/index'
import ZPagination from './components/ZPagination/index'
import ZList from './components/ZList/index'
import ZListItem from './components/ZListItem/index'
import ZNavBar from './components/ZNavBar/index'
import ZAccordion from './components/ZAccordion/index'
import ZAccordionItem from './components/ZAccordionItem/index'
import ZCode from './components/ZCode/index'
import ZTicker from './components/ZTicker/index'
import ZChart from './components/ZChart/index'
import ZTable from './components/ZTable/index'
import ZTableRow from './components/ZTable/ZTableRow/index'
import ZTableCell from './components/ZTable/ZTableCell/index'
import ZToggle from './components/ZToggle/index'
import ZBreadcrumb from './components/ZBreadcrumb/index'
import ZBreadcrumbItem from './components/ZBreadcrumb/ZBreadcrumbItem/index'
import ZTextarea from './components/ZTextarea/index'
import ZModal from './components/ZModal/index'
import ZAnimatedInteger from './components/ZAnimatedInteger/index'

// Marketing components
import ZFooter from './components/marketing/ZFooter'
import ZFooterList from './components/marketing/ZFooterList'
import ZFooterListItem from './components/marketing/ZFooterListItem'
import ZNav from './components/marketing/ZNav'
import ZNavItem from './components/marketing/ZNavItem'
import ZNavList from './components/marketing/ZNavList'
import ZNavListItem from './components/marketing/ZNavListItem'
import ZNavMenu from './components/marketing/ZNavMenu'
import ZRelatedArticle from './components/marketing/ZRelatedArticle'
import ZScrollSpy from './components/marketing/ZScrollSpy'
import ZTestimonial from './components/marketing/ZTestimonial'
import ZPageLabel from './components/marketing/ZPageLabel/index'

// Marketing sections
import ZCustomers from './components/marketing/sections/ZCustomers'
import ZTestimonials from './components/marketing/sections/ZTestimonials'
import ZRelatedArticles from './components/marketing/sections/ZRelatedArticles'
import ZHero from './components/marketing/sections/ZHero'

// Marketing layouts
import ZContentGuide from './components/marketing/layouts/ZContentGuide/index'

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
  ZInputGroup,
  ZInputAddon,
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
  ZSidebarItem,
  ZRadioButton,
  ZBadge,
  ZPagination,
  ZFooter,
  ZFooterList,
  ZFooterListItem,
  ZNav,
  ZNavItem,
  ZNavList,
  ZNavListItem,
  ZNavMenu,
  ZRelatedArticle,
  ZScrollSpy,
  ZTestimonial,
  ZCustomers,
  ZTestimonials,
  ZRelatedArticles,
  ZHero,
  ZListItem,
  ZList,
  ZNavBar,
  ZAccordion,
  ZAccordionItem,
  ZCode,
  ZTicker,
  ZChart,
  ZToggle,
  ZBreadcrumb,
  ZBreadcrumbItem,
  ZTextarea,
  ZTable,
  ZTableRow,
  ZTableCell,
  ZModal,
  ZAnimatedInteger
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
  ZInputGroup,
  ZInputAddon,
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
  ZSidebarItem,
  ZRadioButton,
  ZBadge,
  ZPagination,
  ZFooter,
  ZFooterList,
  ZFooterListItem,
  ZNav,
  ZNavItem,
  ZNavList,
  ZNavListItem,
  ZNavMenu,
  ZRelatedArticle,
  ZScrollSpy,
  ZTestimonial,
  ZCustomers,
  ZTestimonials,
  ZRelatedArticles,
  ZHero,
  ZListItem,
  ZList,
  ZCode,
  ZTicker,
  ZChart,
  ZBreadcrumb,
  ZBreadcrumbItem,
  ZTextarea,
  ZTable,
  ZTableRow,
  ZTableCell,
  ZToggle,
  ZModal,
  ZAnimatedInteger
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
export { default as ZExpandable } from './components/ZExpandable/index'
export { default as ZInput } from './components/ZInput/index'
export { default as ZInputGroup } from './components/ZInputGroup/index'
export { default as ZInputAddon } from './components/ZInputAddon/index'
export { default as ZRadio } from './components/ZRadio/index'
export { default as ZRadioGroup } from './components/ZRadioGroup/index'
export { default as ZRadioButton } from './components/ZRadioButton/index'
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
export { default as ZBadge } from './components/ZBadge/index'
export { default as ZPagination } from './components/ZPagination/index'
export { default as ZFooter } from './components/marketing/ZFooter/index'
export { default as ZFooterList } from './components/marketing/ZFooterList/index'
export { default as ZFooterListItem } from './components/marketing/ZFooterListItem/index'
export { default as ZNav } from './components/marketing/ZNav/index'
export { default as ZNavItem } from './components/marketing/ZNavItem/index'
export { default as ZNavList } from './components/marketing/ZNavList/index'
export { default as ZNavListItem } from './components/marketing/ZNavListItem/index'
export { default as ZNavMenu } from './components/marketing/ZNavMenu/index'
export { default as ZRelatedArticle } from './components/marketing/ZRelatedArticle/index'
export { default as ZScrollSpy } from './components/marketing/ZScrollSpy/index'
export { default as ZTestimonial } from './components/marketing/ZTestimonial/index'
export { default as ZCustomers } from './components/marketing/sections/ZCustomers/index'
export { default as ZTestimonials } from './components/marketing/sections/ZTestimonials/index'
export { default as ZRelatedArticles } from './components/marketing/sections/ZRelatedArticles/index'
export { default as ZHero } from './components/marketing/sections/ZHero/index'
export { default as ZContentGuide } from './components/marketing/layouts/ZContentGuide/index'
export { default as ZPageLabel } from './components/marketing/ZPageLabel/index'
export { default as ZList } from './components/ZList/index'
export { default as ZListItem } from './components/ZListItem/index'
export { default as ZAccordion } from './components/ZAccordion/index'
export { default as ZAccordionItem } from './components/ZAccordionItem/index'
export { default as ZNavBar } from './components/ZNavBar/index'
export { default as ZCode } from './components/ZCode/index'
export { default as ZTicker } from './components/ZTicker/index'
export { default as ZChart } from './components/ZChart/index'
export { default as ZBreadcrumb } from './components/ZBreadcrumb/index'
export { default as ZBreadcrumbItem } from './components/ZBreadcrumb/ZBreadcrumbItem/index'
export { default as ZTextarea } from './components/ZTextarea/index'
export { default as ZTable } from './components/ZTable/index'
export { default as ZTableRow } from './components/ZTable/ZTableRow/index'
export { default as ZTableCell } from './components/ZTable/ZTableCell/index'
export { default as ZToggle } from './components/ZToggle/index'
export { default as ZModal } from './components/ZModal/index'
export { default as ZAnimatedInteger } from './components/ZAnimatedInteger/index'
