import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZBreadcrumb from './ZBreadcrumb.vue'
import ZBreadcrumbItem from './ZBreadcrumbItem/ZBreadcrumbItem.vue'
import ZNumberInput from '../ZNumberInput/ZNumberInput.vue'

export default {
  title: 'Breadcrumb',
  component: ZBreadcrumb,
  excludeStories: /.*Data$/
}

export const BasicBreadcrumb = () => ({
  components: { ZBreadcrumb, ZBreadcrumbItem, ZNumberInput },
  data() {
    return {
      count: 3
    }
  },
  template: `<div class='padded-container text-vanilla-100'>
    <z-breadcrumb separator="/" class="text-sm text-vanilla-100">
      <z-breadcrumb-item><a href="#">Autofix</a></z-breadcrumb-item>
      <z-breadcrumb-item>Method has no argument</z-breadcrumb-item>
    </z-breadcrumb>
    <br/>
    <z-breadcrumb separator="/" class="text-sm text-vanilla-100">
      <z-breadcrumb-item><a href="#">Elements</a></z-breadcrumb-item>
      <z-breadcrumb-item v-for="ii in count" :key="ii"><a href="#">Element {{ii}}</a></z-breadcrumb-item>
    </z-breadcrumb>
    <br/>
    <div class="flex gap-x-2">
      Add elements: <z-number-input v-model="count" min="1" class="w-28" />  
    </div>
  </div>`
})

export const BreadcrumbWithCurrentPage = () => ({
  components: { ZBreadcrumb, ZBreadcrumbItem },
  template: `<div class='padded-container'>
  <z-breadcrumb separator="/" class="text-sm text-vanilla-100">
    <z-breadcrumb-item><a href="#">Home</a></z-breadcrumb-item>
    <z-breadcrumb-item><a href="#">Repository</a></z-breadcrumb-item>
    <z-breadcrumb-item isCurrent>Settings</z-breadcrumb-item>
  </z-breadcrumb>
    </div>`
})
