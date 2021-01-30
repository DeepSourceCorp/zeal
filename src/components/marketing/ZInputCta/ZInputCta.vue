<template>
  <div class="z-input relative">
    <input
      type="text"
      class="input h-8 w-full pt-2.5 pr-8 p-3 caret-juniper bg-ink-400 focus:shadow-white focus:border-vanilla-400 border border-solid border-bg-ink-100 rounded-sm outline-none"
      :class="[
        `${(disabled && 'text-slate cursor-not-allowed') || 'text-vanilla-300'}`,
        `text-${textSize}`
      ]"
      :value="name"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="updateSelf($event.target.value)"
    />
    <span
      class="absolute h-full flex items-center top-0 text-center transition-all right-0 cursor-pointer bg-juniper w-8 rounded-r-sm"
    >
      <z-icon class="mx-auto" icon="arrow-right" color="ink-400" size="small"></z-icon>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '../../ZIcon/ZIcon.vue'

export default Vue.extend({
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
    textSize: {
      type: String,
      default: 'sm'
    }
  },
  model: {
    prop: 'name',
    event: 'input'
  },
  methods: {
    updateSelf(name: string): void {
      this.$emit('input', name)
    }
  }
})
</script>
