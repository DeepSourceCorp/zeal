<template>
  <div class="flex">
    <z-button button-type="secondary" :icon="icon" size="small">
      {{ label }}
    </z-button>

    <div class="border-l">
      <z-menu size="small">
        <template v-slot:trigger="{ toggle }">
          <z-button button-type="secondary" icon="chevron-down" size="small" @click="toggle" />
        </template>

        <template #body>
          <z-menu-item as="button" icon="github" @click="createIssue('github')">Create an issue on GitHub</z-menu-item>
          <z-menu-item as="button" icon="gitlab" @click="createIssue('gitlab')">Create an issue on GitLab</z-menu-item>
        </template>
      </z-menu>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import ZButton from '../ZButton/ZButton.vue'
import ZMenu from '../ZMenu/ZMenu.vue'
import ZMenuItem from '../ZMenu/ZMenuItem'

export default Vue.extend({
  name: 'ZSplitButtonDropdown',
  components: {
    ZButton,
    ZMenu,
    ZMenuItem
  },
  props: {},
  data() {
    return {
      icon: 'github',
      label: 'Create an issue on GitHub'
    }
  },
  methods: {
    createIssue(vcsProvider) {
      switch (vcsProvider) {
        case 'github':
          this.icon = 'github'
          this.label = 'Create an issue on GitHub'
          window.open('https://github.com', '_blank')
          break
        case 'gitlab':
          this.icon = 'gitlab'
          this.label = 'Create an issue on GitLab'
          window.open('https://gitlab.com', '_blank')
          break
      }
    }
  }
})
</script>
