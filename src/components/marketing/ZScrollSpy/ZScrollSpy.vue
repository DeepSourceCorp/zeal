<template>
  <ul class="sticky top-50 self-start">
    <li
      v-for="heading in getHeadingsText"
      :key="heading"
      :class="[`${heading === activeHeading && 'active'}`]"
    >
      <a class="whitespace-nowrap" href="">{{ heading }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'ZScrollSpy',
  props: {
    targetId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      observer: {} as IntersectionObserver,
      headings: {} as NodeListOf<Element>,
      activeHeading: '' as string | null
    }
  },
  created() {
    this.observer = new IntersectionObserver(this.onElementObserved, {
      root: document.querySelector(`#${this.targetId}`),
      threshold: 1.0
    })
  },
  mounted() {
    this.headings = document.querySelectorAll(`#${this.targetId} h1`)
    this.headings.forEach(heading => {
      this.observer.observe(heading)
    })
  },
  computed: {
    getHeadingsText: function(): Array<string> {
      let headingsArr = new Array()
      if (this.headings.length) {
        this.headings.forEach(elem => {
          headingsArr.push(elem.textContent)
        })
      }
      return headingsArr
    }
  },
  methods: {
    onElementObserved(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.intersectionRatio > 0) {
          this.activeHeading = entry.target.textContent
        }
        console.log(entry.intersectionRatio)
      })
    }
  }
}
</script>

<style lang="css" scoped>
.active {
  @apply text-juniper;
}
</style>
