<template>
  <article class="bg-ink-400">
    <div class="grid grid-cols-12">
      <div class="col-span-2">
        <a class="text-vanilla-400" :href="previousPageLink">&larr; {{ previousPageText }}</a>
      </div>
      <div class="col-span-10">
        <z-page-label class="mb-2">{{ pageLabel }}</z-page-label>
        <h1 class="text-vanilla-100 mb-4 heading1">{{ title }}</h1>
        <div class="flex items-center text-vanilla-200 mb-6">
          <z-avatar class="mr-2" :image="authorImage" :user-name="author"></z-avatar>
          <span>{{ author }}</span>
          <span class="text-slate mx-4">&bull;</span>
          <span>{{ date }}</span>
        </div>
        <h2 v-if="subtitle" class="text-xl font-normal text-vanilla-400 mb-6">{{ subtitle }}</h2>
        <z-divider></z-divider>
      </div>
    </div>
    <div class="grid grid-cols-12">
      <z-scroll-spy
        class="col-span-2 sticky top-6 self-start mr-6"
        root-id="content"
      ></z-scroll-spy>
      <div id="content" class="col-span-10 text-vanilla-100">
        <slot></slot>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import ZDivider from '@/components/ZDivider'
import ZPageLabel from '@/components/marketing/ZPageLabel'
import ZScrollSpy from '@/components/marketing/ZScrollSpy'
import ZAvatar from '@/components/ZAvatar'

export default {
  name: 'ZContentGuide',
  components: {
    ZDivider,
    ZPageLabel,
    ZScrollSpy,
    ZAvatar
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
