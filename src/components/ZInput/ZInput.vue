<template>
  <div
    class="flex items-center w-full rounded-sm outline-none space-x-2 p-1 focus-within:shadow-white"
    :class="[
      borderStyles,
      `text-${textSize}`,
      `bg-${backgroundColor}`,
      {
        'text-slate cursor-not-allowed': disabled,
        'text-vanilla-300': !disabled
      }
    ]"
  >
    <!-- Any icon/content to the left renders here -->
    <slot name="left"></slot>
    <input
      v-debounce:[debounceDelay]="updateDebounce"
      type="text"
      class="w-full caret-juniper flex flex-grow outline-none bg-transparent pl-0.5 leading-5"
      :class="{
        'cursor-not-allowed': disabled
      }"
      :value="name"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="updateSelf($event.target.value)"
    />
    <!-- Any icon/content to the right renders here -->
    <slot name="right">
      <z-icon
        v-if="clearable"
        icon="x"
        size="small"
        class="cursor-pointer"
        @click.stop="updateSelf('')"
      >
      </z-icon>
    </slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '../ZIcon/ZIcon.vue'
import debounceDirective from '@/directives/debounce'

export default Vue.extend({
  name: 'ZInput',
  components: {
    ZIcon
  },
  directives: {
    debounce: debounceDirective
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
    debounceDelay: {
      default: 350,
      type: Number
    },
    icon: {
      type: String,
      default: undefined
    },
    clearable: {
      type: Boolean
    },
    textSize: {
      type: String,
      default: 'sm'
    },
    backgroundColor: {
      type: String,
      default: 'ink-400'
    },
    showBorder: {
      type: Boolean,
      default: true
    }
  },
  model: {
    prop: 'name',
    event: 'input'
  },
  computed: {
    borderStyles(): string {
      if (this.showBorder) {
        return 'focus:border-vanilla-400 border border-solid border-ink-100'
      }
      return ''
    }
  },
  methods: {
    updateSelf(name: string): void {
      this.$emit('input', name)
    },
    updateDebounce(value: unknown): void {
      this.$emit('debounceInput', value)
    }
  }
})
</script>
