<template>
  <div class="bg-ink-300 inline-flex items-center justify-evenly text-vanilla-100 rounded-full space-x-2"
        :class="[ getSizeBasedClasses,
                  getBaseColor]">
    <z-icon v-if="iconLeft" :icon="iconLeft" :size="size"></z-icon>
    <div><slot></slot></div>
    <z-icon v-if="iconRight" :icon="iconRight" :size="size"></z-icon>
  </div>
</template>

<script lang="ts">
import ZIcon from '@/components/ZIcon'
export default {
  name: 'ZTag',
  components: {
    ZIcon
  },
  props: {
    state: {
        type: String,
        default: 'default',
        validator: function (value: string): boolean {
            return ['success', 'error', 'warning', 'info', 'default'].includes(value)
        }
    },
    iconLeft: {
        type: String
    },
    iconRight: {
        type: String
    },
    size: {
        type: String,
        default:'small',
        validator: function (value: string): boolean {
            return ['small', 'large'].includes(value)
        }
    }
  },
  computed: {
    getSizeBasedClasses(): string {
        const sizes = {
            small: 'py-1 px-4 text-sm',
            large: 'py-1 px-4 text-lg'
        }
        return sizes[this.size];
    },
    getBaseColor(): string {
        const states = {
            'success': 'border-2 border-solid border-juniper',
            'default': '',
            'info': 'border-2 border-solid border-aqua',
            'warning': 'border-2 border-solid border-honey',
            'error': 'border-2 border-solid border-cherry',
        }
        return states[this.state]
    }
  }
}
</script>
