<template>
  <div
    class="h-full w-1/6 flex flex-col border border-l-0 border-solid border-ink-200 text-vanilla-100"
<<<<<<< HEAD
<<<<<<< HEAD
    :class="[`bg-${bgColor}`]"
  >
=======
    :class="[`bg-${bgColor}`]">
>>>>>>> Add Sidebar section and component
=======
    :class="[`bg-${bgColor}`]"
  >
>>>>>>> Format code with prettier
    <div class="w-full h-12 border-b border-solid border-ink-200 p-2" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="w-full flex-1 p-2 overflow-scroll" v-if="$slots.body">
      <slot name="body"></slot>
    </div>
    <div class="w-full h-1/4 border-t border-solid border-ink-200 p-2" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ZSidebar',
<<<<<<< HEAD
<<<<<<< HEAD
  components: {},
  props: {
    bgColor: {
      type: String,
      default: 'transparent'
    }
=======
  components: {
  },
  props: {
      bgColor: {
          type: String,
          default: 'transparent'
      }
>>>>>>> Add Sidebar section and component
=======
  components: {},
  props: {
    bgColor: {
      type: String,
      default: 'transparent'
    }
>>>>>>> Format code with prettier
  }
}
</script>
