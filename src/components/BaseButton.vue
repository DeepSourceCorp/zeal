<template>
  <button class="bg-juniper text-ink-400 leading-8 font-normal py-2 px-4 rounded-sm">
    Default button
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
