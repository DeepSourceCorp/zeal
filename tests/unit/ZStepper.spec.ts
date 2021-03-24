import ZStepper from '../../src/components/ZStepper'
import ZStep from '../../src/components/ZStep'

import { mount } from '@vue/test-utils'

const Stepper = {
  template: `<z-stepper>
        <z-step title="step1"></z-step>
        <z-step title="step2"></z-step>
        <z-step title="step3"></z-step>
      </z-stepper>`,
  components: {
    ZStepper,
    ZStep
  }
}

const VerticalStepper = {
  template: `<z-stepper align="vertical" :showNumbers="true">
      <z-step title="Step 1" description="Some description"></z-step>
      <z-step title="Step 2" description="Some description"></z-step>
      <z-step title="Step 3" description="Some description"></z-step>
    </z-stepper>`,
  components: { ZStepper, ZStep }
}

const StepperWithDirectStatus = {
  template: `<z-stepper>
            <z-step title="Step 1" description="Some description" status="completed"></z-step>
            <z-step title="Step 2" description="Some description" status="active"></z-step>
            <z-step title="Step 3" description="Some description"></z-step>
        </z-stepper>`,
  components: {
    ZStepper,
    ZStep
  }
}

const StepperWithStatusFromParent = {
  template: `<z-stepper :active="2">
          <z-step title="Step 1" description="Some description"></z-step>
          <z-step title="Step 2" description="Some description"></z-step>
          <z-step title="Step 3" description="Some description"></z-step>
      </z-stepper>`,
  components: {
    ZStepper,
    ZStep
  }
}

describe('ZStepper', () => {
  it('renders a default stepper component', () => {
    const wrapper = mount(Stepper)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('.z-step').length).toEqual(3)
  })
  it('renders a vertical stepper component', () => {
    const wrapper = mount(VerticalStepper)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('.z-step').length).toEqual(3)
  })
  it('renders a stepper component with status from the Step', () => {
    const wrapper = mount(StepperWithDirectStatus)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('renders a stepper component with status passed from the Parent Component', () => {
    const wrapper = mount(StepperWithStatusFromParent)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
