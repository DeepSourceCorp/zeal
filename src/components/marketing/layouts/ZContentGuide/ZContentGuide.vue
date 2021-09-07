<template>
  <article class="bg-ink-400">
    <div class="lg:grid grid-cols-12">
      <div class="col-span-3 hidden lg:block flex flex-col">
        <a
          class="text-vanilla-400 hover:text-juniper transition-colors"
          v-if="previousPageLink"
          :href="previousPageLink"
          >&larr; {{ previousPageText }}</a
        >
        <slot name="previous-page-link"></slot>

        <div class="group w-full py-4 sticky top-20 self-start mr-6 hidden lg:block">
          <z-scroll-spy class="space-y-4" root-id="content"></z-scroll-spy>
        </div>
      </div>
      <div class="col-span-9 md:px-4">
        <z-page-label class="mb-2">{{ pageLabel }}</z-page-label>
        <h1 class="text-vanilla-100 mb-4 text-3xl lg:text-4xl leading-11 lg:leading-12 font-bold">
          {{ title }}
        </h1>
        <div class="flex items-center text-vanilla-200 mb-6">
          <z-avatar class="mr-2 hidden sm:block" :image="authorImage" :user-name="author"></z-avatar>
          <z-avatar size="sm" class="w-8 block sm:hidden mr-1" :image="authorImage" :user-name="author"></z-avatar>
          <span class="text-sm lg:text-md">
            <span>{{ author }}</span>
            <span class="text-slate mx-2 lg:mx-4">&bull;</span>
            <span>{{ date }}</span>
          </span>
        </div>
        <h2 v-if="subtitle" class="text-lg lg:text-xl leading-9 lg:leading-normal font-normal text-vanilla-400 mb-6">
          {{ subtitle }}
        </h2>
        <z-divider class="bg-ink-100"></z-divider>
        <div id="content" class="col-span-10 text-vanilla-100 prose prose-sm sm:prose sm:max-w-none">
          <slot></slot>
        </div>
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
