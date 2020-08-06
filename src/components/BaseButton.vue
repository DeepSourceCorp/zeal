<template>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Button
  </button>
</template>

<script>
export default {
  name: 'button',

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>
