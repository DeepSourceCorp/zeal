import ZIssueDisplay from './ZIssueDisplay.vue'

export default {
  title: 'Zeal Marketing/Issue display section',
  component: ZIssueDisplay,
  excludeStories: /.*Data$/,
  parameters: {
    layout: 'fullscreen'
  }
}

export const Basic = () => ({
  components: { ZIssueDisplay },
  data() {
    return {
      analyzers
    }
  },
  template: `<div class="bg-gradient-galaxy">
      
      <z-issue-display :analyzers="analyzers"></z-issue-display>
      
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
      </div>
    </div>`
})

const analyzers = [{
  "name": "python",
  "label": "Python",
  "image": "https://i.imgur.com/YM84f5U.png",
  "active": false
}, {
  "name": "go",
  "label": "Go",
  "image": "https://i.imgur.com/YM84f5U.png",
  "active": false
}, {
  "name": "javascript",
  "label": "JavaScript",
  "image": "https://i.imgur.com/YM84f5U.png",
  "active": false
}, {
  "name": "sql",
  "label": "SQL",
  "image": "https://i.imgur.com/YM84f5U.png",
  "active": false
}, {
  "name": "docker",
  "label": "Docker",
  "image": "https://i.imgur.com/YM84f5U.png",
  "active": false
}, {
  "name": "terraform",
  "label": "Terraform",
  "image": "https://i.imgur.com/YM84f5U.png",
  "active": false
}, {
  "name": "ruby",
  "label": "Ruby",
  "image": "https://i.imgur.com/YM84f5U.png",
  "active": false
}, {
  "name": "java",
  "label": "Java",
  "image": "https://i.imgur.com/YM84f5U.png",
  "active": false
}, {
  "name": "shell",
  "label": "Shell",
  "image": "https://i.imgur.com/YM84f5U.png",
  "active": false
}]  