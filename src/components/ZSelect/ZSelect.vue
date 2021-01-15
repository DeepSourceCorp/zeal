<template>
  <div class="custom-select relative w-full text-left outline-none h-full leading-8" 
        :tabindex="tabIndex" 
        @blur.stop="open = false">
    <div class="selected h-full relative bg-ink-400 rounded-sm border border-solid text-vanilla-300 cursor-pointer " 
        :class="open && 'border-vanilla-400' || 'border-slate'" 
        @click="open = !open">
        <div v-if="selectedOpt" 
            class="selected-option flex items-center bg-transparent w-10/12 pl-4 outline-none cursor-pointer h-full text-xs">
            {{selectedOpt}}
        </div>
        <div v-else class="flex items-center bg-transparent w-10/12 pl-4 outline-none cursor-pointer h-full text-slate text-xs">{{placeholder}}</div>
        <span v-if="selectedOpt && clearable"
                class="absolute right-6 top-50 transform -translate-y-1/2"
                @click.stop="clearSelected()">
            <z-icon icon="x" size="small"></z-icon>
        </span>
        <span class="absolute top-50 right-2 transform -translate-y-1/2">
            <z-icon icon="chevron-down" 
                    size="small"
                    class="transform transition-all duration-300"
                    :class="open && 'rotate-180' || 'rotate-0'"
                    ></z-icon>
        </span>
    </div>
    <div class="options shadow-black border border-solid border-ink-100 text-vanilla-300 rounded-sm overflow-hidden absolute bg-ink-300 left-0 right-0 z-10 transition-all duration-300" 
        :class="!open && 'hidden'">
        <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '@/components/ZIcon/ZIcon.vue'

export default Vue.extend({
  name: 'ZSelect',
  components: {
      ZIcon
  },
  props: {
    selected: {
        type: String
    },
    tabIndex: {
      type: Number,
      required: false,
      default: 0,
    },
    placeholder: {
        type: String,
        default: 'Select an Option'
    },
    clearable: {
        type: Boolean,
        default: false
    }
  },
  data() {
    return {
        selectedOpt: this.selected ?
                    this.selected
                    : '',
        selectedOptHTML: '',
        open: false,
        options: [] as Vue[]
    };
  },
  mounted() {
    this.options = this.$children.filter((child) => child.$options.name === 'ZOption')
  },
  methods: {
      clearSelected(): void {
          this.selectedOpt = '';
      }
  }
})
</script>

