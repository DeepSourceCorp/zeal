import ZPagination from '../../src/components/ZPagination'
import { mount } from '@vue/test-utils'

const Pagination = {
  template: `<z-pagination
      :totalPages="12"
      :totalVisible="5"
    ></z-pagination>`,
  components: {
    ZPagination
  }
}

describe('ZTabs', () => {
  it('renders with buttons and all pages', async () => {
    const wrapper = mount(Pagination)

    // Should have one previous and next button
    expect(wrapper.findAll('.z-pagination-previous').length).toEqual(1)
    expect(wrapper.findAll('.z-pagination-next').length).toEqual(1)

    // Should have 5 pages to toggle
    expect(wrapper.findAll('.z-pagination-pager').length).toEqual(5)
  })

  it('renders dividers properly', async () => {
    const wrapper = mount(Pagination)

    // Should have 1 divider
    expect(wrapper.findAll('.z-pagination-divider').length).toEqual(1)

    // Move three steps ahead
    wrapper.find('.z-pagination-next').trigger('click')
    await wrapper.vm.$nextTick()
    wrapper.find('.z-pagination-next').trigger('click')
    await wrapper.vm.$nextTick()
    wrapper.find('.z-pagination-next').trigger('click')
    await wrapper.vm.$nextTick()
    wrapper.find('.z-pagination-next').trigger('click')
    await wrapper.vm.$nextTick()

    // Should have 2 divider
    expect(wrapper.findAll('.z-pagination-divider').length).toEqual(2)
  })
})
