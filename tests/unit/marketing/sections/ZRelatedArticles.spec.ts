import Vue from 'vue'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

import ZRelatedArticles from '../../../../src/components/marketing/sections/ZRelatedArticles'
import ZRelatedArticle from '../../../../src/components/marketing/ZRelatedArticle'

describe('Page Label component', () => {
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue
  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZRelatedArticles, {
        localVue,
        ...options
      })
    }
  })
  it('renders the section once its mounted', () => {
    expect(mountFunction().html()).toMatchSnapshot()
  })

  it('renders only two related articles even on several input', () => {
    let mountedInstance = mountFunction({
      components: {
        ZRelatedArticle
      },
      slots: {
        default: [
          `<z-related-article>
            <span slot="heading">Odio amet tincidunt metus dictum dapibus cum nibh sed</span>
            <a href="/somethign" slot="link">Read More</a>
          </z-related-article>`,
          `<z-related-article>
            <span slot="heading">Odio amet tincidunt metus dictum dapibus cum nibh sed</span>
            <a href="/somethign" slot="link">Read More</a>
          </z-related-article>`,
          `<z-related-article>
            <span slot="heading">Odio amet tincidunt metus dictum dapibus cum nibh sed</span>
            <a href="/somethign" slot="link">Read More</a>
          </z-related-article>`
        ]
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.vm.$data.articles.length).toEqual(2)
  })

  it('secondary articles have the correct styling classes', () => {
    let mountedInstance = mountFunction({
      components: {
        ZRelatedArticle
      },
      slots: {
        default: [
          `<z-related-article>
            <span slot="heading">Odio amet tincidunt metus dictum dapibus cum nibh sed</span>
            <a href="/somethign" slot="link">Read More</a>
          </z-related-article>`,
          `<z-related-article>
            <span slot="heading">Odio amet tincidunt metus dictum dapibus cum nibh sed</span>
            <a href="/somethign" slot="link">Read More</a>
          </z-related-article>`
        ]
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.vm.$data.articles[1].$el.className.includes('pl-4 border-l')).toBe(true)
  })

  it('render no vertical border when only one article is available', () => {
    let mountedInstance = mountFunction({
      components: {
        ZRelatedArticle
      },
      slots: {
        default: [
          `<z-related-article>
            <span slot="heading">Odio amet tincidunt metus dictum dapibus cum nibh sed</span>
            <a href="/somethign" slot="link">Read More</a>
          </z-related-article>`
        ]
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.vm.$data.articles[0].$el.className.includes('pl-4 border-l')).toBe(false)
  })
})
