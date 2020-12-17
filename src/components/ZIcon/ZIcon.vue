<template>
    <svg 
      :class="[
        'z-icon',
        `${size && `z-icon--${size}`}`,
        `${icon && `z-icon--${icon}`}`
      ]"
      viewBox="0 0 24 24" 
      v-html="getIcon(icon)"></svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import feather from 'feather-icons'
import customIcons from '../../utils/icon-helper'

@Component({
  name: 'ZIcon'
})
export default class Icon extends Vue {
  @Prop({ default: '' })
  private icon!: string
  @Prop({default: ''})
  private size!: string

  public getIcon(iconName: string): HTMLOrSVGImageElement {
    let DOM = null
    if (feather.icons[iconName]) {
      DOM = feather.icons[iconName] && feather.icons[iconName].contents
    } else {
      DOM = customIcons[iconName] &&  customIcons[iconName].contents;
    }
    return DOM
  }
}
</script>

<style lang="css" scoped>
  .z-icon {
    @apply  w-6 h-6 fill-current stroke-current text-slate stroke-2;
  }

  .z-icon--small {
    @apply w-4 h-4;
  }
</style>
