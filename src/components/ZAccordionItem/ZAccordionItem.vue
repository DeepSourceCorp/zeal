<template>
  <div
    class="z-accordion-item"
    :class="{
      'border-ink-200 border-t border-b first:border-0 last:border-0 hover:bg-ink-300': this.showBorders,
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
          class="transform transition-all duration-DEFAULT ease-in-out group stroke-1.5"
          size="medium"
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
      class="overflow-hidden text-sm leading-6 duration-300 ease-in-out transition-max-height"
      :class="[
        this.open ? (this.spanFullHeight ? 'max-h-full' : 'max-h-52') : 'max-h-0',
        { 'max-h-full': this.isList }
      ]"
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
      default: '',
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
    },
    spanFullHeight: {
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
  watch: {
    isOpen() {
      this.toggleAccordion()
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
