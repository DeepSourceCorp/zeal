import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZStepper from './ZStepper.vue'
import ZStep from './ZStep.vue'
import ZButton from '../ZButton/ZButton.vue';

export default {
  title: 'Stepper',
  component: ZStepper,
  excludeStories: /.*Data$/
}

export const DefaultStepper = () => ({
  components: { ZStepper, ZStep },
    template: `<div class="container">
        <z-stepper>
            <z-step title="Step 1" description="Some description"></z-step>
            <z-step title="Step 2" description="Some description"></z-step>
            <z-step title="Step 3" description="Some description"></z-step>
        </z-stepper>
    </div>`
})

export const StepperWithDirectStatus = () => ({
  components: { ZStepper, ZStep },
    template: `<div class="container">
        <z-stepper>
            <z-step title="Step 1" description="Some description" status="completed"></z-step>
            <z-step title="Step 2" description="Some description" status="active"></z-step>
            <z-step title="Step 3" description="Some description"></z-step>
        </z-stepper>
    </div>`
})

export const StepperWithStatusFromParent = () => ({
  components: { ZStepper, ZStep, ZButton },
  template: `<div class="container">
      <z-stepper :active="2">
          <z-step title="Step 1" description="Some description"></z-step>
          <z-step title="Step 2" description="Some description"></z-step>
          <z-step title="Step 3" description="Some description"></z-step>
      </z-stepper>
  </div>`
})
