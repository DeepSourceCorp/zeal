<template class="flex flex-row my-3">
  <div class="flex flex-row my-3">
    <div class="mr-2">
      <z-toggle v-model="toggleState"></z-toggle>
    </div>
    <div class="space-y-2">
      <h5 class="leading-4">
        <slot name="title"></slot>
      </h5>
      <span class="text-xs">
        {{ toggles[index] }}
        <slot name="description"></slot>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import ZToggle from '../../../ZToggle'

export default Vue.extend({
  name: 'ZScrollShowcaseItem',
  components: {
    ZToggle
  },
  props: {
    toggles: {
      type: Array as PropType<Array<boolean>>,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data:function() {
    return {
      toggleState: false
    }
  },
  mounted() {
    this.toggleState = this.toggles[this.index] ? this.toggles[this.index] : false;
    console.log(this.toggles, this.index, this.toggles[this.index])
  },
  watch: {
    toggles: function() {
      this.toggleState = this.toggles[this.index] ? this.toggles[this.index] : false;
    }
  }
})
</script>
