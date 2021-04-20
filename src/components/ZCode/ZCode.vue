<template>
  <div class="z-code" v-html="content"></div>
</template>
<script>
export default {
  name: 'ZCode',
  props: {
    content: {
      type: String,
      default:''
    }
  }
}
</script>
<style>
@import '../../assets/css/syntax_highlighter.css';
</style>
