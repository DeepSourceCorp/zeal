<template>
  <ul :class="[`text-${align}`]">
    <li
      v-for="heading in headingsMap"
      :key="heading.id"
      :class="[
        `${
          isHeadingActive(heading) ? HEADING_STATE_CLASSES.active : HEADING_STATE_CLASSES.inactive
        }`,
        `${HEADING_ALIGNMENT_CLASSES[align]}-${HEADING_INDENT_SPACES[heading.tagName]}`
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
  headingTree: Array<Heading['id']>
  constructor(heading: Element, section: string, headingTree: Array<Heading['id']>) {
    this.id = heading.id
    this.text = heading.textContent
    this.tagName = heading.tagName.toLowerCase()
    this.section = section
    this.headingTree = headingTree
  }
}
const HEADING_STATE_CLASSES = {
  active: 'text-vanilla-100',
  inactive: 'text-slate'
}
const HEADING_ALIGNMENT_CLASSES = {
  left: 'ml',
  right: 'mr'
}
const HEADING_INDENT_SPACES = {
  h1: 0,
  h2: 4,
  h3: 8
}
const HEADINGS = {
  primary: 'h1',
  secondary: 'h2',
  tertiary: 'h3'
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
      validator: (val) =>
        Object.keys(HEADING_ALIGNMENT_CLASSES).some((alignment) => alignment === val)
    }
  },
  data() {
    return {
      observer: {} as IntersectionObserver,
      activeHeading: {} as Heading,
      headingsMap: {} as Record<string, Heading>,
      HEADING_INDENT_SPACES,
      HEADING_ALIGNMENT_CLASSES,
      HEADING_STATE_CLASSES
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
    this.headingElements.forEach(headingElement => {
      this.addAsHeadingToHeadingsMap(headingElement)
      this.observer.observe(headingElement)
    })
    this.breakDownHeadingsIntoSections()
    this.assignParentHeadingIdsToAllHeadings()
  },
  methods: {
    assignParentHeadingIdsToAllHeadings() {
      let parentForPrimaryHeadings = [] as Heading['headingTree']
      let parentForSecondaryHeadings = [] as Heading['headingTree']
      let parentForTertiaryHeadings = [] as Heading['headingTree']
      this.headingElements.forEach((headingElement: Element) => {
        let heading = new Heading(headingElement, '', [])
        if (heading.id) {
          if (heading.tagName === HEADINGS.primary) {
            parentForPrimaryHeadings = []
            parentForPrimaryHeadings.push(heading.id)
            this.headingsMap[heading.id].headingTree.push(heading.id)
          } else if (heading.tagName === HEADINGS.secondary) {
            parentForSecondaryHeadings = []
            parentForSecondaryHeadings.push(heading.id, ...parentForPrimaryHeadings)
            this.headingsMap[heading.id].headingTree.push(...parentForSecondaryHeadings)
          } else if (heading.tagName === HEADINGS.tertiary) {
            parentForTertiaryHeadings = []
            parentForTertiaryHeadings.push(heading.id, ...parentForSecondaryHeadings)
            this.headingsMap[heading.id].headingTree.push(...parentForTertiaryHeadings)
          }
        }
      })
    },
    onElementObserved(entries: IntersectionObserverEntry[]) {
      entries.forEach(({ target, isIntersecting }: IntersectionObserverEntry) => {
        let headingId = target.getAttribute('id')
        if (headingId && isIntersecting) {
          this.activeHeading = this.headingsMap[headingId]
        }
      })
    },
    isHeadingActive(heading: Heading) {
      return this.activeHeading.headingTree
        ? this.activeHeading.headingTree.includes(heading.id)
        : false
    },
    isHeadingVisible(heading: Heading) {
      if (heading.tagName === HEADINGS.primary) {
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
      this.headingElements.forEach((headingElement: Element) => {
        let heading = new Heading(headingElement, '', [])
        this.assignSectionValueToPrimaryHeadings(heading)
      })
      this.assignSectionValueToAllOtherHeadings()
    },
    assignSectionValueToPrimaryHeadings(heading: Heading) {
      if (heading.id && heading.tagName === HEADINGS.primary) {
        this.headingsMap[heading.id].section = heading.id
      }
    },
    assignSectionValueToAllOtherHeadings() {
      let section = '' as Heading['id']
      Object.keys(this.headingsMap).forEach((headingId) => {
        let heading = this.headingsMap[headingId] as Heading
        if (heading.section) {
          section = heading.section
        } else {
          heading.section = section
        }
      })
    }
  }
}
</script>
