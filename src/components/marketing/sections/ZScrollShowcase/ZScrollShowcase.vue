<template>
  <section class="w-full relative text-vanilla-100" id="scroll-showcase" @wheel="handleSectionScroll">
    <div class="flex flex-col md:flex-row px-4">
      <div class="flex flex-col">
        <span
          class="text-vanilla-100 font-bold text-2xl md:text-3xl md:mr-10 leading-tight"
        >
          <slot name="heading"></slot>
        </span>
        <span
          class="text-vanilla-400 text-2xs md:text-xs md:mr-20"
        >
          <slot name="subheading"></slot>
        </span>

        <span class="block">
          <div class="flex flex-row mt-4">
            
            <div class="flex flex-col">
              <slot name="items" :toggles="toggles"></slot>
            </div>
          </div>
          
        </span>
      </div>
      
      <div class="mt-10">
        <video autoplay="" muted="" loop="" playsinline="" preload="metadata">
          <source
            :src="animations[0]"
            type="video/mp4"
          />
        </video>
     </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

//move to utils
const elementInViewport = (el: HTMLElement | null) => {
  if (el) {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }
  return false
}


export default Vue.extend({
  name: 'ZScrollShowcase',
  props: {
    size: {
      type: Number,
      default: 3
    },
    animations: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.handleScroll()
    document.addEventListener('scroll', this.handleScroll)
    
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleSectionScroll(event: WheelEvent) {
      if (event.deltaY > 0) this.elementScrolls += 1
      //else if (this.elementScrolls >= 0) this.elementScrolls -= 1
    },
    allowScroll() {
      const toggleIsOff = this.toggles?.includes(false)
      return !toggleIsOff
    },
    handleScroll() {
      const allow = this.allowScroll()
      const el: HTMLElement | null = document.getElementById('scroll-showcase');
      if(elementInViewport(el)) {
        if (allow) {
          document.body.style.overflow = 'auto'
          return true
        }
        document.body.style.overflow = 'hidden'
      }
      
      return false;
    },
    updateToggles(){
      console.log('updating toggles for scrolls:', this.elementScrolls)
      const scrollStepSize = 8
      this.toggles = this.toggles?.map((toggle, index) => {
        if (this.elementScrolls >= (index+1) * scrollStepSize) return true
        return false;
      })
    },
  },
  data() {
    return {
      toggles: Array(this.size).fill(false),
      elementScrolls: 0,
      animationStage: 0
    }
  },
  watch: {
    elementScrolls: function() {
      this.updateToggles()
    },
    toggles: function() {
      if (this.allowScroll()) {
        document.body.style.overflow = 'auto'
      }
    }
  }
})
</script>
