<template>
  <ul class="group" :class="[`text-${align}`]">
    <li
      v-for="heading in headingsMap"
      :key="heading.id"
      class="leading-4 pointer-events-none group-hover:pointer-events-auto"
      :class="[`${HEADING_ALIGNMENT_CLASSES[align]}-${HEADINGS[heading.tagName].indentSpace}`]"
    >
      <div
        class="absolute left-0 -mt-2 group-hover:w-0 group-hover:opacity-0 transition-all ease-bounce"
        :class="[`w-${HEADINGS[heading.tagName].indicatorSize}`]"
      >
        <z-divider
          class="border w-full transition-colors ease-in-out"
          :class="[`${isHeadingActive(heading) ? HEADING_STATE_CLASSES.active : HEADING_STATE_CLASSES.inactive}`]"
        />
      </div>
      <div class="transform -translate-x-2.5 group-hover:translate-x-0 ease-bounce transition-transform duration-300">
        <a
          @click.prevent="scrollSmoothlyTo(heading.id)"
          class="text-xs pl-2 opacity-0 group-hover:opacity-100 transition-colors duration-300 ease-in-out line-clamp-1"
          :class="[`${isHeadingActive(heading) ? HEADING_STATE_CLASSES.active : HEADING_STATE_CLASSES.inactive}`]"
          :href="`#${heading.id}`"
        >
          {{ heading.text }}
        </a>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import smoothscroll from 'smoothscroll-polyfill'
import ZDivider from '../../ZDivider'

interface Heading {
  id: string | null
  text: string | null
  tagName: string
  block: Heading['id']
}
enum HEADING_STATE_CLASSES {
  active = 'text-vanilla-100 border-l border-juniper',
  inactive = 'text-slate hover:text-vanilla-400'
}
enum HEADING_ALIGNMENT_CLASSES {
  left = 'ml',
  right = 'mr'
}
const HEADINGS = {
  h1: {
    tag: 'h1',
    indentSpace: 0,
    indicatorSize: 10
  },
  h2: {
    tag: 'h2',
    indentSpace: 6,
    indicatorSize: 8
  },
  h3: {
    tag: 'h3',
    indentSpace: 12,
    indicatorSize: 6
  }
}

const SCROLL_SPEED_SAMPLING_DELAY = 50

export default Vue.extend({
  name: 'ZScrollSpy',
  components: {
    ZDivider
  },
  props: {
    rootId: {
      type: String,
      required: true
    },
    align: {
      type: String,
      default: 'left',
      validator: (val: string) => Object.keys(HEADING_ALIGNMENT_CLASSES).some((alignment) => alignment === val)
    },
    headingOffsetTop: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      observer: {} as IntersectionObserver,
      intersectingHeading: {} as Heading,
      activeHeading: {} as Heading,
      primaryHeadingTagName: '' as Heading['tagName'],
      headingsMap: {} as Record<string, Heading>,
      HEADINGS,
      HEADING_ALIGNMENT_CLASSES,
      HEADING_STATE_CLASSES,
      scrollPos: 0,
      scrollSpeed: 0,
      scrollSpeedInterval: 0
    }
  },
  computed: {
    headingElements(): NodeListOf<Element> {
      return document.querySelectorAll(`#${this.rootId} h1, #${this.rootId} h2, #${this.rootId} h3`)
    }
  },
  created() {
    this.observer = new IntersectionObserver(this.onElementObserved, {
      root: document.querySelector(`#${this.rootId}`),
      threshold: 1.0,
      rootMargin: '10px 0px -50% 0px'
    })
  },
  mounted() {
    this.headingElements.forEach((headingElement) => {
      this.addAsHeadingToHeadingsMap(headingElement)
      this.observer.observe(headingElement)
    })
    this.setPrimaryHeadingTagName()
    this.breakDownHeadingsIntoBlocks()
    this.setScrollMeasurementInterval()
  },
  beforeDestroy() {
    this.clearScrollMeasurementInterval()
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
          this.intersectingHeading = this.headingsMap[id]
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
    setPrimaryHeadingTagName() {
      /**
       * Sets the primary heading tagName.
       * Primary heading is the one which is present on the highest level.
       * For e.g, if `h1` is present in all headings, then `h1` is primary else `h2`.
       */
      this.primaryHeadingTagName =
        (this.headingTagNameExists(HEADINGS.h1.tag) && HEADINGS.h1.tag) ||
        (this.headingTagNameExists(HEADINGS.h2.tag) && HEADINGS.h2.tag) ||
        HEADINGS.h3.tag
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
    },
    scrollSmoothlyTo(headingId: Heading['id']) {
      const elem = headingId && document.getElementById(headingId)
      smoothscroll.polyfill()
      if (elem) {
        window.scrollTo({
          top: elem.offsetTop - this.headingOffsetTop,
          behavior: 'smooth'
        })
      }
    },
    setScrollSpeed() {
      const curPos = window.scrollY
      this.scrollSpeed = Math.abs(this.scrollPos - curPos) / SCROLL_SPEED_SAMPLING_DELAY
      this.scrollPos = window.scrollY
    },
    setScrollMeasurementInterval() {
      this.scrollSpeedInterval = setInterval(() => {
        this.setScrollSpeed()
      }, SCROLL_SPEED_SAMPLING_DELAY)
    },
    clearScrollMeasurementInterval() {
      clearInterval(this.scrollSpeedInterval)
    }
  },
  watch: {
    scrollSpeed() {
      if (this.scrollSpeed === 0) {
        this.activeHeading = this.intersectingHeading
      }
    }
  }
})
</script>
