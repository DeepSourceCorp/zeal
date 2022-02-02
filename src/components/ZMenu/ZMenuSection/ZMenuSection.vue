<template>
  <div class="z-menu-section">
    <h6 v-if="title" class="px-3 mt-2 mb-0.5 text-xs font-semibold tracking-wider uppercase text-vanilla-400">
      {{ title }}
    </h6>
    <slot></slot>
    <z-divider v-if="divider" color="ink-100" margin="0"></z-divider>
  </div>
</template>

<script lang="ts">
import ZDivider from '../../ZDivider/ZDivider.vue'
import Vue from 'vue'

interface ZMenuT extends Vue {
  close: () => void
}

export default Vue.extend({
  name: 'ZMenuSection',
  components: {
    ZDivider
  },
  props: {
    title: {
      type: String
    },
    divider: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    close(): void {
      const parent = this.$parent as ZMenuT
      parent.close()
    }
  }
})
</script>
