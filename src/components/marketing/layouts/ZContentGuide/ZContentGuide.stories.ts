import ZContentGuide from './ZContentGuide.vue'

export default {
  title: 'Zeal Marketing/Content Layouts',
  component: ZContentGuide,
  excludeStories: /.*Data$/
}

export const Guide = () => ({
  components: { ZContentGuide },
  template: `<div class='padded-container bg-dark'>
      <z-content-guide
        title="Ornare id libero vel leo tincidunt semper."
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices consequat id mauris condimentum libero. Ipsum feugiat gravida ultrices proin purus accumsan ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices consequat id mauris condimentum libero. Ipsum feugiat gravida ultrices proin purus accumsan ac."
        page-label="Guide"
        author="John Doe Williams"
        author-image="https://randomuser.me/api/portraits/men/35.jpg"
        date="February 29, 2020"
        previous-page-text="Back to all guides"
        previous-page-link="https://google.com"
      >
      <p>When writing code, it’s hardly sometimes that our code executes successfully in the first run. And then, after every execution failure of the code, we dive into the error log to find where the bug resides. Unfortunately, we end up spending more time on resolving bugs than what is actually needed. And this has been really common in the case of JavaScript.</p>
      <p>As developers, we ensure code quality with the help of unit and functional testing. We can complement these test plans with <a href="https://deepsource.io/glossary/static-analysis/" target="_blank">static analysis</a> through which we can now check the code before its execution to assess its quality and its adherence to coding standards. Static analysis helps us find the issues in our code that we humans can’t always spot by ourselves and thus, ensures code quality throughout the project along with maintaining developer efficiency.</p>
      <p>Today, we are really excited to launch continuous static analysis for JavaScript, detecting 470+ issues, like bug risks, anti-patterns, performance and style issues.</p>
      <h2 id="supported-frameworks-and-language-standards">Supported Frameworks and Language Standards</h2>
      <ul>
        <li>All the versions of ECMAScript (ES3, ES5, ES2015 - ES2020)</li>
        <li>React JSX</li>
        <li>TypeScript</li>
        <li>All major module systems ( CommonJS, ES modules and AMD)</li>
        <li>Popular JavaScript style guides (<a href="https://github.com/airbnb/javascript" target="_blank">Airbnb</a>, <a href="https://google.github.io/styleguide/jsguide.html" target="_blank">Google</a> and <a href="https://github.com/standard/standard" target="_blank">Standard</a>)</li>
      </ul>
      <h2 id="eslint-rules--plugins">ESLint Rules &amp; Plugins</h2>
      <p>DeepSource JavaScript analyzer fully supports all the ESLint core JavaScript rules and is 100% ESLint compatible. Along with that, it currently supports the following ESLint plugins :</p>
      <ul>
        <li><strong>Node.js</strong>
          <ul>
            <li><a href="https://github.com/mysticatea/eslint-plugin-node" target="_blank">eslint-plugin-node</a></li>
          </ul>
        </li>
        <li><strong>TypeScript</strong>
          <ul>
            <li><a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin" target="_blank">@typescript-eslint/eslint-plugin</a></li>
          </ul>
        </li>
        <li><strong>React</strong>
          <ul>
            <li><a href="https://github.com/yannickcr/eslint-plugin-react" target="_blank">eslint-plugin-react</a></li>
          </ul>
        </li>
      </ul>
      <p>We are working to add support for more plugins in order to improve the analysis further.</p>
      <h2 id="using-the-javascript-analyzer">Using the JavaScript analyzer</h2>
      <p>To start analyzing your JavaScript code, <a href="https://deepsource.io/docs/quickstart/create-account.html" target="_blank">create an account on DeepSource</a>, enable the <code>javascript</code> analyzer in your <code>.deepsource.toml</code> file, and activate analysis.</p>
      <h3 id="sample-configuration-deepsourcetoml">Sample Configuration (.deepsource.toml)</h3>
      <div class="highlight">
        <pre class="chroma"><code class="language-toml" data-lang="toml"><span class="nx">version</span> <span class="p">=</span> <span class="mi">1</span>
    
    <span class="nx">test_patterns</span> <span class="p">=</span> <span class="p">[</span><span class="s2">"*/test/**"</span><span class="p">]</span>
    
    <span class="nx">exclude_patterns</span> <span class="p">=</span> <span class="p">[</span>
        <span class="s2">"public/**,"</span><span class="p">,</span>
        <span class="s2">"dist/**"</span>
    <span class="p">]</span>
    
    <span class="p">[[</span><span class="nx">analyzers</span><span class="p">]]</span>
    <span class="nx">name</span> <span class="p">=</span> <span class="s2">"javascript"</span>
    <span class="nx">enabled</span> <span class="p">=</span> <span class="kc">true</span>
    
      <span class="p">[</span><span class="nx">analyzers</span><span class="p">.</span><span class="nx">meta</span><span class="p">]</span>
      <span class="nx">ecma_version</span> <span class="p">=</span> <span class="s2">"2016"</span>
      <span class="nx">module_system</span> <span class="p">=</span> <span class="s2">"commonjs"</span>
      <span class="nx">environment</span> <span class="p">=</span> <span class="p">[</span>
        <span class="s2">"nodejs"</span><span class="p">,</span>
        <span class="s2">"browser"</span><span class="p">,</span>
        <span class="s2">"jest"</span><span class="p">,</span>
      <span class="p">]</span>
    
      <span class="nx">plugins</span> <span class="p">=</span> <span class="p">[</span><span class="s2">"react"</span><span class="p">]</span>
      <span class="nx">style_guide</span> <span class="p">=</span> <span class="s2">"airbnb"</span>
      <span class="nx">dialect</span> <span class="p">=</span> <span class="s2">"typescript"</span>
    </code></pre>
      </div>
      <p>Here’s a few issues detected by the analyzer:</p>
      <h3 id="bug-risks">Bug-risks</h3>
      <ol>
        <li>
          <p><strong>Debugger should not be used in production code</strong></p>
          <p>The <code>debugger</code> statement is used to tell the executing JavaScript environment to stop execution and start up a debugger at the current point in the code. Having</p>
          <p>it in the production code can stop the browser from executing code and opens an appropriate debugger.</p>
          <p>Example :</p>
          <div class="highlight">
            <pre class="chroma"><code class="language-js" data-lang="js"><span class="kd">function</span> <span class="nx">isTruthy</span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">{</span>
        <span class="kr">debugger</span><span class="p">;</span>
        <span class="k">return</span> <span class="nb">Boolean</span><span class="p">(</span><span class="nx">x</span><span class="p">);</span>
    <span class="p">}</span>
    </code></pre>
          </div>
        </li>
        <li>
          <p><strong>Prevent reassigning function declarations</strong></p>
          <p>Overwriting/Reassigning a function is often indicative of a mistake or issue. It can cause bugs in the code at runtime.</p>
          <p>Example :</p>
          <div class="highlight">
            <pre class="chroma"><code class="language-js" data-lang="js"><span class="kd">function</span> <span class="nx">foo</span><span class="p">()</span> <span class="p">{}</span>
    <span class="nx">foo</span> <span class="o">=</span> <span class="nx">bar</span><span class="p">;</span>
    
    <span class="kd">function</span> <span class="nx">foo</span><span class="p">()</span> <span class="p">{</span>
        <span class="nx">foo</span> <span class="o">=</span> <span class="nx">bar</span><span class="p">;</span>
    <span class="p">}</span>
    </code></pre>
          </div>
        </li>
        <li>
          <p><strong>Using constant condition in conditional statements</strong></p>
          <p>A constant expression (for example, a literal) as a test condition might be a typo or development trigger for a specific behavior. It may break the code during the runtime.</p>
          <p>Example :</p>
          <div class="highlight">
            <pre class="chroma"><code class="language-js" data-lang="js"><span class="k">if</span> <span class="p">(</span><span class="kc">false</span><span class="p">)</span> <span class="p">{</span>
        <span class="nx">doSomethingUnfinished</span><span class="p">();</span>
    <span class="p">}</span>
    
    <span class="k">if</span> <span class="p">(</span><span class="k">void</span> <span class="nx">x</span><span class="p">)</span> <span class="p">{</span>
        <span class="nx">doSomethingUnfinished</span><span class="p">();</span>
    <span class="p">}</span>
    
    <span class="k">do</span> <span class="p">{</span>
        <span class="nx">doSomethingForever</span><span class="p">();</span>
    <span class="p">}</span> <span class="k">while</span> <span class="p">(</span><span class="nx">x</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">);</span>
    </code></pre>
          </div>
        </li>
      </ol>
      <h3 id="anti-patterns">Anti-patterns</h3>
      <ol>
        <li>
          <p><strong>Prefer the usage of <code>===</code> and <code>!==</code> instead of <code>==</code> and <code>!=</code></strong></p>
          <p>It is considered good practice to use the type-safe equality operators <code>===</code> and <code>!==</code> instead of their regular counterparts <code>==</code> and <code>!=</code>. For instance, these statements which ideally should be false are</p>
          <p>considered true :</p>
          <div class="highlight">
            <pre class="chroma"><code class="language-js" data-lang="js"><span class="p">[]</span> <span class="o">==</span> <span class="kc">false</span>
    <span class="p">[]</span> <span class="o">==</span> <span class="o">!</span><span class="p">[]</span>
    <span class="mi">3</span> <span class="o">==</span> <span class="s2">"03"</span>
    </code></pre>
          </div>
        </li>
        <li>
          <p><strong>Prevent the usage of <code>alert</code></strong></p>
          <p>JavaScript’s <code>alert</code>, <code>confirm</code>, and <code>prompt</code> functions are widely considered to be obtrusive as UI elements and should not be used in production code. They should be replaced by a custom implementation.</p>
          <p>Example :</p>
          <div class="highlight">
            <pre class="chroma"><code class="language-js" data-lang="js"><span class="nx">alert</span><span class="p">(</span><span class="s2">"here!"</span><span class="p">);</span>
    
    <span class="nx">confirm</span><span class="p">(</span><span class="s2">"Are you sure?"</span><span class="p">);</span>
    
    <span class="nx">prompt</span><span class="p">(</span><span class="s2">"What's your name?"</span><span class="p">,</span> <span class="s2">"John Doe"</span><span class="p">);</span>
    
    <span class="nx">should</span> <span class="nx">be</span> <span class="nx">replaced</span> <span class="nx">by</span> <span class="o">-</span>
    
    <span class="nx">customalert</span><span class="p">(</span><span class="s2">"here!"</span><span class="p">)</span>
    
    <span class="nx">customconfirm</span><span class="p">(</span><span class="s2">"Are you sure?"</span><span class="p">)</span>
    
    <span class="nx">customprompt</span><span class="p">(</span><span class="s2">"What's your name?"</span><span class="p">,</span> <span class="s2">"John Doe"</span><span class="p">)</span>
    </code></pre>
          </div>
        </li>
        <li>
          <p><strong>Prevent the usage of <code>new</code> for Side Effects</strong></p>
          <p>We use <code>new</code> with a constructor to create an object of a particular type and store that object in a variable, such as:</p>
          <p><code>var car = new Car();</code></p>
          <p>It is of no use to use <code>new</code> like this :</p>
          <p><code>new Car();</code></p>
          <p>In this case, the created object is thrown away because its reference isn’t stored anywhere</p>
        </li>
      </ol>
      <h3 id="security">Security</h3>
      <ol>
        <li>
          <p><strong>Prevent the usage of <code>eval</code></strong></p>
          <p>JavaScript’s <code>eval()</code> function is potentially dangerous and is often misused. Using <code>eval()</code> on untrusted code can open a program up to several different injection attacks. The use of <code>eval()</code> in most contexts can be substituted for a better, alternative approach to a problem.</p>
          <p>Example :</p>
          <div class="highlight">
            <pre class="chroma"><code class="language-js" data-lang="js"><span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">x</span><span class="o">:</span> <span class="s2">"foo"</span> <span class="p">},</span>
        <span class="nx">key</span> <span class="o">=</span> <span class="s2">"x"</span><span class="p">,</span>
        <span class="nx">value</span> <span class="o">=</span> <span class="nb">eval</span><span class="p">(</span><span class="s2">"obj."</span> <span class="o">+</span> <span class="nx">key</span><span class="p">);</span>
    </code></pre>
          </div>
        </li>
        <li>
          <p><strong>Prevent the usage of Script URLs</strong></p>
          <p>Using javascript: URLs is considered by some as a form of <code>eval</code>. Code passed in javascript: URLs has to be parsed and evaluated by the browser in the same way that <code>eval</code> is processed. Also, assembling javascript: URLs (or other strings that contain source code) is a tricky task which is prone to XSS vulnerabilities.</p>
          <p>Example :</p>
          <div class="highlight">
            <pre class="chroma"><code class="language-js" data-lang="js"><span class="nx">location</span><span class="p">.</span><span class="nx">href</span> <span class="o">=</span> <span class="s2">"javascript:void(0)"</span><span class="p">;</span>
    </code></pre>
          </div>
        </li>
        <li>
          <p><strong>Prevent the usage of <code>implied-eval</code></strong></p>
          <p>Try to eliminate implied <code>eval()</code> through the use of <code>setTimeout()</code>, <code>setInterval()</code> or <code>execScript()</code>. As such, it will warn when either function is used with a string as the first argument.</p>
          <p>Example :</p>
          <div class="highlight">
            <pre class="chroma"><code class="language-js" data-lang="js"><span class="nx">setTimeout</span><span class="p">(</span><span class="s2">"alert('Hi!');"</span><span class="p">,</span> <span class="mi">100</span><span class="p">);</span>
    
    <span class="nx">setInterval</span><span class="p">(</span><span class="s2">"alert('Hi!');"</span><span class="p">,</span> <span class="mi">100</span><span class="p">);</span>
    
    <span class="nx">execScript</span><span class="p">(</span><span class="s2">"alert('Hi!')"</span><span class="p">);</span>
    
    <span class="nx">can</span> <span class="nx">be</span> <span class="nx">replaced</span> <span class="nx">by</span> <span class="o">:</span>
    
    <span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
        <span class="nx">alert</span><span class="p">(</span><span class="s2">"Hi!"</span><span class="p">);</span>
    <span class="p">},</span> <span class="mi">100</span><span class="p">);</span>
    
    <span class="nx">setInterval</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
        <span class="nx">alert</span><span class="p">(</span><span class="s2">"Hi!"</span><span class="p">);</span>
    <span class="p">},</span> <span class="mi">100</span><span class="p">);</span>
    </code></pre>
          </div>
        </li>
      </ol>
      <h3 id="performance">Performance</h3>
      <ol>
        <li>
          <p><strong>Detect unreachable code after <code>return</code>, <code>throw</code>, <code>continue</code>, and <code>break</code> statements</strong></p>
          <p>Because the <code>return</code>, <code>throw</code>, <code>break</code>, and <code>continue</code> statements unconditionally exit a block of code, any statements after
            them cannot be executed. Detecting and removing them helps to improve the performance of the code.</p>
          <div class="highlight">
            <pre class="chroma"><code class="language-js" data-lang="js"><span class="kd">function</span> <span class="nx">hello</span><span class="p">()</span> <span class="p">{</span>
        <span class="kd">let</span> <span class="nx">x</span> <span class="o">=</span> <span class="mi">3</span>
        <span class="k">return</span> <span class="nx">x</span>
        <span class="nx">x</span> <span class="o">=</span> <span class="mf">5.</span>&nbsp;          <span class="c1">// Never executed
    </span><span class="c1"></span>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">x</span><span class="p">).</span>&nbsp; <span class="c1">// Never executed
    </span><span class="c1"></span><span class="p">}</span>
    
    </code></pre>
          </div>
        </li>
        <li>
          <p><strong>Detect the unused variables</strong></p>
          <p>Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such variables take up space in the code and cause confusion.</p>
          <p>Example :</p>
          <div class="highlight">
            <pre class="chroma"><code class="language-js" data-lang="js"><span class="c1">// x is declared but is never used
    </span><span class="c1"></span><span class="kd">var</span> <span class="nx">x</span><span class="p">;</span>
    <span class="kd">var</span> <span class="nx">i</span><span class="p">;</span>
    <span class="k">for</span><span class="p">(</span><span class="nx">i</span><span class="o">=</span><span class="mi">1</span><span class="p">;</span><span class="nx">i</span><span class="o">&lt;=</span><span class="mi">100</span><span class="p">;</span><span class="nx">i</span><span class="o">++</span><span class="p">){</span>
        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">"Hello"</span><span class="p">);</span>
    <span class="p">}</span>
    </code></pre>
          </div>
        </li>
        <li>
          <p><strong>Detect empty function declarations and block statements</strong></p>
          <p>Empty functions can reduce readability and also end up taking up space which is of no use.
            Empty block statements, while not technically errors, usually occur due to refactoring that wasn’t completed. They can cause confusion when reading code and can affect the performance too.</p>
          <p>Example :</p>
          <div class="highlight">
            <pre class="chroma"><code class="language-js" data-lang="js"><span class="kd">function</span> <span class="nx">foo</span><span class="p">()</span> <span class="p">{}</span>
    
    <span class="kd">var</span> <span class="nx">foo</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{};</span>
    
    <span class="kd">var</span> <span class="nx">foo</span> <span class="o">=</span> <span class="p">()</span> <span class="p">=&gt;</span> <span class="p">{};</span>
    
    <span class="k">if</span> <span class="p">(</span><span class="nx">foo</span><span class="p">)</span> <span class="p">{</span>
    <span class="p">}</span>
    
    <span class="k">while</span> <span class="p">(</span><span class="nx">foo</span><span class="p">)</span> <span class="p">{</span>
    <span class="p">}</span>
    </code></pre>
          </div>
        </li>
      </ol>
      <h2 id="upcoming-releases">Upcoming releases</h2>
      <p>We’re continuously improving the analyzer and here’s a near future roadmap:</p>
      <ul>
        <li>Add support for Angular, Flow, Vue and other popular frameworks.</li>
        <li><a href="https://deepsource.io/blog/autofix-future-of-code-reviews/" target="_blank">Autofix</a> support for commonly occurred issues.</li>
        <li><a href="https://deepsource.io/blog/code-formatting-on-autopilot/" target="_blank">Automated code formatting</a> support for Prettier and Standard JS.</li>
      </ul>
      <p>We’re very excited about this release, and hope that this will help you prevent issues in your code, and make writing JavaScript even more fun! Head over to the <a href="https://deepsource.io/docs/analyzer/javascript.html" target="_blank">docs</a> or tell us what you think; Feedback/suggestions/bugs - <a href="https://discuss.deepsource.io/" target="_blank">discuss.deepsource.io</a></p>
      </z-content-guide>
    </div>`
})
