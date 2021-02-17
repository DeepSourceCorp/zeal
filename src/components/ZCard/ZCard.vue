<template>
  <div
    class="z-card text-vanilla-100 rounded-md overflow-hidden transition-all flex flex-col h-full"
    @click="handleClick"
  >
    <div class="z-card__header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="z-card__body flex-1" v-if="$slots.body">
      <slot name="body"></slot>
    </div>
    <div class="z-card__footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZCard',
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>
