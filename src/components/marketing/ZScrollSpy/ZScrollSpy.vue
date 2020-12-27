<template>
  <ul class="sticky top-50 self-start">
    <li
      v-for="heading in headingsMap"
      :key="heading.text"
      :class="[`${heading.active ? 'text-vanilla-100' : 'text-slate'}`]"
    >
      <a class="whitespace-nowrap" href="">{{ heading }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'ZScrollSpy',
  props: {
    rootId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      observer: {} as IntersectionObserver,
      headingsMap: {},
      activeHeading: '' as string | null
    }
  },
  created() {
    this.observer = new IntersectionObserver(this.onElementObserved, {
      root: document.querySelector(`#${this.rootId}`),
      threshold: 1.0
    })
  },
  mounted() {
    let headings = document.querySelectorAll(`#${this.rootId} h1`)
    headings.forEach(heading => {
      if (heading.textContent) {
        this.$set(this.headingsMap, heading.textContent, {})
        this.$set(this.headingsMap[heading.textContent], 'text', heading.textContent)
        this.$set(this.headingsMap[heading.textContent], 'active', false)
      }
    })
    headings.forEach(heading => {
      this.observer.observe(heading)
    })
  },
  methods: {
    onElementObserved(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if(entry.target.textContent) {
          if (entry.isIntersecting) {
            this.headingsMap[entry.target.textContent].active = true
          } else {
            this.headingsMap[entry.target.textContent].active = false
          }
        }
      })
    }
  }
}
</script>
