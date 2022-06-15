<template>
  <component v-if="isVisible" :is="TYPES[type]" class="inline-block rounded-full" :class="stroke">
    <span
      v-if="isLoading"
      :class="[`${SIZES[getSize].classes}`]"
      class="flex items-center justify-center text-center rounded-full bg-gradient-skeleton text-vanilla-300"
    >
    </span>
    <template v-else>
      <img
        v-if="this.image"
        :src="image"
        :alt="userName"
        class="rounded-full"
        :class="[`${SIZES[getSize].classes}`]"
        @error.once="setFallbackImage"
      />
      <span
        v-if="!this.image && this.userName"
        :class="[`${SIZES[getSize].classes}`]"
        class="flex items-center justify-center text-center rounded-full bg-ink-200 text-vanilla-300"
      >
        {{ getUserInitials }}
      </span>
    </template>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
const SIZES = {
  '2xs': { classes: 'leading-none h-3 w-3 text-xxs', text: '2xs' },
  xs: { classes: 'leading-none h-4 w-4 text-xxs', text: 'xs' },
  sm: { classes: 'leading-none h-6 w-6 text-xs', text: 'sm' },
  md: { classes: 'leading-none h-8 w-8 text-sm', text: 'md' },
  lg: { classes: 'leading-none h-12 w-12 text-lg', text: 'lg' },
  xl: { classes: 'leading-none h-16 w-16 text-2xl', text: 'xl' }
}

const TYPES = {
  link: 'a',
  div: 'div',
  span: 'span'
}

export default Vue.extend({
  name: 'ZAvatar',
  props: {
    type: {
      type: String,
      default: 'link',
      validator: (type) => Object.keys(TYPES).includes(type)
    },
    loading: {
      type: Boolean,
      default: false
    },
    image: String,
    fallbackImage: {
      type: String,
      required: false,
      default: ''
    },
    userName: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: SIZES.md.text,
      validator: (size) => Object.keys(SIZES).includes(size)
    },
    stroke: {
      type: String,
      required: false,
      default: 'bg-ink-300 p-0.5'
    }
  },
  data() {
    return {
      isVisible: true,
      SIZES,
      TYPES
    }
  },
  computed: {
    isLoading(): boolean {
      const { $options, $props } = this.$parent as Vue
      return $options.name === 'ZAvatarGroup' ? $props.loading : this.loading
    },
    getSize(): string {
      /**
       * Returns `size` property as size of avatar if parent is not ZAvatarGroup,
       * else it returns `size` property of parent as size of avatar.
       */
      const { $options, $props } = this.$parent as Vue
      return $options.name === 'ZAvatarGroup' ? $props.size : this.size
    },
    getUserInitials(): string {
      /**
       * Returns capitalized initials of the user.
       * (Only from the first two words of the userName)
       */
      return this.userName
        ? this.userName
            .split(' ')
            .map((elem) => elem.charAt(0))
            .slice(0, this.size === '2xs' ? 1 : 2) // Make it a single alphabet for the `2xs` size variant
            .join('')
            .toUpperCase()
        : ''
    }
  },
  methods: {
    setFallbackImage(event: ErrorEvent): void {
      if (!this.fallbackImage) return

      const el = event.target as HTMLImageElement
      if (el.src !== this.fallbackImage) {
        el.src = this.fallbackImage
      }
    }
  }
})
</script>
