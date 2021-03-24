// Vue Docs: vuejs.org/v2/guide/custom-directive.html

import { DirectiveOptions } from 'vue'
import { DirectiveBinding } from 'vue/types/options'

const debounceDirective: DirectiveOptions = {
  bind(el: HTMLElement, binding: DirectiveBinding) {
    const fn = binding.value
    let timeoutID: ReturnType<typeof setTimeout>

    el.oninput = (event: Event) => {
      clearTimeout(timeoutID)
      timeoutID = setTimeout(() => {
        const target = event.target as HTMLInputElement
        fn(target.value, event)
      }, Number(binding.arg) || 400)
    }
  }
}

export default debounceDirective
