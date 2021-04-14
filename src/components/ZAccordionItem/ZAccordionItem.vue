<template>
  <div
    class="z-accordion-item"
    :class="{
      'border-ink-200 border-t border-b first:border-0 last:border-0 hover:bg-ink-300': this
        .showBorders,
      'text-vanilla-200': !this.isDisabled,
      'text-slate': this.isDisabled
    }"
  >
    <slot name="title" :open="open" :toggleAccordion="toggleAccordion">
      <div
        class="flex items-center transition-all duration-700 ease-in-out group"
        @click="toggleAccordion()"
        :class="{
          'cursor-not-allowed': this.isDisabled,
          'cursor-pointer': !this.isDisabled && !this.isList
        }"
      >
        <span class="flex-1 font-medium">{{ title }}</span>
        <z-icon
          icon="chevron-right"
          color="slate"
          class="transform transition-all duration-DEFAULT ease-in-out group"
          :class="[
            accordionHeaderAnimations,
            {
              'text-vanilla-200 rotate-90': this.open,
              'text-slate': this.isDisabled,
              'group-hover:text-vanilla-200': !this.isDisabled,
              hidden: this.isList
            }
          ]"
        ></z-icon>
      </div>
    </slot>
    <div
      class="overflow-scroll transition-max-height duration-300 ease-in-out text-sm leading-6"
      :class="{
        'max-h-52': this.open,
        'max-h-0': !this.open,
        'max-h-full': this.isList
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ZIcon from '@/components/ZIcon'
export default {
  name: 'ZAccordionItem',
  components: {
    ZIcon
  },
  props: {
    title: {
      required: true,
      type: String
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'down'
    },
    isList: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      open: this.isOpen,
      accordionHeaderAnimations: '',
      isDisabled: this.$parent.disabled,
      showBorders: this.$parent.showBorders
    }
  },
  methods: {
    toggleAccordion() {
      if (this.isDisabled) return
      if (this.isList) return
      this.open = !this.open
      this.accordionHeaderAnimations = this.open
        ? 'animate-first-quarter-spin rotate-90'
        : 'animate-reverse-quarter-spin rotate-0'
      this.$emit('isOpen', this.open)
    }
  }
}
</script>
