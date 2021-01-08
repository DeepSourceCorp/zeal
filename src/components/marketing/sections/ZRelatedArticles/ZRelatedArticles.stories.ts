import ZRelatedArticles from './ZRelatedArticles.vue'
import ZRelatedArticle from '../../ZRelatedArticle'

export default {
  title: 'Zeal Marketing/Related Articles',
  component: ZRelatedArticles,
  excludeStories: /.*Data$/
}

export const WithBothArticles = () => ({
  components: { ZRelatedArticles, ZRelatedArticle },
  data() {
    return {
      articles: [
        {
          title: 'Odio amet tincidunt metus dictum dapibus cum nibh sed',
          slug: 'first-article'
        },
        {
          title: 'Odio amet tincidunt metus dictum dapibus cum nibh sed.',
          slug: 'second-article'
        }
      ]
    }
  },
  template: `<div class='padded-container bg-ink-400 text-vanilla-400 md:grid grid-cols-12'>
      <z-related-articles header="Keep reading" class="col-span-8">
        <z-related-article v-for="article in articles" :key="article.slug">
          <span slot="heading">{{ article.title }}</span>
          <a :href="'/'+article.slug" slot="link">Read More</a>
        </z-related-article>
      </z-related-articles>
    </div>`
})

export const WithOnlyFirstArticle = () => ({
  components: { ZRelatedArticles, ZRelatedArticle },
  template: `<div class='padded-container bg-ink-400 text-vanilla-400 md:grid grid-cols-12'>
      <z-related-articles header="Keep reading" class="col-span-8">
        <z-related-article>
          <span slot="heading">Odio amet tincidunt metus dictum dapibus cum nibh sed</span>
          <a href="/somethign" slot="link">Read More</a>
        </z-related-article>
      </z-related-articles>
    </div>`
})
