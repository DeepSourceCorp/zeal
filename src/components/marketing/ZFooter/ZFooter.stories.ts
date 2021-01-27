import ZFooter from './ZFooter.vue'
import ZButton from '../../ZButton'

export default {
  title: 'Zeal Marketing/Footer',
  component: ZFooter,
  excludeStories: /.*Data$/,
  parameters: {
    layout: 'fullscreen'
  }
}

export const Basic = () => ({
  components: { ZFooter, ZButton },
  template: `<div class='h-screen'>

    <z-footer class="bg-gradient-skeleton">
      <template slot="brand">
        <img class="max-w-none" src="https://i.imgur.com/zKLLWIr.png"/>
      </template>

      <template slot="desktop-menu">
        <ul class="flex">
          <li class="mx-2">Link</li>
          <li class="mx-2">Link</li>
          <li class="mx-2">Link</li>
        </ul>
      </template>
      
      <template slot="desktop-cta">
        <img class="max-w-none" src="https://i.imgur.com/3wHn03E.png"/>
        <img class="max-w-none" src="https://i.imgur.com/3wHn03E.png"/>
      </template>
      
      <template slot="mobile-menu">
        <ul>
          <li class="mx-2">Link</li>
          <li class="mx-2">Link</li>
          <li class="mx-2">Link</li>
        </ul>
      </template>
      
      <template slot="mobile-cta">
        <img class="max-w-none" src="https://i.imgur.com/3wHn03E.png"/>
        <z-button class="mb-4" color="secondary" type="link" to="https://deepsource.io/">Log in</z-button>
      </template>

      <template slot="copyright">
        © 2020, DeepSource Corp. All rights reserved.
      </template>

      <template slot="additional-info">
        <span class="flex items-center">
          Backed by 
          <img class="ml-3 max-w-none" src="https://i.imgur.com/lnlRvjx.png"/>
        </span>
      </template>
    </z-footer>
  </div>
  `
})