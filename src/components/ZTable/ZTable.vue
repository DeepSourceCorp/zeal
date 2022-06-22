<template>
  <table class="z-table p-8 border border-slate-400 border-collapse w-full">
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
  name: 'ZTable'
}
</script>
