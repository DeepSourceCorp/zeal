import ZScrollShowcase from './ZScrollShowcase.vue'
import ZNav from '../../ZNav'
import ZNavMenu from '../../ZNavMenu'
import ZNavItem from '../../ZNavItem'
import ZNavList from '../../ZNavList'
import ZNavListItem from '../../ZNavListItem'
import ZButton from '../../../ZButton'
import ZIcon from '../../../ZIcon'
import ZScrollShowcaseItem from '../ZScrollShowcaseItem'

export default {
  title: 'Zeal Marketing/Scrolling Feature Showcase',
  component: ZScrollShowcase,
  excludeStories: /.*Data$/,
  parameters: {
    layout: 'fullscreen'
  }
}

export const Basic = () => ({
  components: { ZScrollShowcase, ZNav, ZIcon, ZButton, ZNavMenu, ZNavItem, ZNavList, ZNavListItem, ZScrollShowcaseItem },
  template: `
  <div>
  <div class="prose prose-sm sm:prose sm:max-w-none mx-auto px-10 py-10">
        <h1 id="this-is-main">Just to show off main heading</h1>
        <p class="lead">Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.</p>
        <p>By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you <em>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.</p>
        <p>We get lots of complaints about it actually, with people regularly asking us things like:</p>
        <blockquote>
          <p>Why is Tailwind removing the default styles on my <code>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?</p>
        </blockquote>
        <p>We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a <code>p</code> element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look <em>awesome</em>, not awful.</p>
        <p>The <code>@tailwindcss/typography</code> plugin is our attempt to give you what you <em>actually</em> want, without any of the downsides of doing something stupid like disabling our base styles.</p>
        <p>It adds a new <code>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:</p>
        <pre><code class="language-html">&lt;article class="prose"&gt;
    &lt;h1&gt;Garlic bread with cheese: What the science tells us&lt;/h1&gt;
    &lt;p&gt;
      For years parents have espoused the health benefits of eating garlic bread with cheese to their
      children, with the food earning such an iconic status in our culture that kids will often dress
      up as warm, cheesy loaf for Halloween.
    &lt;/p&gt;
    &lt;p&gt;
      But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
      springing up around the country.
    &lt;/p&gt;
    &lt;!-- ... --&gt;
  &lt;/article&gt;</code></pre>
        <p>For more information about how to use the plugin and the features it includes, <a href="https://github.com/tailwindcss/typography/blob/master/README.md">read the documentation</a>.</p>
        <hr>
        <h2 id="what-to-expect-from-here">What to expect from here on out</h2>
        <p>What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.</p>
        <p>It's important to cover all of these use cases for a few reasons:</p>
        <ol>
          <li>We want everything to look good out of the box.</li>
          <li>Really just the first reason, that's the whole point of the plugin.</li>
          <li>Here's a third pretend reason though a list with three items looks more realistic than a list with two items.</li>
        </ol>
        <p>Now we're going to try out another header style.</p>
        <h3 id="typography-should-be-easy">Typography should be easy</h3>
        <p>So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.</p>
        <p>Something a wise person once told me about typography is:</p>
        <blockquote>
          <p>Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.</p>
        </blockquote>
        <p>It's probably important that images look okay here by default as well:</p>
      
        
        </div>

      <div class="padded-container">
        <z-scroll-showcase>
          <template slot="heading">
            Automatically create <span class="bg-gradient-ocean bg-clip-text text-transparent">pull requests with bug fixes</span>
          </template>

          <template slot="subheading">
            Identify and fix bug risks, anti-patterns, performance issues, and security flaws on every
            commit and pull request.
          </template>

          <template slot="items">
            <z-scroll-showcase-item>
              <template slot="title">
                Integrates with code review workflow
              </template>
              <template slot="description">
                with <span class="inline-flex space-x-2 align-middle"><z-icon icon="github"></z-icon> <z-icon icon="gitlab"></z-icon><z-icon icon="bitbucket"></z-icon></span>
                <span class="text-juniper">+7 more</span>
                </template>
            </z-scroll-showcase-item>
            <z-scroll-showcase-item>
              <template slot="title">
                Detect 2,000+ issues in your codebase
              </template>
              <template slot="description">
                Comprehensive analysis in <span class="inline-flex space-x-2 align-middle"><z-icon icon="python"></z-icon> <z-icon icon="ruby"></z-icon><z-icon icon="javascript"></z-icon></span>
                <p>Less than 5% false positives</p>
                </template>
            </z-scroll-showcase-item>
            <z-scroll-showcase-item>
              <template slot="title">
                Automatically format code on every commit
              </template>
              <template slot="description">
                Code formatters like <span class="inline-flex space-x-2 align-middle mr-2"> YAPF GOfmt Black</span><span class="text-juniper">+4 more</span>
                <p>Run on every commit and pull request</p>
                <p>No CI setup required</p>
                </template>
            </z-scroll-showcase-item>
          </template>

          <template slot="illustration">
            <video autoplay="" muted="" loop="" playsinline="" preload="metadata">
              <source
                src="https://assets.deepsource.io/879e7a0/videos/autofix-workflow.mp4"
                type="video/mp4"
              />
            </video>
          </template>
        </z-scroll-showcase>
      </div>


      <div class="prose prose-sm sm:prose sm:max-w-none mx-auto px-10 py-10">
        <h1 id="this-is-main">Just to show off main heading</h1>
        <p class="lead">Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.</p>
        <p>By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you <em>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.</p>
        <p>We get lots of complaints about it actually, with people regularly asking us things like:</p>
        <blockquote>
          <p>Why is Tailwind removing the default styles on my <code>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?</p>
        </blockquote>
        <p>We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a <code>p</code> element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look <em>awesome</em>, not awful.</p>
        <p>The <code>@tailwindcss/typography</code> plugin is our attempt to give you what you <em>actually</em> want, without any of the downsides of doing something stupid like disabling our base styles.</p>
        <p>It adds a new <code>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:</p>
        <pre><code class="language-html">&lt;article class="prose"&gt;
    &lt;h1&gt;Garlic bread with cheese: What the science tells us&lt;/h1&gt;
    &lt;p&gt;
      For years parents have espoused the health benefits of eating garlic bread with cheese to their
      children, with the food earning such an iconic status in our culture that kids will often dress
      up as warm, cheesy loaf for Halloween.
    &lt;/p&gt;
    &lt;p&gt;
      But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
      springing up around the country.
    &lt;/p&gt;
    &lt;!-- ... --&gt;
  &lt;/article&gt;</code></pre>
        <p>For more information about how to use the plugin and the features it includes, <a href="https://github.com/tailwindcss/typography/blob/master/README.md">read the documentation</a>.</p>
        <hr>
        <h2 id="what-to-expect-from-here">What to expect from here on out</h2>
        <p>What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.</p>
        <p>It's important to cover all of these use cases for a few reasons:</p>
        <ol>
          <li>We want everything to look good out of the box.</li>
          <li>Really just the first reason, that's the whole point of the plugin.</li>
          <li>Here's a third pretend reason though a list with three items looks more realistic than a list with two items.</li>
        </ol>
        <p>Now we're going to try out another header style.</p>
        <h3 id="typography-should-be-easy">Typography should be easy</h3>
        <p>So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.</p>
        <p>Something a wise person once told me about typography is:</p>
        <blockquote>
          <p>Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.</p>
        </blockquote>
        <p>It's probably important that images look okay here by default as well:</p>
        
        
        </div>
</div>`
})
