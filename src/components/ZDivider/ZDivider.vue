<template>
  <div
    :class="['z-divider', 
            getDirectionClasses]"
    class="relative bg-ink-100"
  >
    <div class="z-divider--content" v-if="direction !== 'vertical'"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'ZDivider',
  props: {
    direction: {
      default: 'horizontal',
      type: String
    }
  },
  computed: {
    getDirectionClasses() {
      return (this.direction === 'vertical' ? 'inline-block w-px h-4 my-0 mx-2 align-middle' : 'block h-px w-full my-6 mx-0');
    }
  }
}
</script>

