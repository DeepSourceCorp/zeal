<template>
  <article class="bg-ink-400">
    <!-- TODO Component: PageLabel -->
    <h1 class="text-vanilla-100 mb-4 heading1">{{ title }}</h1>
    <div class="block text-vanilla-200 mb-6">
      <!-- TODO Component: Avatar -->
      <span>{{ author }}</span>
      <span class="text-slate mx-4">&bull;</span>
      <span>{{ date }}</span>
    </div>
    <h2 v-if="subtitle" class="text-xl font-normal text-vanilla-400 mb-6">{{ subtitle }}</h2>
    <z-divider></z-divider>
    <div class="text-vanilla-100">
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