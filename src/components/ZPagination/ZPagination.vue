<template>
  <nav role="navigation" aria-label="Pagination Navigation">
    <ul class="flex space-x-2 items-center">
      <li class="w-6 h-6 flex items-center rounded-sm text-vanilla-200 cursor-pointer">
        <button @click="previous()" :disabled="atFirst">
          <z-icon icon="chevron-left" size="small"></z-icon>
        </button>
      </li>
      <li
        :class="[
          'w-6 h-6',
          'items-center',
          'text-center',
          'rounded-sm',
          page.name === activeIndex
            ? 'bg-juniper text-ink-400'
            : 'text-vanilla-400 hover:bg-ink-300 cursor-pointer'
        ]"
        v-for="page in pages"
        v-bind:key="page.name"
      >
        <button
          v-if="page.type == 'Button'"
          type="button"
          :disabled="page.isDisabled"
          @click="updateActiveIndex(page.name)"
          :ariaLabel="`Go to Page ${page.name}`"
        >
          {{ page.name }}
        </button>
        <span v-else>...</span>
      </li>
      <li class="w-6 h-6 flex items-center rounded-sm text-vanilla-200 cursor-pointer">
        <button @click="next()" :disabled="atLast">
          <z-icon icon="chevron-right" size="small"></z-icon>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '../ZIcon/ZIcon.vue'

export default Vue.extend({
  name: 'ZPagination',
  components: {
    ZIcon
  },
  props: {
    value: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      required: true
    },
    totalVisible: {
      type: Number,
      default: 4
    },
    hideForSinglePage: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      activeIndex: 1
    }
  },
  mounted() {
    this.activeIndex = this.value
  },
  computed: {
    atFirst(): boolean {
      return this.activeIndex === 1
    },
    atLast(): boolean {
      return this.activeIndex === this.totalPages
    },
    showEnds(): boolean {
      if (this.totalVisible < 4) return false
      if (this.totalPages < this.totalVisible) return false
      return true
    },
    pageCount(): number {
      return this.showEnds ? this.totalVisible - 2 : this.totalVisible
    },
    showFirst(): boolean {
      if (!this.showEnds) return false
      return this.activeIndex > this.pageCount
    },
    showLast(): boolean {
      if (!this.showEnds) return false
      return this.activeIndex < this.totalPages - this.pageCount
    },
    startAt(): number {
      let start: number = this.activeIndex - 1
      if (this.atFirst) start = 1
      if (this.activeIndex > this.totalPages - this.totalVisible + 1) {
        start = this.totalPages - this.pageCount
      }

      return start > 0 ? start : 1
    },
    pages(): Array<Record<string, string | number | boolean>> {
      const range = []

      const startRange = Math.min(
        this.startAt + this.pageCount - Number(this.showFirst && this.showLast),
        this.totalPages
      )
      if (this.showFirst) {
        range.push({
          type: 'Button',
          name: 1,
          isDisabled: false
        })
        range.push({
          type: 'Divider'
        })
      }
      for (let tick = this.startAt; tick <= startRange; tick += 1) {
        range.push({
          type: 'Button',
          name: tick,
          isDisabled: tick === this.activeIndex
        })
      }

      if (this.showLast) {
        range.push({
          type: 'Divider'
        })
        range.push({
          type: 'Button',
          name: this.totalPages,
          isDisabled: false
        })
      }
      return range
    }
  },
  methods: {
    updateActiveIndex(index: number): void {
      this.activeIndex = index
      this.$emit('selected', index)
    },
    next(): void {
      if (this.atLast) return
      this.updateActiveIndex(this.activeIndex + 1)
    },
    previous(): void {
      if (this.atFirst) return
      this.updateActiveIndex(this.activeIndex - 1)
    }
  }
})
</script>
