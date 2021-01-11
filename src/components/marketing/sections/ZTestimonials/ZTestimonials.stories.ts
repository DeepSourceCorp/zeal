import ZTestimonials from './ZTestimonials.vue'
import ZTestimonial from '../../ZTestimonial'

export default {
  title: 'Zeal Marketing/Testimonials Section',
  component: ZTestimonials,
  excludeStories: /.*Data$/
}

export const WithBothArticles = () => ({
  components: { ZTestimonials, ZTestimonial },
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