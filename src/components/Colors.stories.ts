import '../assets/css/tailwind.css'
import '../assets/css/typography.css'
import '../assets/css/layout.css'

import baseColors from '@/helpers/tailwind/colors'

export default {
  title: 'Colors'
}

export const Colors = () => ({
  data() {
    return {
      baseColors: baseColors
    }
  },
  template: `<div class="p-5">
      <h1 class="text-lg font-bold text-vanilla-100 mb-5">Pallette</h1>
      <div class='grid grid-cols-4 gap-5 mb-12'>
        <template v-for="(color, key) in baseColors">
          <div :key="key" v-if="typeof color !== 'string'">
            <div class="rounded-lg overflow-hidden shadow-lg">
              <template v-for="(shade, name) in color">
                <div
                  v-if="name !== 'DEFAULT'"
                  :key="name"
                  :class="'bg-' + key + '-' + name"
                  class="w-full h-12 flex items-center justify-between font-semibold px-4"
                >
                  <span>{{ name }}</span>
                  <span class="uppercase">{{ shade }}</span>
                </div>
              </template>
            </div>
            <div class="rounded-lg overflow-hidden shadow-lg mt-2" v-if="color['DEFAULT']">
                <div
                  :class="'bg-' + key"
                  class="w-full h-12 flex items-center justify-between font-semibold px-4"
                >
                  <span>Default</span>
                  <span class="uppercase">{{ color['DEFAULT'] }}</span>
                </div>
            </div>
            <h3 class="mt-4 text-base font-bold text-vanilla-100 capitalize">{{ key }}</h3>
            <pre class="text-vanilla-400 text-xs">{{ value }}</pre>
          </div>
        </template>
      </div>
      <h1 class="text-lg font-bold text-vanilla-100 mb-5">Single Colors</h1>
      <div class='grid grid-cols-8 gap-5 mb-8'>
        <template v-for="(value, key) in baseColors">
          <div :key="key" v-if="typeof value === 'string' && !['transparent', 'current'].includes(key)">
            <div class="w-full h-22 rounded-lg" :class="'bg-' + key"></div>
            <h3 class="mt-2 text-base font-bold text-vanilla-100 capitalize">{{ key }}</h3>
            <pre class="text-vanilla-400 text-xs">{{ value }}</pre>
          </div>
        </template>
      </div>
    </div>`
})
