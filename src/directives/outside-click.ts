// Vue Docs: vuejs.org/v2/guide/custom-directive.html

import { DirectiveOptions } from 'vue'
import { DirectiveBinding } from 'vue/types/options'
import { containsElement } from '@/helpers/components/utils'

const instances: Array<(ev: Event) => void> = []

function onDocumentClick(event: Event, el: HTMLElement, fn: (event: Event) => void) {
  // Casting becuase EventTarget is not usable with el.contains
  const target = event.target as HTMLElement
  // Check if the click is on the target or in the child elements of the click target
  if (!containsElement(el, target)) {
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
    document.addEventListener('touchstart', click)
    instances.push(click)
  },
  unbind(el: HTMLElement) {
    const index = Number(el.dataset.outsideClickIndex)
    if (isNaN(index)) {
      const handler = instances[index]
      document.removeEventListener('click', handler)
      document.removeEventListener('touchstart', handler)
      instances.splice(index, 1)
    }
  }
}

export default outsideClickDirective
