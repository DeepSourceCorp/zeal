<template>
  <div class="z-menu">
    <div v-on:click="toggle()">
      <slot name="trigger" v-on:click="toggle()"></slot>
    </div>
    <div v-if="isOpen" class="text-vanilla-100">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ZMenu',
  data() {
    return {
      isOpen: true
    }
  },
  methods: {
    toggle(): void {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
