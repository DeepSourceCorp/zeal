import PrimaryButton from '../components/PrimaryButton.vue'

//import addons
import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'

storiesOf('Button|Primary', module)
  .add('default', () => ({
    components: { PrimaryButton },
    template: '<primary-button title="Default button"></primary-button>'
  }))
  .add('withRightIcon', () => ({
    components: { PrimaryButton },
    template: '<primary-button title="Right icon"></primary-button>'
  }))
  .add('withLeftIcon', () => ({
    components: { PrimaryButton },
    template: '<primary-button title="Left icon"></primary-button>'
  }))

storiesOf('Button|Secondary', module)
  .add('default', () => ({
    template:
      '<button class="text-juniper border border-juniper leading-8 font-normal py-2 px-4 rounded-sm">Default button</button>'
  }))
  .add('withRightIcon', () => ({
    components: { PrimaryButton },
    template:
      '<button class="text-juniper border border-juniper leading-8 font-normal py-2 px-4 rounded-sm">Right icon</button>'
  }))
  .add('withLeftIcon', () => ({
    components: { PrimaryButton },
    template:
      '<button class="text-juniper border border-juniper leading-8 font-normal py-2 px-4 rounded-sm">Left icon</button>'
  }))
