<template>
  <div
    class="flex flex-col items-center justify-between bg-ink-300 w-full h-2xl mx-3 my-2"
    :class="[`${CARD_ALIGNMENT[cardAlign].classes}`]"
  >
    <div class="flex flex-col w-full h-full p-4 px-8 text-white justify-between">
      <span class="hidden md:block text-ink-200 font-black text-6xl">
        {{ INDEX }}
      </span>
      <div class="w-full">
        <h2 class="text-vanilla-100 mb-2 sm:mb-6 text-xl font-bold capitalize md:uppercase">
          <slot name="heading"></slot>
        </h2>
        <div class="relative rounded bg-ink-300 mx-auto text-white space-y-4">
          <div
            class="absolute inset-0 bg-gradient-to-b text-ink-300 from-transparent to-current"
          ></div>
          <ol>
            <slot name="links"></slot>
          </ol>
        </div>

        <z-button
          color="link"
          type="link"
          :to="to"
          size="small"
          class="uppercase font-medium text-left pl-0 mx-0"
        >
          See all guides
          <z-icon
            size="x-small"
            icon="arrow-up-right"
            class="ml-1"
            :color="[`${COLOR_SCHEMES[colorScheme].textColor}`]"
          ></z-icon>
        </z-button>
      </div>
    </div>
    <div class="w-full h-full flex flex-col-reverse pt-12">
      <div
        class="pt-8 w-full rounded-sm"
        :class="[
          `${COLOR_SCHEMES[colorScheme].showcaseBg}`,
          `${CARD_ALIGNMENT[cardAlign].imgContainer}`
        ]"
      >
        <img
          class="h-76 shadow-2xl"
          :class="[`${CARD_ALIGNMENT[cardAlign].imgPosition}`]"
          :src="IMAGE_SRC"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '../../ZIcon'
import ZButton from '../../ZButton'
import { padNumber } from '../../../helpers/components/utils'

const COLOR_SCHEMES = {
  seaglass: {
    name: 'seaglass',
    textAccent: 'text-juniper',
    textColor: 'juniper',
    showcaseBg: 'bg-seaGlass'
  },
  flamingo: {
    name: 'flamingo',
    textAccent: 'text-lilac',
    textColor: 'lilac',
    showcaseBg: 'bg-gradient-flamingo'
  },
  dawn: {
    name: 'dawn',
    textAccent: 'text-honey',
    textColor: 'honey',
    showcaseBg: 'bg-gradient-dawn'
  }
}
const CARD_ALIGNMENT = {
  left: {
    text: 'left',
    classes: 'md:flex-row',
    imgPosition: 'object-right-bottom',
    imgContainer: 'pl-8'
  },
  right: {
    text: 'right',
    classes: 'md:flex-row-reverse',
    imgPosition: 'object-left-bottom',
    imgContainer: 'pr-8'
  }
}

export default Vue.extend({
  components: { ZButton, ZIcon },
  name: 'ZContentCard',
  props: {
    colorScheme: {
      type: String,
      default: 'seaglass',
      validator: (name) => Object.keys(COLOR_SCHEMES).includes(name)
    },
    cardAlign: {
      type: String,
      default: 'left',
      validator: (alignment) => Object.keys(CARD_ALIGNMENT).includes(alignment)
    },
    index: {
      type: Number,
      required: true,
      validator: (value) => value > 0
    },
    img: {
      type: String,
      required: true
    },
    to: {
      type: String,
      default: '#'
    }
  },
  data() {
    return {
      COLOR_SCHEMES,
      CARD_ALIGNMENT,
      INDEX: padNumber(this.index),
      IMAGE_SRC: this.img
    }
  }
})
</script>
