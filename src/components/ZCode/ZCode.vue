<template>
  <div class="z-code" v-html="content"></div>
</template>
<script>
export default {
  name: 'ZCode',
  props: {
    content: {
      type: String
    }
  }
}
</script>
<style>
@import '../../assets/css/syntax_highlighter.css';
</style>
