import ZTestimonials from './ZTestimonials.vue'
import ZTestimonial from '../../ZTestimonial'

const testimonials = [
  {
    customer: 'Dgraph',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: 'https://i.imgur.com/ISsHpNY.png',
    url: ''
  },
  {
    customer: 'Intel',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: 'https://i.imgur.com/PYEc7bZ.png',
    url: ''
  },
  {
    customer: 'Qubole',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: 'https://i.imgur.com/GQjbpeq.png',
    url: ''
  },
  {
    customer: 'Okteto',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: 'https://i.imgur.com/oqlV3mB.png',
    url: ''
  },
  {
    customer: 'Slack',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: 'https://i.imgur.com/ifq7pvm.png',
    url: ''
  },
]

export default {
  title: 'Zeal Marketing/Testimonials Section',
  component: ZTestimonials,
  excludeStories: /.*Data$/
}

export const Basic = () => ({
  components: { ZTestimonials, ZTestimonial },
  data() {
    return {
      testimonials
    }
  },
  template: `<div class='p-32'>
      <z-testimonials :testimonials="testimonials" :timing="10000">
        <h2 slot="heading">What developers say</h2>
      </z-testimonials>
    </div>`
})
