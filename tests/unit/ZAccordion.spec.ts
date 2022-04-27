import ZAccordion from '../../src/components/ZAccordion'
import ZAccordionItem from '../../src/components/ZAccordionItem'
import ZIcon from '../../src/components/ZIcon'

import '../../src/components/ZAccordion/ZAccordionItemMaxHeightStyle.css'

import { mount } from '@vue/test-utils'

const DefaultAccordion = {
  template: `<z-accordion class="text-vanilla-100">
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

const AccordionSpanningFullHeight = {
  template: `<div class='padded-container input-container'>
  <z-accordion class="text-vanilla-100">
    <z-accordion-item :is-open="true" :span-custom-height="true" custom-max-height="max-h-item" title="Span full height" class="p-4">
      <p>Anim aliqua duis anim dolor ea deserunt. Consectetur aliqua labore aliquip fugiat laborum culpa adipisicing irure. Et ipsum deserunt incididunt pariatur ullamco fugiat deserunt eiusmod sit labore irure. Excepteur sint Lorem occaecat pariatur culpa fugiat eiusmod Lorem quis voluptate dolore eiusmod cupidatat est. Et quis aute eu et tempor culpa duis amet ea elit sunt. Culpa incididunt consectetur anim voluptate et.</p>
      <br />
      
      <p>Lorem irure esse reprehenderit tempor. Nisi enim commodo Lorem qui commodo officia ad ex ex. Voluptate deserunt sit et et. Irure eiusmod minim Lorem ex. Consectetur sint dolore in ullamco ad.</p>
      <br/>
      
      <p>Sint voluptate in amet id. Consequat sit aute nostrud qui velit elit sunt reprehenderit elit enim non tempor aliqua occaecat. Aute quis amet nostrud dolore sunt. Commodo proident sit aliqua dolor exercitation officia anim consequat culpa exercitation dolore amet laborum. Dolor est minim do do Lorem consectetur occaecat eu officia commodo nostrud. Exercitation irure dolore deserunt laborum consectetur ad duis sunt consectetur magna elit adipisicing.</p>
      <br />
      
      <p>Velit sit voluptate tempor esse magna sint duis esse tempor. Non enim cillum incididunt irure do nisi veniam ut proident in cupidatat. Minim proident occaecat ad elit. Tempor commodo excepteur amet ad anim consectetur. Eu velit exercitation ex incididunt deserunt nisi labore consequat incididunt nostrud qui elit tempor. Pariatur aute reprehenderit dolor tempor excepteur adipisicing in. Eu culpa non est voluptate duis id.</p>
      <br />
      
      <p>Commodo incididunt aliquip duis anim id et nisi consequat. Labore ipsum do non aliqua culpa culpa laboris sint sunt laborum ad est ea. Consequat dolor nisi ut est proident veniam voluptate.</p>
    </z-accordion-item>
  </z-accordion>
  </div>`,
  components: { ZAccordion, ZAccordionItem }
}

describe('Accordions', () => {
  it('renders a default accordion', () => {
    const wrapper = mount(DefaultAccordion)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders a customized accordion', () => {
    const wrapper = mount(CustomizedAccordion)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders an accordion spanning full height', () => {
    const wrapper = mount(AccordionSpanningFullHeight)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
