<template>
  <div class="flex">
    <z-button :icon="icon" :to="to" button-type="secondary" rel="noopener noreferrer" size="small" target="_blank">
      {{ label }}
    </z-button>

    <div class="border-l">
      <slot />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import ZButton from '../ZButton/ZButton.vue'

export default Vue.extend({
  name: 'ZSplitButtonDropdown',
  components: {
    ZButton
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
