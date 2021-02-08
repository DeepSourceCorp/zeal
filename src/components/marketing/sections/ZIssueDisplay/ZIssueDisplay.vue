<template>
  <section class="text-vanilla-100">
    <div class="w-1/2 ml-auto sticky top-20">
      <div class="flex">
        <div>
          <img :src="activeAnalyzer.image" :alt="activeAnalyzer.name" class="h-14" />
          <div class="flex items-center text-3xl">
            {{ activeAnalyzer.label }}
            <z-icon size="medium" icon="chevron-left"></z-icon>
            <z-icon size="medium" icon="chevron-right"></z-icon>
          </div>
        </div>
        <div class="grid grid-cols-4">
          <div v-for="analyzer in analyzers" :key="analyzer.name" class="flex items-center mr-2">
            <img :src="analyzer.image" :alt="analyzer.name" class="mr-2 h-5" />
            {{ analyzer.label }}
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="sticky top-3/4">Sticky Heading 1</div>
      <div class="pb-102"></div>
    </div>
    <div>
      <div class="sticky top-3/4">Sticky Heading 2</div>
      <div class="pb-102"></div>
    </div>
    <div>
      <div class="sticky top-3/4">Sticky Heading 3</div>
      <div class="pb-102"></div>
    </div>
  </section>
</template>

<script lang="ts">
import ZIcon from '@/components/ZIcon/ZIcon.vue'
import Vue from 'vue'

export default Vue.extend({
  components: { ZIcon },
  name: 'ZIssueDisplay',
  props: {
    analyzers: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      activeAnalyzer: {}
    }
  },
  mounted() {
    this.activeAnalyzer = this.analyzers.length ? this.analyzers[0] : {}
  }
})
</script>
