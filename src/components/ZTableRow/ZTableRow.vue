<template>
  <tr class="z-table-row border-b border-ink-300 flex w-full">
    <slot></slot>
  </tr>
</template>

<script>
export default {
  name: 'ZTableRow',
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
