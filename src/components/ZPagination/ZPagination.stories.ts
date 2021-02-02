import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'

import ZPagination from '.'

export default {
  title: 'Pagination',
  component: ZPagination,
  excludeStories: /.*Data$/
}

export const BasicPages = () => ({
  components: { ZPagination },
  template: `
    <div class="container space-y-5">
      <z-pagination
        :totalPages="12"
        :totalVisible="5"
      ></z-pagination>
    </div>`
})

export const StartAtDiffernetNumber = () => ({
  components: { ZPagination },
  data() {
    return {
      currentPage: 5
    }
  },
  template: `
    <div class="container space-y-5">
      <z-pagination
        v-model="currentPage"
        :totalPages="12"
        :totalVisible="5"
      ></z-pagination>
      <div class="text-vanilla-400">
        Currently at {{ currentPage }}
      </div>
    </div>`
})

export const LargerWindowThanPages = () => ({
  components: { ZPagination },
  template: `
    <div class="container space-y-5">
      <z-pagination
        :totalPages="3"
        :totalVisible="8"
      ></z-pagination>
      <z-pagination
        :totalPages="1"
        :totalVisible="8"
      ></z-pagination>
    </div>`
})

export const SmallWindows = () => ({
  components: { ZPagination },
  template: `
    <div class="container space-y-5">
      <z-pagination
        :totalPages="12"
        :totalVisible="3"
      ></z-pagination>
      <z-pagination
        :totalPages="12"
        :totalVisible="2"
      ></z-pagination>
    </div>`
})
