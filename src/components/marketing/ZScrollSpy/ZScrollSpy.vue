<template>
  <ul class="sticky top-50 self-start" :class="[`text-${align}`]">
    <li
      v-for="heading in headings"
      :key="heading.text"
      :class="[`${heading.active ? 'text-vanilla-100' : 'text-slate'}`]"
    >
      <!-- TODO: Add href with id of headings to scroll to.
      To be done, after markdown compilation setup. -->
      <a class="whitespace-nowrap text-xs" href="">{{ heading.text }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
interface Heading {
  text: string
  active: boolean
}

export default {
  name: 'ZScrollSpy',
  props: {
    rootId: {
      type: String,
      required: true
    },
    align: {
      type: String,
      default: 'right'
    }
  },
  data() {
    return {
      observer: {} as IntersectionObserver,
      headings: {} as Record<string, Heading>
    }
  },
  computed: {
    rootElement(): Element | null {
      return document.querySelector(`#${this.rootId}`)
    },
    headingElements(): NodeListOf<Element> {
      return document.querySelectorAll(`#${this.rootId} h1`)
    }
  },
  created() {
    this.observer = new IntersectionObserver(this.onElementObserved, {
      root: this.rootElement,
      threshold: 1.0
    })
  },
  mounted() {
    this.headingElements.forEach((elem) => {
      if (elem.textContent) {
        this.addHeading(elem.textContent)
        this.observer.observe(elem)
      }
    })
  },
  methods: {
    onElementObserved(entries: IntersectionObserverEntry[]) {
      entries.forEach(({ target, isIntersecting }: IntersectionObserverEntry) => {
        if (target.textContent) {
          if (isIntersecting) {
            this.headings[target.textContent].active = true
          } else {
            this.headings[target.textContent].active = false
          }
        }
      })
    },
    addHeading(heading: string) {
      this.$set(this.headings, heading, {})
      this.$set(this.headings[heading], 'text', heading)
      this.$set(this.headings[heading], 'active', false)
    }
  }
}
</script>
