import '../../../assets/css/tailwind.css'
import '../../../assets/css/typography.css'
import '../../../assets/css/layout.css'
import ZLanguageTab from './ZLanguageTab.vue'
import ZIcon from '../../ZIcon/ZIcon.vue'

export default {
  title: 'Zeal Marketing/LanguageTab',
  component: ZLanguageTab,
  excludeStories: /.*Data$/
}

export const BasicTab = () => ({
  components: { ZLanguageTab, ZIcon },
  template: `<div class='padded-container'>
                <div class="gap-5 overflow-auto flex flex-nowrap">
                  <z-language-tab :isActive="true" lang="python"></z-language-tab>
                  <z-language-tab lang="docker"></z-language-tab>
                  <z-language-tab lang="ruby"></z-language-tab>
                  <z-language-tab lang="javascript"></z-language-tab>
                  <z-language-tab lang="go"></z-language-tab>
                </div>
      </div>`,
  methods: {
    clickAction() {
      alert('Clicked on Tab')
    }
  }
})
