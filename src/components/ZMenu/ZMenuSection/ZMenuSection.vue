<template>
  <div
    class="z-menu-section"
    :class="{
      'mb-1': !divider
    }"
  >
    <h6
      v-if="title"
      class="px-3 my-1 uppercase text-vanilla-400 tracking-wide text-xs font-semibold"
    >
      {{ title }}
    </h6>
    <slot></slot>
    <z-divider v-if="divider" color="ink-100" margin="my-2 mx-0"></z-divider>
  </div>
</template>

<script lang="ts">
import ZDivider from '../../ZDivider/ZDivider.vue'
import Vue from 'vue'

interface ZMenuT extends Vue {
  close: () => void
}

export default Vue.extend({
  name: 'ZMenuItem',
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
