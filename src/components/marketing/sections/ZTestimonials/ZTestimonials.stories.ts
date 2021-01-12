import ZTestimonials from './ZTestimonials.vue'
import ZTestimonial from '../../ZTestimonial'

const testimonials = [
  {
    customer: 'Slack',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: 'https://i.imgur.com/Cf5BpLU.png',
    url: ''
  },
  {
    customer: 'Dgraph',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: 'https://i.imgur.com/gTQDOHe.png',
    url: ''
  },
  {
    customer: 'Okteto',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: 'https://i.imgur.com/4tgH69m.png',
    url: ''
  },
  {
    customer: 'Qubole',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: 'https://i.imgur.com/Sh6rAta.png',
    url: ''
  },
  {
    customer: 'Intel',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: 'https://i.imgur.com/uvfWLnd.png',
    url: ''
  }
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
  template: `<div class='padded-container'>
      <z-testimonials :testimonials="testimonials">
        <h2 slot="heading">What developers say</h2>
      </z-testimonials>
    </div>`
})
