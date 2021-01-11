<template>
  <div
    class="z-expandable mt-2"
    @mouseover.stop.prevent="toggleExpandable(true)"
    @mouseleave.stop.prevent="toggleExpandable(false)"
  >
    <div
      class="z-expandable__header bg-ink-300 p-2.5 font-semibold text-sm leading-6 cursor-pointer transition-all duration-300 ease-in-out"
      :class="openTextStyle"
      v-if="$slots.header"
    >
      <slot name="header"></slot>
    </div>
    <div
      class="z-expandable__content bg-ink-200 text-vanilla-100 overflow-scroll transition-all duration-700 ease-in-out text-sm leading-6"
      v-if="$slots.content"
      :class="openHeightStyle"
    >
      <div class="py-5 px-2.5"><slot name="content"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZExpandable',
  props: {
    open: {
      type: Boolean
    }
  },
  data() {
    return {
      isOpen: this.open
    }
  },
  computed: {
    openHeightStyle() {
      return this.isOpen ? 'max-h-52' : 'max-h-0'
    },
    openTextStyle() {
      return this.isOpen ? 'text-vanilla-100' : 'text-vanilla-400'
    }
  },
  methods: {
    toggleExpandable: function (open) {
      this.isOpen = open
    }
  }
}
</script>
