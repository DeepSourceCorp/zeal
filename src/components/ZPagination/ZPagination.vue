<template>
  <nav role="navigation" aria-label="Pagination Navigation">
    <ul class="flex items-center space-x-2">
      <li class="flex items-center justify-center w-6 h-6 rounded-sm">
        <button @click="previous()" :disabled="atFirst">
          <z-icon
            icon="chevron-left"
            size="small"
            :color="`${atFirst ? 'slate' : 'vanilla-200'}`"
          ></z-icon>
        </button>
      </li>
      <li v-for="page in pages" v-bind:key="page.name">
        <button
          :class="[
            'w-6 h-6',
            'items-center',
            'text-center',
            'rounded-sm',
            page.name === activeIndex
              ? 'bg-juniper text-ink-400'
              : 'text-vanilla-400 hover:bg-ink-300'
          ]"
          v-if="page.type == 'Button'"
          type="button"
          :disabled="page.isDisabled"
          @click="updateActiveIndex(page.name)"
          :ariaLabel="`Go to Page ${page.name}`"
        >
          {{ page.name }}
        </button>
        <span
          v-else
          class="w-6 h-6 items-center text-center rounded-sm text-vanilla-400 hover:bg-ink-300 select-none"
          >…</span
        >
      </li>
      <li class="flex items-center justify-center w-6 h-6 rounded-sm">
        <button @click="next()" :disabled="atLast">
          <z-icon
            icon="chevron-right"
            size="small"
            :color="`${atLast ? 'slate' : 'vanilla-200'}`"
          ></z-icon>
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
      default: 4,
      validator(value): boolean {
        return value > 1
      }
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
      if (this.totalVisible < 3) return false
      if (this.totalPages < this.totalVisible) return false
      return true
    },
    pageCount(): number {
      return this.showEnds ? this.totalVisible - 2 : this.totalVisible - 1
    },
    showFirst(): boolean {
      return this.showEnds && this.activeIndex > this.pageCount
    },
    showLast(): boolean {
      return this.showEnds && this.activeIndex < this.totalPages - this.pageCount
    },
    startAt(): number {
      let start: number = this.activeIndex - 1

      // For a case where totalVisible = 3
      // the pager will have only one item if ends are visible
      if (this.showEnds && this.pageCount == 1) {
        start = this.activeIndex
      }

      // If the pager is at first,
      if (this.atFirst) start = 1

      // Check if the activeIndex is within the last totalVisible batch
      if (this.activeIndex > this.totalPages - this.totalVisible + 1) {
        start = this.totalPages - this.pageCount
      }

      if (this.showEnds && this.activeIndex <= 3 && this.pageCount !== 1) {
        start = 1
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
