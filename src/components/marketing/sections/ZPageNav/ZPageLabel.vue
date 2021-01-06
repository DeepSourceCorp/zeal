<template>
  <div class="inline-block px-2 text-sm uppercase rounded-sm">
    <slot>Page Label</slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ZPageLabel',
  props: {
    title: String,
    articles: {
      type: Array,
      default: [
        {
          title: '',
          link: ''
        },
        {
          title: '',
          link: ''
        }
      ]
    }
  }
}
</script>
