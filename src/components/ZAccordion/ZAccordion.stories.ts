import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZAccordion from './ZAccordion.vue'
import ZAccordionItem from '@/components/ZAccordionItem/ZAccordionItem.vue'
import ZIcon from '@/components/ZIcon/ZIcon.vue'

export default {
  title: 'Accordion',
  component: ZAccordion,
  excludeStories: /.*Data$/
}

export const DefaultAccordion = () => ({
  components: { ZAccordion, ZAccordionItem },
  template: `<div class='padded-container input-container'>
        <z-accordion class="text-vanilla-100">
          <z-accordion-item title="Consistency">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
          <z-accordion-item title="Feedback">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
          <z-accordion-item title="Efficiency">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
        </z-accordion>
    </div>`
})

export const AccordionWithBaseStyle = () => ({
  components: { ZAccordion, ZAccordionItem },
  template: `<div class='padded-container input-container'>
        <z-accordion class="text-vanilla-100" :defaultStyle="true">
          <z-accordion-item title="Consistency">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
          <z-accordion-item title="Feedback">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
          <z-accordion-item title="Efficiency">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
        </z-accordion>
    </div>`
})

export const AccordionWithOpenedCards = () => ({
  components: { ZAccordion, ZAccordionItem },
  template: `<div class='padded-container input-container'>
        <z-accordion class="text-vanilla-100" :defaultStyle="true">
          <z-accordion-item title="Consistency" :is-open="true">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
          <z-accordion-item title="Feedback">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
          <z-accordion-item title="Efficiency">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
        </z-accordion>
    </div>`
})

export const AccordionWithDisabledState = () => ({
  components: { ZAccordion, ZAccordionItem },
  template: `<div class='padded-container input-container'>
        <z-accordion class="text-vanilla-100" :defaultStyle="true" :disabled="true">
          <z-accordion-item title="Consistency">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
          <z-accordion-item title="Feedback">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
          <z-accordion-item title="Efficiency">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </z-accordion-item>
        </z-accordion>
    </div>`
})

export const AccordionUsedInNavBar = () => ({
  components: { ZAccordion, ZAccordionItem },
  data() {
    return {
      links: ['Documentation', 'Discourse Form', 'Learning Center', 'Blog', 'Slack User Group']
    }
  },
  template: `<div class='padded-container input-container'>
        <z-accordion class="text-vanilla-100">
          <z-accordion-item title="Resources" class="font-medium">
            <div class="flex flex-col text-sm space-y-4 py-3">
              <a v-for="link in links" :key="link" href="#" class="hover:text-juniper transition-all duration-75 ease-in-out">{{link}}</a>
            </div>
          </z-accordion-item>
        </z-accordion>
    </div>`
})

export const AccordionUsedInHeader = () => ({
  components: { ZAccordion, ZAccordionItem, ZIcon },
  data() {
    return {
      openAccordion: false,
      links: ['Documentation', 'Discourse Form', 'Learning Center', 'Blog', 'Slack User Group']
    }
  },
  template: `<div class='padded-container flex items-center w-52'>
        <z-accordion class="text-vanilla-100 w-full">
          <z-accordion-item :is-open="openAccordion">
            <template v-slot:title="{ open, toggleAccordion }">
              <div class="flex items-center cursor-pointer w-full" @click="toggleAccordion()">
                <span class="flex-1 font-medium text-slate">Resources</span>
                <z-icon icon="chevron-right" 
                    size="small" color="slate" 
                    class="transform"
                    :class="open ? 'animate-first-quarter-spin rotate-90' : 'animate-reverse-quarter-spin rotate-0'"></z-icon>
              </div>
            </template>
            <div class="flex flex-col text-sm space-y-4 py-3">
              <a v-for="link in links" :key="link" href="#" class="hover:text-juniper transition-all duration-75 ease-in-out">{{link}}</a>
            </div>
          </z-accordion-item>
        </z-accordion>
    </div>`
})
