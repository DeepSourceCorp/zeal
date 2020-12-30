<template>
  <ul :class="[`text-${align}`]">
    <li
      v-for="heading in headingsMap"
      :key="heading.id"
      :class="[
        `${
          isHeadingActive(heading) ? HEADING_STATE_CLASSES.active : HEADING_STATE_CLASSES.inactive
        }`,
        `${HEADING_ALIGNMENT_CLASSES[align]}-${HEADINGS[heading.tagName].indentSpace}`
      ]"
    >
      <a v-if="isHeadingVisible(heading)" class="text-sm" :href="`#${heading.id}`">
        {{ heading.text }}
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
interface Heading {
  id: string | null
  text: string | null
  tagName: string
  section: Heading['id']
  headingsToActivate: Array<Heading['id']>
}
const HEADING_STATE_CLASSES = {
  active: 'text-vanilla-100',
  inactive: 'text-slate'
}
const HEADING_ALIGNMENT_CLASSES = {
  left: 'ml',
  right: 'mr'
}
const HEADINGS = {
  h1: {
    tag: 'h1',
    indentSpace: 0
  },
  h2: {
    tag: 'h2',
    indentSpace: 4
  },
  h3: {
    tag: 'h3',
    indentSpace: 8
  }
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
      HEADINGS,
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
    this.assignHeadingsToActivateOnIntersection()
  },
  methods: {
    addAsHeadingToHeadingsMap(headingElement: Element) {
      let heading = this.getHeading(headingElement)
      if (heading.id) {
        this.$set(this.headingsMap, heading.id, heading)
      }
    },
    breakDownHeadingsIntoSections() {
      let section = '' as Heading['section']
      this.headingElements.forEach((headingElement: Element) => {
        let { id, tagName } = this.getHeading(headingElement)
        if (id) {
          if (tagName === HEADINGS.h1.tag) {
            section = id
          }
          this.headingsMap[id].section = section
        }
      })
    },
    assignHeadingsToActivateOnIntersection() {
      let headingStack = [] as Heading['headingsToActivate']
      let previousLevel = 0
      this.headingElements.forEach((headingElement: Element) => {
        let { id, tagName } = this.getHeading(headingElement)
        if (id) {
          let currentLevel = this.getHeadingLevel(tagName)
          if (previousLevel >= currentLevel) {
            for (let i = 0; i <= previousLevel - currentLevel; i++) {
              headingStack.pop()
            }
          }
          headingStack.push(id)
          previousLevel = this.getHeadingLevel(tagName)
          this.headingsMap[id].headingsToActivate.push(id, ...headingStack)
        }
      })
    },
    onElementObserved(entries: IntersectionObserverEntry[]) {
      entries.forEach(({ target, isIntersecting }: IntersectionObserverEntry) => {
        let { id } = this.getHeading(target)
        if (id && isIntersecting) {
          this.activeHeading = this.headingsMap[id]
        }
      })
    },
    getHeading(headingElement: Element): Heading {
      return {
        id: headingElement.getAttribute('id'),
        text: headingElement.textContent,
        tagName: headingElement.tagName.toLowerCase(),
        section: '',
        headingsToActivate: []
      }
    },
    getHeadingLevel(tagName: Heading['tagName']): number {
      return parseInt(tagName.charAt(tagName.length - 1))
    },
    isHeadingActive({ id }: Heading): boolean {
      return this.activeHeading.headingsToActivate
        ? this.activeHeading.headingsToActivate.includes(id)
        : false
    },
    isHeadingVisible({ tagName, section }: Heading): boolean {
      if (tagName === HEADINGS.h1.tag) {
        return true
      }
      return this.activeHeading.id
        ? this.headingsMap[this.activeHeading.id].section === section
        : false
    }
  }
}
</script>
