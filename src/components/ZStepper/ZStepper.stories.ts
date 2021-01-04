import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZStepper from './ZStepper.vue'
import ZStep from './ZStep.vue'

export default {
  title: 'Stepper',
  component: ZStepper,
  excludeStories: /.*Data$/
}

export const DefaultStepper = () => ({
  components: { ZStepper, ZStep },
    template: `<div class="container">
        <z-stepper>
            <z-step name="Step 1" :active="true">1</z-step>
            <z-step name="Step 2">2</z-step>
            <z-step name="Step 3">3</z-step>
        </z-stepper>
    </div>`
})
