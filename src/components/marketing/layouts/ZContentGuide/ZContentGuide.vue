<template>
  <article class="bg-ink-400 flex">
    <div class="text-right">
      <a class="text-vanilla-400" :href="previousPageLink">&larr; {{ previousPageText }}</a>
      <z-scroll-spy root-id="content"></z-scroll-spy>
    </div>
    <div class="ml-12">
      <z-page-label class="mb-2">{{ pageLabel }}</z-page-label>
      <h1 class="text-vanilla-100 mb-4 heading1">{{ title }}</h1>
      <div class="block text-vanilla-200 mb-6">
        <!-- TODO Component: Avatar -->
        <span>{{ author }}</span>
        <span class="text-slate mx-4">&bull;</span>
        <span>{{ date }}</span>
      </div>
      <h2 v-if="subtitle" class="text-xl font-normal text-vanilla-400 mb-6">{{ subtitle }}</h2>
      <z-divider></z-divider>
      <div id="content" class="text-vanilla-100">
        <slot></slot>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import ZDivider from '@/components/ZDivider'
import ZPageLabel from '@/components/marketing/ZPageLabel'
import ZScrollSpy from '@/components/marketing/ZScrollSpy'

export default {
  name: 'ZContentGuide',
  components: {
    ZDivider,
    ZPageLabel,
    ZScrollSpy
  },
  props: {
    title: {
      required: true,
      type: String
    },
    subtitle: String,
    author: {
      required: true,
      type: String
    },
    authorImage: String,
    date: {
      required: true,
      type: String
    },
    pageLabel: {
      required: true,
      type: String
    },
    previousPageText: {
      default: 'Go back',
      type: String
    },
    previousPageLink: {
      required: true,
      type: String
    }
  }
}
</script>
