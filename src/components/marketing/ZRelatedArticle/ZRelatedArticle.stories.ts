import ZRelatedArticle from './ZRelatedArticle.vue'

export default {
  title: 'Zeal Marketing/Related Article',
  component: ZRelatedArticle,
  excludeStories: /.*Data$/
}

export const Basic = () => ({
  components: { ZRelatedArticle },
  template: `<div class='padded-container bg-ink-400 text-vanilla-400 grid grid-cols-12'>
      <z-related-article class="col-span-8">
        <span slot="heading">Odio amet tincidunt metus dictum dapibus cum nibh sed</span>
        <a href="/somethign" slot="link">Read More</a>
      </z-related-article>
    </div>`
})