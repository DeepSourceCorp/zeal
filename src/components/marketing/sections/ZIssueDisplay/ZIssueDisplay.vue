<template>
  <section class="text-vanilla-100">
    <div class="w-1/2 h-full ml-auto sticky top-20">
      <!-- Analyzers section -->
      <div class="flex mb-12">
        <div>
          <img :src="activeAnalyzer.image" :alt="activeAnalyzer.name" class="h-14 mb-2" />
          <div class="flex items-center leading-11 text-3xl">
            {{ activeAnalyzer.label }}
            <span class="flex mt-2 ml-3 mr-6">
              <z-icon size="medium" icon="chevron-left"></z-icon>
              <z-icon size="medium" icon="chevron-right"></z-icon>
            </span>
          </div>
        </div>
        <div class="grid grid-cols-4">
          <div
            v-for="analyzer in analyzers"
            :key="analyzer.name"
            class="flex items-center mr-2 text-sm"
          >
            <img :src="analyzer.image" :alt="analyzer.name" class="mx-2 h-5" />
            {{ analyzer.label }}
          </div>
        </div>
      </div>

      <!-- Issues section -->
      <div class="bg-gradient-ocean pl-2 pt-2 h-full">
        <div class="bg-ink-400">
          asdf
        </div>
      </div>
    </div>

    <div class="w-1/2">
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
