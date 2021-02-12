<template>
  <div
    class="z-accordion-item"
    :class="{
      'border-slate border-t last:border-b': this.baseStyle,
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
          icon="chevron-down"
          color="slate"
          class="transform"
          :class="[
            accordionHeaderAnimations,
            {
              'text-vanilla-100 rotate-180': this.open,
              'text-slate': this.isDisabled,
              'group-hover:text-vanilla-100': !this.isDisabled,
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
      baseStyle: this.$parent.defaultStyle,
      isDisabled: this.$parent.disabled
    }
  },
  methods: {
    toggleAccordion() {
      if (this.isList) return
      this.open = !this.open
      this.accordionHeaderAnimations = this.open
        ? 'animate-first-half-spin rotate-180'
        : 'animate-reverse-half-spin rotate-0'
      this.$emit('isOpen', this.open)
    }
  }
}
</script>