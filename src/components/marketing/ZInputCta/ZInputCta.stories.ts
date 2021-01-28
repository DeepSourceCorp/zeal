import ZInputCta from './ZInputCta.vue'

export default {
  title: 'Zeal Marketing/Input Cta',
  component: ZInputCta,
  excludeStories: /.*Data$/
}

export const Basic = () => ({
  components: { ZInputCta },
  template: `<div class='padded-container'>
      <z-input-cta class="w-1/3" placeholder="Enter email address" v-model="name"></z-input-cta>
    </div>`
})

