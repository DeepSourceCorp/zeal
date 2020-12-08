<template>
  <div id="app">
      <div class="heading1">Title</div>
      <div class="heading2">Title</div>
      <div class="heading3">Title</div>
      <div class="heading4">Title</div>
      <div class="heading5">Title</div>
      <div class="heading6">Title</div>
      <div class="caption">Caption</div>
      <z-button 
        color="secondary"
        fullWidth
        >
        </z-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ZButton } from "@/components/ZButton";

@Component({
  name: 'app',
  components: {
    ZButton
  }
})
export default class App extends Vue{}

</script>