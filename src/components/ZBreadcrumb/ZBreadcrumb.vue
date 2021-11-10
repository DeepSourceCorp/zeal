<template>
  <div aria-label="Breadcrumb" role="navigation" class="flex space-x-2">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    }
  },
  data() {
    return {
      items: [],
      length: 0
    }
  },
  mounted() {
    this.recalculateItems()
  },
  methods: {
    recalculateItems() {
      this.items = this.$children.filter((child) => child.$options.name === 'ZBreadcrumbItem')
      this.items.map((item, index) => {
        item.index = index
      })
    }
  },
  watch: {
    length() {
      this.recalculateItems()
    }
  }
}
</script>
