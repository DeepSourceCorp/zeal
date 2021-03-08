<template>
  <table class="z-table p-8 border border-ink-200 border-collapse w-full">
    <thead class="w-full">
      <slot name="head"></slot>
    </thead>
    <tbody class="w-full">
      <slot name="body"></slot>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ZTable',
  props: {
    height: {
      default: '',
      type: String
    }
  },
  computed: {},
  methods: {}
}
</script>
