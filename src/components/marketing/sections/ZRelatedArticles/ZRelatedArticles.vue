<template>
  <div>
    <span class="block mb-3 text-sm font-medium uppercase text-vanilla-400">{{ header }}</span>
    <div class="border-t border-b border-slate md:grid grid-cols-12">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const SECONDARY_ARTICLE_CLASSES = ['md:pl-4', 'md:border-l', 'md:border-t-0', 'border-t']
const COMMON_ARTICLE_CLASSES = ['col-span-6']

export default Vue.extend({
  name: 'ZRelatedArticles',
  props: {
    header: String
  },
  data() {
    return {
      articles: [] as Vue[]
    }
  },
  mounted() {
    this.acquireFirstTwoArticlesFromChildren()
    this.assignStylesToSecondaryArticles()
    this.assignCommonStylesToAllArticles()
  },
  methods: {
    acquireFirstTwoArticlesFromChildren() {
      /**
       * Acquires all the child components that are Related Article components,
       * and stores the first two of them.
       */
      this.articles = this.$children.filter(({ $options }) => $options.name === 'ZRelatedArticle').slice(0, 2)
    },
    assignStylesToSecondaryArticles() {
      /**
       * Assigns custom secondary tyling classes, to the secondary articles
       * (articles except the first one).
       */
      this.articles.map(({ $el }, index) => {
        if (index > 0) {
          $el.classList.add(...SECONDARY_ARTICLE_CLASSES)
        }
      })
    },
    assignCommonStylesToAllArticles() {
      /**
       * Assigns custom common styling classes to all the articles.
       */
      this.articles.map(({ $el }) => {
        $el.classList.add(...COMMON_ARTICLE_CLASSES)
      })
    }
  }
})
</script>
