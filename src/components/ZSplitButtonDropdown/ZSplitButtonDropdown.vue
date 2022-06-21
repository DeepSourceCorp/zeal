<template>
  <div class="flex items-center">
    <z-button v-bind="$attrs" v-on="$listeners" :size="size" button-type="secondary" class="-mr-0.5">
      <slot name="button-label"></slot>
    </z-button>

    <z-divider direction="vertical" margin="mx-0" color="ink-100" :class="['flex-shrink-0', dividerHeights[size]]" />
    <slot>
      <z-menu direction="left" size="small" width="small">
        <template v-slot:trigger="{ toggle }">
          <slot name="menu-trigger">
            <z-button
              button-type="secondary"
              :size="size"
              @click="toggle"
              icon="chevron-down"
              class="rounded-tl-none rounded-tr-sm rounded-bl-none rounded-br-sm"
            />
          </slot>
        </template>

        <template #body>
          <slot name="menu-body"></slot>
        </template>
      </z-menu>
    </slot>
  </div>
</template>

<script>
import Vue from 'vue'

import ZButton from '../ZButton/ZButton.vue'
import ZMenu from '../ZMenu/ZMenu.vue'
import ZDivider from '../ZDivider/ZDivider.vue'

export default Vue.extend({
  name: 'ZSplitButtonDropdown',
  components: {
    ZButton,
    ZDivider,
    ZMenu
  },
  props: {
    size: {
      default: 'small',
      type: String,
      validator(val) {
        return ['small', 'medium', 'large', 'xlarge'].includes(val)
      }
    }
  },
  data: function () {
    return {
      dividerHeights: {
        small: 'h-8',
        medium: 'h-10',
        large: 'h-12',
        xlarge: 'h-13'
      }
    }
  }
})
</script>
