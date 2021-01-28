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

    <div class="prose prose-md max-w-none p-20">
      <h1 id="this-is-main">Some random heading to grab attention</h1>
      <p class="lead">I dont' have any money, but what I do have is a specific set of skills. Skills that can be nightmare to people like you...</p>
      <h1 id="this-is-main">Some random heading to grab attention</h1>
      <p class="lead">I dont' have any money, but what I do have is a specific set of skills. Skills that can be nightmare to people like you...</p>
    </div>

    <z-footer class="bg-gradient-dawn animate-gradient bg-400%" container="lg">
      <template slot="brand">
        <span class="flex w-20 mb-12 lg:mb-0">
          <img class="max-w-none h-8" src="https://i.imgur.com/zKLLWIr.png"/>
        </span>
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
          <z-footer-list-item hover-color="" :cursor-pointer="false">
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
        <z-footer-list type="accordion">
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

        <z-footer-list type="accordion">
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

        <z-footer-list type="accordion">
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

        <z-footer-list type="accordion">
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

        <z-footer-list class="border-b border-slate py-6">
          <template slot="heading">
            Sign up for the newsletter
          </template>
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
      
      <template slot="mobile-cta">
        <span class="flex justify-center py-8">
          <img class="w-20" src="https://i.imgur.com/3wHn03E.png"/>
          <img class="w-20" src="https://i.imgur.com/3wHn03E.png"/>
        </span>
      </template>

      <template slot="copyright">
        <span class="block text-center lg:text-left">
          © 2020, DeepSource Corp. All rights reserved.
        </span>
      </template>

      <template slot="additional-info">
        <span class="flex items-center mb-8 lg:mb-0">
          Backed by 
          <img class="ml-3 max-w-none" src="https://i.imgur.com/lnlRvjx.png"/>
        </span>
      </template>
    </z-footer>
  </div>
  `
})
