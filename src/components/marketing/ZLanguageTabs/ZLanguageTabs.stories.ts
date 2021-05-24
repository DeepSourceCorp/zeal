import '../../../assets/css/tailwind.css'
import '../../../assets/css/typography.css'
import '../../../assets/css/layout.css'
import ZLanguageTabs from './ZLanguageTabs.vue'
import ZLanguageTabItem from './ZLanguageTabItem'
import ZLanguageTabList from './ZLanguageTabList'
import ZLanguageTabPane from './ZLanguageTabPane'
import ZLanguageTabPanes from './ZLanguageTabPanes'

export default {
  title: 'Zeal Marketing/Language Tabs',
  component: ZLanguageTabs,
  excludeStories: /.*Data$/
}

const data = [
  {
    language: 'python',
    issues: [
      {
        title: 'Access to a protected member _text of a client class',
        type: 'bug risk',
        image: 'https://imgur.com/D7oIGlc.png'
      },
      {
        title: 'Audit required: Insecure hash function',
        type: 'security',
        image: 'https://imgur.com/D7oIGlc.png'
      },
      {
        title: 'Lines not covered in tests',
        type: 'coverage',
        image: 'https://imgur.com/D7oIGlc.png'
      },
      {
        title: 'Exception caught is very general',
        type: 'anti-pattern',
        image: 'https://imgur.com/D7oIGlc.png'
      }
    ]
  },
  {
    language: 'docker',
    issues: [
      {
        title: 'Access to a protected member _text of a client class',
        type: 'style',
        image: 'https://imgur.com/D7oIGlc.png'
      },
      {
        title: 'Audit required: Insecure hash function',
        type: 'type check',
        image: 'https://imgur.com/D7oIGlc.png'
      },
      {
        title: 'Lines not covered in tests',
        type: 'performance',
        image: 'https://imgur.com/D7oIGlc.png'
      },
      {
        title: 'Exception caught is very general',
        type: 'documentation',
        image: 'https://imgur.com/D7oIGlc.png'
      }
    ]
  },
  {
    language: 'ruby',
    issues: [
      {
        title: 'Access to a protected member _text of a client class',
        type: 'anti-pattern',
        image: 'https://imgur.com/D7oIGlc.png'
      },
      {
        title: 'Audit required: Insecure hash function',
        type: 'performance',
        image: 'https://imgur.com/D7oIGlc.png'
      },
      {
        title: 'Lines not covered in tests',
        type: 'style',
        image: 'https://imgur.com/D7oIGlc.png'
      },
      {
        title: 'Exception caught is very general',
        type: 'documentation',
        image: 'https://imgur.com/D7oIGlc.png'
      }
    ]
  },
  {
    language: 'javascript',
    issues: [
      {
        title: 'Access to a protected member _text of a client class',
        type: 'bug risk',
        image: 'https://imgur.com/D7oIGlc.png'
      },
      {
        title: 'Audit required: Insecure hash function',
        type: 'security',
        image: 'https://imgur.com/D7oIGlc.png'
      },
      {
        title: 'Lines not covered in tests',
        type: 'coverage',
        image: 'https://imgur.com/D7oIGlc.png'
      },
      {
        title: 'Exception caught is very general',
        type: 'anti-pattern',
        image: 'https://imgur.com/D7oIGlc.png'
      }
    ]
  }
]

export const Default = () => ({
  components: {
    ZLanguageTabs,
    ZLanguageTabItem,
    ZLanguageTabList,
    ZLanguageTabPanes,
    ZLanguageTabPane
  },
  data() {
    return {
      data
    }
  },
  template: `<div class='padded-container bg-gradient-dark-dawn bg-cover bg-no-repeat'>
              <z-language-tabs>
                <z-language-tab-list class="mb-20">
                  <z-language-tab-item v-for="(item, index) in data" :key="index" :lang="item.language"></z-language-tab-item>
                </z-language-tab-list>
                <z-language-tab-panes class="p-4 bg-ink-400 rounded-lg shadow-lg">
                  <z-language-tab-pane v-for="(item, index) in data" :key="index" :issues="item.issues"></z-language-tab-pane>
                </z-language-tab-panes>
              </z-language-tabs>
      </div>`
})
