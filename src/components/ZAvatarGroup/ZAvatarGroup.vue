<template>
  <div class="flex items-center">
    <slot></slot>
    <span v-if="limitExceededsBy > 0" class="ml-2"> +{{ limitExceededsBy }} </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const SIZES = {
  xs: { text: 'xs', classes: '-ml-3' },
  sm: { text: 'sm', classes: '-ml-3' },
  md: { text: 'md', classes: '-ml-3' },
  lg: { text: 'lg', classes: '-ml-3' },
  xl: { text: 'xl', classes: '-ml-3' }
}

export default Vue.extend({
  name: 'ZAvatarGroup',
  props: {
    size: {
      type: String,
      default: SIZES.md.text,
      validator: (size) => Object.keys(SIZES).includes(size)
    },
    loading: {
      type: Boolean,
      default: false
    },
    limit: Number
  },
  data() {
    return {
      avatars: [] as Vue[]
    }
  },
  computed: {
    limitExceededsBy(): number {
      /**
       * Returns by how much is the number of
       * avatars greater than the limit.
       */
      return this.avatars.length - this.limit
    }
  },
  mounted() {
    this.acquireAvatarsFromChildren()
    this.onlyShowAvatarsUnderLimit()
    this.assignStylingClassesToAvatars()
  },
  methods: {
    acquireAvatarsFromChildren() {
      /**
       * Acquires all the child components which are Avatars,
       * and stores them.
       */
      this.avatars = this.$children.filter(({ $options }) => $options.name === 'ZAvatar')
    },
    onlyShowAvatarsUnderLimit() {
      /**
       * Hides all the avatars which are
       * beyond the limit.
       */
      this.avatars.map(({ $data }, index) => {
        const isLimitExceeded = index > this.limit - 1
        $data.isVisible = !(this.limit && isLimitExceeded)
      })
    },
    assignStylingClassesToAvatars() {
      /**
       * Assigns custom styling classes
       * to all the avatars.
       */
      this.avatars.map(({ $el }, index) => {
        if (index > 0) {
          $el.classList.add(SIZES[this.size].classes)
        }
      })
    }
  }
})
</script>
