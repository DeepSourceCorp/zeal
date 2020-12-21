<template>
  <section class="z-hero">
    <slot></slot>
    <div class="illustration">
      <slot name="illustration"></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'ZHero'
})
export default class Hero extends Vue {}
</script>

<style lang="css" scoped>
/* Hero */
.z-hero {
  @apply py-12 text-center bg-ink-400 text-vanilla-100;
}

/* Hero - Title */
.z-hero > h1 {
  @apply text-4xl;
}

/* Hero - Subtitle */
.z-hero > h2 {
  @apply text-xl mb-4;
}

/* Hero - Illustration */
.z-hero .illustration > span,
div,
img {
  @apply mt-6 mx-auto;
}
</style>
