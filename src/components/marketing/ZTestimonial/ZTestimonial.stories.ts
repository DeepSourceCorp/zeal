import ZTestimonial from './ZTestimonial.vue'

export default {
  title: 'Zeal Marketing/Testimonial',
  component: ZTestimonial,
  excludeStories: /.*Data$/
}

export const Basic = () => ({
  components: { ZTestimonial },
  template: `<div class='padded-container w-1/2'>
      <z-testimonial class="bg-ink-300">
        <template slot="image">
          <img src="https://i.imgur.com/ISsHpNY.png" class="object-contain"/>
        </template>
        <template slot="body">
          DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.
        </template>
        <template slot="footer">
          Piero Molino, Senior Technology Officer
        </template>
      </z-testimonial>
    </div>`
})
