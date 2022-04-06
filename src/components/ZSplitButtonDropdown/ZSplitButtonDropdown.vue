<template>
  <div class="flex">
    <z-button
      :icon="icon"
      :to="to"
      button-type="secondary"
      rel="noopener noreferrer"
      size="small"
      target="_blank"
      class="-mr-0.5"
    >
      {{ label }}
    </z-button>

    <z-divider direction="vertical" margin="mt-2" color="slate" />

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
    to: {
      required: true,
      type: String
    }
  }
})
</script>
