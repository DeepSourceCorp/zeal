<template>
  <ul :class="[`text-${align}`]">
    <li
      v-for="heading in headingsMap"
      :key="heading.id"
      :class="[
        `${isHeadingActive(heading) ? 'text-vanilla-100' : 'text-slate'}`,
        `${align === 'left' ? 'ml' : 'mr'}-${HEADING_INDENT_SPACES[heading.tagName]}`
      ]"
    >
      <a v-if="isHeadingVisible(heading)" class="text-sm" :href="`#${heading.id}`">
        {{ heading.text }}
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
class Heading {
  id: string | null
  text: string | null
  tagName: string
  section: Heading['id']
  parentHeadings: Array<Heading['id']>
  constructor(heading: Element, section: string, parentHeadings: Array<Heading['id']>) {
    this.id = heading.id
    this.text = heading.textContent
    this.tagName = heading.tagName.toLowerCase()
    this.section = section
    this.parentHeadings = parentHeadings
  }
}

const HEADING_INDENT_SPACES = {
  h1: 0,
  h2: 4,
  h3: 8
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
      default: 'left',
      validator: (val) => ['left', 'right'].includes(val)
    }
  },
  data() {
    return {
      observer: {} as IntersectionObserver,
      activeHeading: {} as Heading,
      headingsMap: {} as Record<string, Heading>,
      HEADING_INDENT_SPACES
    }
  },
  computed: {
    headingElements(): NodeListOf<Element> {
      return document.querySelectorAll(`#${this.rootId} h1, h2, h3`)
    }
  },
  created() {
    this.observer = new IntersectionObserver(this.onElementObserved, {
      root: document.querySelector(`#${this.rootId}`),
      threshold: 1.0,
      rootMargin: '0px 0px -50% 0px'
    })
  },
  mounted() {
    this.headingElements.forEach((headingElement) => {
      this.addAsHeadingToHeadingsMap(headingElement)
      this.observer.observe(headingElement)
    })
    this.breakDownHeadingsIntoSections()
  },
  methods: {
    onElementObserved(entries: IntersectionObserverEntry[]) {
      entries.forEach(({ target, isIntersecting }: IntersectionObserverEntry) => {
        if (isIntersecting) {
          this.activeHeading = new Heading(target, '', [])
        }
      })
    },
    isHeadingActive(heading: Heading) {
      return this.activeHeading.id === heading.id
    },
    isHeadingVisible(heading: Heading) {
      if (heading.tagName === 'h1') {
        return true
      }
      return this.activeHeading.id
        ? this.headingsMap[this.activeHeading.id].section === heading.section
        : false
    },
    addAsHeadingToHeadingsMap(headingElement: Element) {
      let heading = new Heading(headingElement, '', [])
      if (heading.id) {
        this.$set(this.headingsMap, heading.id, heading)
      }
    },
    breakDownHeadingsIntoSections() {
      this.headingElements.forEach((headingElement) => {
        let heading = new Heading(headingElement, '', [])
        this.assignSectionValueToPrimaryHeadings(heading)
      })
      this.assignSectionValueToAllOtherHeadings()
    },
    assignSectionValueToPrimaryHeadings(heading: Heading) {
      if (heading.id && heading.tagName === 'h1') {
        this.headingsMap[heading.id].section = heading.id
      }
    },
    assignSectionValueToAllOtherHeadings() {
      let section = '' as Heading['id']
      Object.keys(this.headingsMap).forEach((headingId) => {
        if (this.headingsMap[headingId].section) {
          section = this.headingsMap[headingId].section
        } else {
          this.headingsMap[headingId].section = section
        }
      })
    }
  }
}
</script>
