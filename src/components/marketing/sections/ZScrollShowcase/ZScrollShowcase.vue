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
              <div class="mr-2" v-for="(item, index) in steps" :key="item">
                <z-toggle v-model="toggles[index]"></z-toggle>
              </div>
            </div>
            <div class="flex flex-col">
              <slot name="items" v-bind:toggles="toggles"></slot>
            </div>
          </div>
          
        </span>
      </div>
      
      <div class="mt-10">
        <slot name="illustration"></slot>
     </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import ZToggle from '../../../ZToggle'

//move to utils
const elementInViewport = (el: HTMLElement | null) => {
  if (el){
    let top = el.offsetTop;
    const height = el.offsetHeight;

    while(el?.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
    }

    return (
      top >= window.pageYOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight)
    );

  }
  return false
}


export default Vue.extend({
  name: 'ZScrollShowcase',
  components: {
    ZToggle
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
        console.log('offset', el?.offsetTop)
        
        console.log('scrolled while in view')
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
      steps: this.$slots.items,
      toggles: this.$slots.items?.map(() => false),
      elementScrolls: 0
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
