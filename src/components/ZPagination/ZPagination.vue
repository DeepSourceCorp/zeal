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
    showEnds: {
      type: Boolean,
      default: true
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
    pageCount(): number {
      return this.showEnds ? this.totalVisible - 2 : this.totalVisible
    },
    showStart(): boolean {
      if (!this.showEnds || this.atFirst) return false
      return this.activeIndex > this.pageCount
    },
    showEnd(): boolean {
      if (!this.showEnds || this.atLast) return false
      return this.activeIndex < this.totalPages - this.pageCount
    },
    startAt(): number {
      if (this.atFirst) return 1
      if (this.activeIndex <= 3) return 1
      if (this.atLast) return this.totalPages - this.totalVisible + 1

      // by default show the active page and a page before that
      let start = this.activeIndex - 1

      // ensure there are always totalVisible items on the switcher
      const offset = this.totalPages - start + 1
      // check if enought elements are present ahead
      if (offset < this.pageCount) {
        // if not present, move the start point behind by that offset
        start = start - (this.pageCount - offset)
      }
      return start > 0 ? start : 1
    },
    pages(): Array<Record<string, string | number | boolean>> {
      const range = []

      const startRange = Math.min(this.startAt + this.totalVisible - 1, this.totalPages)
      if (this.showStart) {
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

      if (this.showEnd) {
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
