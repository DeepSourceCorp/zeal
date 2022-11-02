<template>
  <div
    :tabindex="tabIndex"
    class="relative w-full h-full leading-8 text-left outline-none custom-select"
    :class="{ 'is-disabled': disabled, 'is-readonly': readOnly }"
    @blur.stop="!disabled && !readOnly && blurEvent()"
  >
    <div
      class="flex items-center justify-between h-full space-x-2 border border-solid selected"
      :class="[
        (open && 'border-vanilla-400') || borderClass,
        spacing,
        backgroundClass,
        borderRadius,
        getTextColor,
        getCursorType
      ]"
      @[canClick]="open = !open"
    >
      <slot name="icon"></slot>
      <div
        class="flex items-center flex-grow h-full outline-none cursor-pointer"
        :class="[
          getTextSize,
          getCursorType,
          selectedValue === undefined ? 'text-vanilla-400 opacity-70' : '',
          { truncate }
        ]"
      >
        <template v-if="selectedLabel || selectedValue">
          {{ selectedLabel || selectedValue }}
        </template>
        <template v-else>
          {{ placeholder }}
        </template>
      </div>
      <button v-if="selectedValue && clearable" class="flex items-center justify-between" @click.stop="clearSelected">
        <z-icon icon="x" size="small" :color="getIconColor"></z-icon>
      </button>
      <span v-else>
        <z-icon
          icon="chevron-down"
          size="small"
          class="transition-all duration-300 transform"
          :color="getIconColor"
          :class="(open && 'rotate-180') || 'rotate-0'"
        ></z-icon>
      </span>
    </div>
    <!-- prettier-ignore -->
    <div
      class="absolute left-0 right-0 z-10 mt-1 overflow-y-auto transition-all duration-300 border border-solid rounded-md max-h-64 options shadow-black border-ink-100 text-vanilla-300 bg-ink-300"
      :class="!open && 'hidden'"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '@/components/ZIcon/ZIcon.vue'

interface ZOptionPropsT extends Vue {
  value: string | number | null
  label: string
}

export default Vue.extend({
  name: 'ZSelect',
  components: {
    ZIcon
  },
  props: {
    selected: {
      type: [String, Number],
      default: null
    },
    tabIndex: {
      type: Number,
      required: false,
      default: 0
    },
    placeholder: {
      type: String,
      default: 'Select an Option'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    spacing: {
      type: String,
      default: 'px-2 py-3'
    },
    borderClass: {
      type: String,
      default: 'border-ink-200'
    },
    borderRadius: {
      type: String,
      default: 'rounded-md'
    },
    backgroundClass: {
      type: String,
      default: 'bg-transparent'
    },
    textSize: {
      type: String,
      default: 'text-xs'
    },
    disabled: {
      default: false,
      type: Boolean
    },
    readOnly: {
      default: false,
      type: Boolean
    },
    truncate: {
      default: false,
      type: Boolean
    }
  },

  model: {
    prop: 'selected',
    event: 'change'
  },

  data() {
    return {
      open: false,
      options: [] as Array<Vue>
    }
  },

  computed: {
    canClick(): string {
      if (!this.disabled && !this.readOnly) return 'click'
      return ''
    },
    getTextSize(): string {
      const validTextSizes = ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl']
      if (validTextSizes.includes(this.textSize)) {
        return this.textSize
      }
      return 'text-xs'
    },
    getTextColor(): string {
      if (this.disabled) return 'text-slate'
      if (this.readOnly) return 'text-vanilla-400'
      return 'text-vanilla-300'
    },
    getCursorType(): string {
      if (this.disabled || this.readOnly) return 'cursor-not-allowed'
      return 'cursor-pointer'
    },
    getIconColor(): string {
      if (this.disabled) return 'slate'
      return 'vanilla-400'
    },
    selectedLabel(): string | number | null {
      const selectedOption = this.getSelectedOption()

      if (selectedOption) {
        return selectedOption.label
      }
      return null
    },
    selectedValue(): string | number | null {
      const selectedOption = this.getSelectedOption()

      if (selectedOption) {
        return selectedOption.value
      }
      return null
    }
  },

  mounted(): void {
    this.options = this.$children.filter((child) => child.$options.name === 'ZOption')
  },

  methods: {
    blurEvent(): void {
      this.open = false
    },
    clearSelected(): void {
      this.$emit('change', null)
    },
    getSelectedOption(): ZOptionPropsT | null {
      if (this.selected) {
        const selectedOption = this.options
          .map((child) => {
            return child.$options.propsData as ZOptionPropsT
          })
          .find((childProp) => {
            return childProp.value === this.selected
          })

        if (selectedOption) {
          return selectedOption
        }
      }

      return null
    },
    onChange(val: string): void {
      this.$emit('change', val)
    }
  }
})
</script>
