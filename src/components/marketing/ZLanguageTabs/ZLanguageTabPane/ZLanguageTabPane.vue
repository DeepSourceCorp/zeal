<template>
  <div class="z-tab-pane p-4" :key="Math.random().toString(36).substring(7)">
    <div>
      <z-accordion class="text-vanilla-100">
        <z-accordion-item
          class="rounded-lg"
          v-for="(issue, index) in issues"
          :key="index"
          :is-open="index === 0"
        >
          <template v-slot:title="{ toggleAccordion, open }">
            <div @click="toggleAccordion()">
              <z-language-issue-header
                :open="open"
                :title="issue.title"
                :issueType="issue.type"
              ></z-language-issue-header>
            </div>
          </template>
          <div class="border-2 border-t-0 border-ink-200 rounded-b-lg">
            <img :src="issue.image" />
          </div>
        </z-accordion-item>
      </z-accordion>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import ZAccordionItem from '@/components/ZAccordionItem'
import ZAccordion from '@/components/ZAccordion'
import ZLanguageIssueHeader from '@/components/marketing/ZLanguageIssueHeader'

export default {
  name: 'ZLanguageTabPane',
  components: { ZAccordion, ZAccordionItem, ZLanguageIssueHeader },
  props: {
    issues: {
      type: Array,
      default: () => []
    }
  }
}
</script>
