<template>
  <div class="z-input w-full relative">
    <span
      v-if="icon && iconPosition === 'left'"
      class="absolute h-full flex items-center top-0 text-center transition-all left-2 cursor-pointer"
    >
      <z-icon :icon="icon" size="small"></z-icon>
    </span>
    <input
      type="text"
      class="input w-full pt-2.5 text-sm bg-ink-400 focus:shadow-white focus:border-vanilla-400 border border-solid border-bg-ink-100 rounded-sm outline-none h-10"
      :class="[
        `${(disabled && 'text-slate cursor-not-allowed') || 'text-vanilla-300'}`,
        getIconBasedStyle
      ]"
      :value="name"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="updateSelf($event.target.value)"
    />
    <span
      v-if="clearable && !icon"
      class="absolute h-full flex items-center top-0 text-center right-2 transition-all cursor-pointer"
      @click.stop="updateSelf('')"
    >
      <z-icon icon="x" size="small"></z-icon>
    </span>
    <span
      v-if="icon && iconPosition === 'right'"
      class="absolute h-full flex items-center top-0 text-center transition-all right-2 cursor-pointer"
    >
      <z-icon :icon="icon" size="small"></z-icon>
    </span>
  </div>
</template>

<script>
import ZIcon from '../ZIcon/ZIcon.vue'

export default {
  name: 'ZInput',
  components: {
    ZIcon
  },
  props: {
    name: {
      default: '',
      type: String
    },
    placeholder: {
      default: 'Enter a value',
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    },
    icon: {
      type: String
    },
    clearable: {
      type: Boolean
    },
    iconPosition: {
      type: String,
      default: 'left'
    }
  },
  model: {
    prop: 'name',
    event: 'input'
  },
  computed: {
    getIconBasedStyle() {
      const iconPositions = {
        left: 'pl-8 p-3',
        right: 'pr-8 p-3',
        none: 'p-3'
      }
      return (this.icon && iconPositions[this.iconPosition]) || iconPositions['none']
    }
  },
  methods: {
    updateSelf(name) {
      this.$emit('input', name)
    }
  }
}
</script>
