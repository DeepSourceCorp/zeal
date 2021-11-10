<template>
  <span
    class="space-x-2"
    :class="{
      'text-slate': !current
    }"
  >
    <span v-if="this.index !== 0" role="presentation">{{ separator }}</span>
    <span ref="link" role="link">
      <slot></slot>
    </span>
  </span>
</template>

<script>
export default {
  name: 'ZBreadcrumbItem',
  props: {
    isCurrent: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      separator: '',
      index: 0
    }
  },
  computed: {
    current() {
      return this.isCurrent || this.index === this.$parent.length - 1
    }
  },
  mounted() {
    if (this.$parent?.$options.name === 'ZBreadcrumb') {
      this.separator = this.$parent.separator
      this.$parent.length += 1
    }
  },
  beforeDestroy() {
    if (this.$parent?.$options.name === 'ZBreadcrumb') this.$parent.length -= 1
  }
}
</script>
