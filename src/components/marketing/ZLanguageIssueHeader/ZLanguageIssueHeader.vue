<template>
  <div
    class="flex flex-row p-4 rounded-t-lg cursor-pointer text-vanilla-100 justify-between"
    :class="{
      'bg-ink-300': open
    }"
  >
    <span class="capitalize align-middle">{{ title }}</span>
    <z-tag class="uppercase" v-if="issue && open" state="success" :icon-left="issue.icon"
      ><span class="ml-1">{{ issue.title }}</span></z-tag
    >
  </div>
</template>

<script>
import Vue from 'vue'
import ZTag from '@/components/ZTag'
const issueTypes = [
  {
    title: 'performance',
    icon: 'performance'
  },
  {
    title: 'style',
    icon: 'style'
  },
  {
    title: 'bug risk',
    icon: 'bug-risk'
  },
  {
    title: 'coverage',
    icon: 'coverage'
  },
  {
    title: 'anti-pattern',
    icon: 'antipattern'
  },
  {
    title: 'security',
    icon: 'security'
  },
  {
    title: 'type check',
    icon: 'typecheck'
  },
  {
    title: 'documentation',
    icon: 'doc'
  }
]

export default Vue.extend({
  name: 'ZLanguageIssueHeader',
  components: { ZTag },
  props: {
    title: {
      type: String,
      required: true
    },
    issueType: {
      type: String,
      required: true
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      issue: issueTypes.find(({ title }) => title === this.issueType)
    }
  }
})
</script>
