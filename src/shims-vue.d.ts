declare module '*.vue' {
  import { defineComponent } from "vue";
  import Vue from 'vue'
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
