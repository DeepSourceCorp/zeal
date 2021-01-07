import Vue from 'vue'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

import ZRelatedArticle from '../../../src/components/marketing/ZRelatedArticle'

describe('Related Article component', () => {
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue
  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZRelatedArticle, {
        localVue,
        ...options
      })
    }
  })
  it('renders a related article when the component is mounted', () => {
    expect(mountFunction().html()).toMatchSnapshot()
  })
})
