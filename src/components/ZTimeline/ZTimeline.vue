<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZTimeline',
  props: {},
  data() {
    return {}
  },
  mounted() {
    // this.items = this.$children.filter(child => child.$options.name === 'ZBreadcrumbItem')
    // this.length = this.items.length
    // this.items.map((item, index) => {
    //   item.index = index
    // })
  }
}
</script>
