import ZFooter from './ZFooter.vue'
import ZFooterList from '../ZFooterList'
import ZFooterListItem from '../ZFooterListItem'
import ZIcon from '../../ZIcon'

export default {
  title: 'Zeal Marketing/Footer',
  component: ZFooter,
  excludeStories: /.*Data$/,
  parameters: {
    layout: 'fullscreen'
  }
}

export const Basic = () => ({
  components: { ZFooter, ZFooterList, ZFooterListItem, ZIcon },
  template: `<div class='h-screen'>

    <z-footer class="bg-gradient-skeleton" container="lg">
      <template slot="brand">
        <img class="max-w-none" src="https://i.imgur.com/zKLLWIr.png"/>
      </template>

      <template slot="desktop-menu">
        <z-footer-list>
          <template slot="heading">Product</template>
          <z-footer-list-item>
            Autofix
          </z-footer-list-item>
          <z-footer-list-item>
            Code formatter
          </z-footer-list-item>
          <z-footer-list-item>
            Pricing
          </z-footer-list-item>
          <z-footer-list-item>
            Security
          </z-footer-list-item>
        </z-footer-list>

        <z-footer-list>
          <template slot="heading">Languages</template>
          <z-footer-list-item>
            For Python
          </z-footer-list-item>
          <z-footer-list-item>
            For Go
          </z-footer-list-item>
          <z-footer-list-item>
            For Ruby
          </z-footer-list-item>
          <z-footer-list-item>
            For JavaScript
          </z-footer-list-item>
        </z-footer-list>

        <z-footer-list>
          <template slot="heading">Resources</template>
          <z-footer-list-item>
            Documentation
          </z-footer-list-item>
          <z-footer-list-item>
            Blog
          </z-footer-list-item>
          <z-footer-list-item>
            Changelog
          </z-footer-list-item>
          <z-footer-list-item>
            Slack user group
          </z-footer-list-item>
        </z-footer-list>

        <z-footer-list>
          <template slot="heading">Company</template>
          <z-footer-list-item>
            About
          </z-footer-list-item>
          <z-footer-list-item>
            Customers
          </z-footer-list-item>
          <z-footer-list-item>
            Jobs
          </z-footer-list-item>
          <z-footer-list-item>
            Privacy Policy
          </z-footer-list-item>
          <z-footer-list-item>
            Terms of Service
          </z-footer-list-item>
          <z-footer-list-item>
            Press Enquiries
          </z-footer-list-item>
          <z-footer-list-item>
            Brand Assets
          </z-footer-list-item>
        </z-footer-list>

        <z-footer-list class="w-64">
          <template slot="heading">Social media</template>
          <z-footer-list-item>
            Follow us on social media to stay updated.
          </z-footer-list-item>
          <span class="flex mt-1">
            <z-footer-list-item class="mr-8">
              <z-icon icon="facebook"></z-icon>
            </z-footer-list-item>
            <z-footer-list-item class="mr-8">
              <z-icon icon="linkedin"></z-icon>
            </z-footer-list-item>
            <z-footer-list-item>
              <z-icon icon="mail"></z-icon>
            </z-footer-list-item>
          </span>
        </z-footer-list>
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
