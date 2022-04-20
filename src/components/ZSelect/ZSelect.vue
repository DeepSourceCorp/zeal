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
          selectedOpt === undefined ? 'text-vanilla-400 opacity-70' : '',
          { truncate }
        ]"
      >
        <template v-if="selectedOpt">
          {{ selectedOptLabel || selectedOpt }}
        </template>
        <template v-else>
          {{ placeholder }}
        </template>
      </div>
      <button v-if="selectedOpt && clearable" class="flex items-center justify-between" @click.stop="clearSelected">
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
      class="absolute left-0 right-0 z-10 mt-1 overflow-hidden transition-all duration-300 border border-solid rounded-md options shadow-black border-ink-100 text-vanilla-300 bg-ink-300"
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
      selectedOpt: '' as string | number | null,
      selectedOptLabel: '' as string | number | null,
      selectedOptHTML: '',
      open: false,
      options: [] as Vue[]
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
    }
  },
  mounted() {
    this.options = this.$children.filter(child => child.$options.name === 'ZOption')

    if (this.selected) {
      const selectedOpt = this.options
        .map(child => {
          return child.$options.propsData as ZOptionPropsT
        })
        .filter(childProp => {
          return childProp.value === this.selected
        })

      if (selectedOpt[0]) {
        this.selectedOpt = selectedOpt[0].value
        this.selectedOptLabel = selectedOpt[0].label || selectedOpt[0].value
      }
    }
  },
  methods: {
    clearSelected(): void {
      this.selectedOpt = null
    },
    blurEvent(): void {
      this.open = false
    }
  },
  watch: {
    selectedOpt: function(newValue) {
      this.$emit('change', newValue)
    }
  }
})
</script>
