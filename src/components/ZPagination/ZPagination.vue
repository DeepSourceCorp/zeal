<template>
  <nav role="navigation" aria-label="Pagination Navigation">
    <ul class="z-pagination flex items-center space-x-2">
      <li>
        <button
          @click="previous()"
          :disabled="atFirst"
          class="z-pagination-previous outline-none focus:outline-none flex items-center justify-center w-7 h-7 rounded-sm"
          :class="{ 'hover:bg-ink-300': !atFirst }"
        >
          <z-icon icon="chevron-left" size="small" :color="`${atFirst ? 'slate' : 'vanilla-200'}`"></z-icon>
        </button>
      </li>
      <li v-for="page in pages" v-bind:key="page.name">
        <button
          :class="[
            'z-pagination-pager',
            'px-2.5 py-0.5',
            'items-center',
            'text-center',
            'rounded-sm',
            'outline-none',
            'focus:outline-none',
            page.name === activeIndex ? 'bg-juniper text-ink-400' : 'text-vanilla-400 hover:bg-ink-300'
          ]"
          v-if="page.type == 'Button'"
          type="button"
          :disabled="page.isDisabled"
          @click="updateActiveIndex(page.name)"
          :ariaLabel="`Go to Page ${page.name}`"
        >
          {{ page.name }}
        </button>
        <span v-else class="z-pagination-divider h-6 items-center text-center select-none"
          ><hr class="w-10 border-vanilla-400 rounded-full"
        /></span>
      </li>
      <li>
        <button
          @click="next()"
          :disabled="atLast"
          class="z-pagination-next outline-none focus:outline-none flex items-center justify-center w-7 h-7 rounded-sm"
          :class="{ 'hover:bg-ink-300': !atLast }"
        >
          <z-icon icon="chevron-right" size="small" :color="`${atLast ? 'slate' : 'vanilla-200'}`"></z-icon>
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
  model: {
    prop: 'page',
    event: 'selected'
  },
  props: {
    page: {
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
    this.activeIndex = this.page
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
      // if ends are visible, remove two counts from total visible to offset end indicators
      // otherwise totalvisible minus on to offset for active index
      if (this.totalVisible >= this.totalPages) return this.totalVisible
      return this.showEnds ? this.totalVisible - 2 : this.totalVisible - 1
    },
    showFirst(): boolean {
      // Don't show first if activeIndex is in the first pageCount batch
      return this.showEnds && this.activeIndex > this.pageCount
    },
    showLast(): boolean {
      // Don't show last if activeIndex is within the last pageCount batch
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

      // In case the activeIndex is in first totalVisible batch, start with 1
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
      this.$emit('selected', this.activeIndex)
    },
    next(): void {
      if (this.atLast) return
      this.updateActiveIndex(this.activeIndex + 1)
    },
    previous(): void {
      if (this.atFirst) return
      this.updateActiveIndex(this.activeIndex - 1)
    }
  },
  watch: {
    page(newPage) {
      this.activeIndex = newPage
    }
  }
})
</script>
