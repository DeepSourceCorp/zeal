<template>
  <div class="flex items-center">
    <z-button
      :icon="icon"
      :to="to"
      @click="clicked"
      button-type="secondary"
      rel="noopener noreferrer"
      :size="size"
      target="_blank"
      class="-mr-0.5"
    >
      {{ label }}
    </z-button>

    <z-divider direction="vertical" margin="mx-0" color="ink-100" :class="['flex-shrink-0', dividerHeights[size]]" />

    <slot />
  </div>
</template>

<script>
import Vue from 'vue'

import ZButton from '../ZButton/ZButton.vue'
import ZDivider from '../ZDivider/ZDivider.vue'

export default Vue.extend({
  name: 'ZSplitButtonDropdown',
  components: {
    ZButton,
    ZDivider
  },
  props: {
    icon: {
      required: true,
      type: String
    },
    label: {
      required: true,
      type: String
    },
    size: {
      default: 'small',
      type: String,
      validator(val) {
        return ['small', 'medium', 'large', 'xlarge'].includes(val)
      }
    },
    to: {
      required: true,
      type: String
    }
  },
  data: function () {
    return {
      dividerHeights: {
        small: 'h-8',
        medium: 'h-10',
        large: 'h-12',
        xlarge: 'h-13'
      }
    }
  },
  methods: {
    clicked(event) {
      this.$emit('click', event)
    }
  }
})
</script>
