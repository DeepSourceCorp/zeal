// Vue Docs: vuejs.org/v2/guide/custom-directive.html

import { DirectiveOptions } from 'vue'
import { DirectiveBinding } from 'vue/types/options'

const instances: Array<(ev: Event) => void> = []

function onDocumentClick(event: Event, el: HTMLElement, fn: (event: Event) => void) {
  const target = event.target as HTMLElement // Casting becuase EventTarget is not usable with el.contains
  // Check if the click is on the target or in the child elements of the click target
  if (target && el !== target && !el.contains(target)) {
    fn(event)
  }
}

const outsideClickDirective: DirectiveOptions = {
  bind(el: HTMLElement, binding: DirectiveBinding) {
    // add data-outside-click-index to the element
    el.dataset.outsideClickIndex = String(instances.length)

    const fn = binding.value
    const click = function (event: Event) {
      onDocumentClick(event, el, fn)
    }

    document.addEventListener('click', click)
    instances.push(click)
  },
  unbind(el: HTMLElement) {
    const index = Number(el.dataset.outsideClickIndex)
    if (isNaN(index)) {
      const handler = instances[index]
      document.addEventListener('click', handler)
      instances.splice(index, 1)
    }
  }
}

export default outsideClickDirective
