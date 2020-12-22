<template>
  <article class="z-content">
    <!-- TODO Component: PageLabel -->
    <h1 class="z-content__title heading1">{{ title }}</h1>
    <div class="z-content__metadata">
      <!-- TODO Component: Avatar -->
      <span>{{ author }}</span>
      <span class="z-content__separator">&bull;</span>
      <span>{{ date }}</span>
    </div>
    <h2 v-if="subtitle" class="z-content__subtitle">{{ subtitle }}</h2>
    <z-divider></z-divider>
    <div class="z-content__main">
      <slot></slot>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ZDivider from '../../../ZDivider/index'

@Component({
  name: 'ZContent',
  components: {
    ZDivider
  }
})
export default class Content extends Vue {
  @Prop({ required: true })
  private title!: string
  @Prop({})
  private subtitle!: string
  @Prop({ required: true })
  private author!: string
  @Prop({})
  private authorImage!: string
  @Prop({ required: true })
  private date!: string
}
</script>

<style lang="css" scoped>
.z-content {
  @apply bg-ink-400;
}
.z-content__title {
  @apply text-vanilla-100 mb-4;
}
.z-content__subtitle {
  @apply text-xl font-normal text-vanilla-400 mb-6;
}
.z-content__metadata {
  @apply block text-vanilla-200 mb-6;
}
.z-content__main {
  @apply text-vanilla-100;
}
.z-content__separator {
  @apply text-slate mx-4;
}
</style>
