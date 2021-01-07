<template>
  <div>
    <span class="block mb-3 text-sm font-medium uppercase text-vanilla-400">{{ header }}</span>
    <div class="border-t border-b border-slate grid grid-cols-12">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

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
    this.acquireArticlesFromChildren()
    this.assignStylingClassesToTheArticles()
  },
  methods: {
    acquireArticlesFromChildren() {
      this.articles = this.$children
        .filter(({ $options }) => $options.name === 'ZRelatedArticle')
        .slice(0, 2)
    },
    assignStylingClassesToTheArticles() {
      this.articles.map(({ $el }, index) => {
        if (index > 0) {
          $el.classList.add('pl-4', 'border-l')
        }
      })
    }
  }
})
</script>
