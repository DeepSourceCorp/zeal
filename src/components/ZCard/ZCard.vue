<template>
  <div class="z-card">
      <div class="z-card__header" v-if="$slots.header">
          <slot name="header"></slot>
      </div>
      <div class="z-card__body" v-if="$slots.body">
          <slot name="body"></slot>
      </div>
      <div class="z-card__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'ZCard'
})
export default class Card extends Vue {
}
</script>

<style lang="css" scoped>
.z-card {
    @apply bg-ink-400 text-vanilla-100 rounded-md overflow-hidden transition-all shadow;
}

</style>
