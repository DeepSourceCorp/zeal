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
import Vue from 'vue'
interface Heading {
  id: string | null
  text: string | null
  tagName: string
  block: Heading['id']
}
enum HEADING_STATE_CLASSES {
  active = 'text-vanilla-100 font-semibold',
  inactive = 'text-slate'
}
enum HEADING_ALIGNMENT_CLASSES {
  left = 'ml',
  right = 'mr'
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

export default Vue.extend({
  name: 'ZScrollSpy',
  props: {
    rootId: {
      type: String,
      required: true
    },
    align: {
      type: String,
      default: 'left',
      validator: (val: string) =>
        Object.keys(HEADING_ALIGNMENT_CLASSES).some((alignment) => alignment === val)
    }
  },
  data() {
    return {
      observer: {} as IntersectionObserver,
      activeHeading: {} as Heading,
      primaryHeadingTagName: '' as Heading['tagName'],
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
    this.headingElements.forEach((headingElement) => {
      this.addAsHeadingToHeadingsMap(headingElement)
      this.observer.observe(headingElement)
    })
    this.setPrimaryHeadingTagName()
    this.breakDownHeadingsIntoBlocks()
  },
  methods: {
    addAsHeadingToHeadingsMap(headingElement: Element) {
      /**
       * Converts a headingElement to a Heading type object and
       * adds it to headingsMap.
       */
      const heading = this.getHeading(headingElement)
      if (heading.id) {
        this.$set(this.headingsMap, heading.id, heading)
      }
    },
    breakDownHeadingsIntoBlocks() {
      /**
       * Breaks down all the headings in block categories.
       * A block is named after the primary heading's (i.e, if h1 is present then h1 else h2) id.
       */
      let block = '' as Heading['block']
      this.headingElements.forEach((headingElement: Element) => {
        const { id, tagName } = this.getHeading(headingElement)
        if (id) {
          if (tagName === this.primaryHeadingTagName) {
            block = id
          }
          this.headingsMap[id].block = block
        }
      })
    },
    onElementObserved(entries: IntersectionObserverEntry[]) {
      /**
       * Callback for Intersection Observer.
       */
      entries.forEach(({ target, isIntersecting }: IntersectionObserverEntry) => {
        const { id } = this.getHeading(target)
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
        block: ''
      }
    },
    isHeadingActive({ id }: Heading): boolean {
      /**
       * Returns true if heading passed has the same id
       * as the `activeHeading`
       */
      return this.activeHeading.id ? this.activeHeading.id === id : false
    },
    isHeadingVisible({ tagName, block }: Heading): boolean {
      /**
       * Allows to show headings if their block is currently active.
       */
      if (tagName === this.primaryHeadingTagName) {
        return true
      }
      return this.activeHeading.id ? this.headingsMap[this.activeHeading.id].block === block : false
    },
    setPrimaryHeadingTagName() {
      /**
       * Sets the primary heading tagName.
       * Primary heading is the one which is present on the highest level.
       * For e.g, if `h1` is present in all headings, then `h1` is primary else `h2`.
       */
      this.primaryHeadingTagName = this.headingTagNameExists(HEADINGS.h1.tag)
        ? HEADINGS.h1.tag
        : HEADINGS.h2.tag
    },
    headingTagNameExists(tagName: Heading['tagName']) {
      /**
       * Returns true if a tagName exists in all the headings.
       */
      let tagNameFound = false as boolean
      this.headingElements.forEach((headingElement: Element) => {
        if (headingElement.tagName.toLowerCase() === tagName) {
          tagNameFound = true
        }
      })
      return tagNameFound
    }
  }
})
</script>
