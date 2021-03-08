<template>
  <td class="z-table-cell py-2.5 px-5 flex-1" :class="[`text-${textAlign}`]">
    <slot></slot>
  </td>
</template>

<script>
export default {
  name: 'ZTableCell',
  props: {
    textAlign: {
      default: 'left',
      type: String
    }
  },
  computed: {},
  methods: {}
}
</script>
