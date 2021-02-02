import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'

import ZPagination from '.'

export default {
  title: 'Pagination',
  component: ZPagination,
  excludeStories: /.*Data$/
}

export const BasicMenu = () => ({
  components: { ZPagination },
  template: `
    <div class="container space-y-5">
      <z-pagination
        :totalPages="12"
        :totalVisible="5"
      ></z-pagination>
      <z-pagination
        :totalPages="3"
        :totalVisible="5"
      ></z-pagination>
      <z-pagination
        :totalPages="25"
        :totalVisible="3"
      ></z-pagination>
    </div>`
})
