import ZAccordion from '../../src/components/ZAccordion'
import ZAccordionItem from '../../src/components/ZAccordionItem'
import ZIcon from '../../src/components/ZIcon'

import { mount } from '@vue/test-utils'

const DefaultAccordion = {
  template: `<z-accordion class="text-vanilla-100">
          <z-accordion-item title="Consistency" isOpen="true">
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
        </z-accordion>`,
  components: {
    ZAccordion,
    ZAccordionItem
  }
}

const CustomizedAccordion = {
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
    </div>`,
  data() {
    return {
      openAccordion: false,
      links: ['Documentation', 'Discourse Form', 'Learning Center', 'Blog', 'Slack User Group']
    }
  },
  components: {
    ZAccordion,
    ZAccordionItem,
    ZIcon
  }
}

describe('Accordions', () => {
  it('renders a default accordion', () => {
    let wrapper = mount(DefaultAccordion)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders a customized accordion', () => {
    let wrapper = mount(CustomizedAccordion)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
