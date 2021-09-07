<template>
  <div
    :tabindex="tabIndex"
    class="custom-select relative w-full text-left outline-none h-full leading-8"
    :class="{ 'is-disabled': disabled, 'is-readonly': readOnly }"
    @[canBlur]="open = false"
  >
    <div
      class="selected h-full relative border border-solid"
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
      <div
        v-if="selectedOpt"
        class="selected-option flex items-center bg-transparent w-10/12 pl-3 outline-none cursor-pointer h-full"
        :class="[getTextSize, getCursorType]"
      >
        {{ selectedOptLabel || selectedOpt }}
      </div>
      <!-- prettier-ignore -->
      <div
        v-else
        class="flex items-center bg-transparent w-10/12 pl-3 outline-none cursor-pointer h-full text-vanilla-400 opacity-70"
        :class="[getTextSize]"
      >
        {{ placeholder }}
      </div>
      <button
        v-if="selectedOpt && clearable"
        class="absolute right-3 top-50 transform -translate-y-1/2"
        @click.stop="clearSelected()"
      >
        <z-icon icon="x" size="small" :color="getIconColor"></z-icon>
      </button>
      <span v-else class="absolute top-50 right-3 transform -translate-y-1/2">
        <z-icon
          icon="chevron-down"
          size="small"
          class="transform transition-all duration-300"
          :color="getIconColor"
          :class="(open && 'rotate-180') || 'rotate-0'"
        ></z-icon>
      </span>
    </div>
    <!-- prettier-ignore -->
    <div
      class="options shadow-black border border-solid border-ink-100 text-vanilla-300 rounded-md overflow-hidden absolute bg-ink-300 left-0 right-0 z-10 transition-all duration-300 mt-1"
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
      type: String || Number || null,
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
      default: ''
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
    canBlur(): string {
      if (!this.disabled && !this.readOnly) return 'blur.stop'
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
    this.options = this.$children.filter((child) => child.$options.name === 'ZOption')

    if (this.selected) {
      const selectedOpt = this.options
        .map((child) => {
          return child.$options.propsData as ZOptionPropsT
        })
        .filter((childProp) => {
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
    }
  },
  watch: {
    selectedOpt: function (newValue) {
      this.$emit('change', newValue)
    }
  }
})
</script>
