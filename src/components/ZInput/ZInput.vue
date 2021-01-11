<template>
    <div class="z-input w-full relative">
        <label for="input" v-if="label" 
                class="block mb-1 text-xs"
                :class="`${disabled && 'text-slate cursor-not-allowed' || 'text-vanilla-300'}`">{{label}}</label>
        <span></span>
        <input type="text"
            class="input w-full text-sm bg-ink-400 focus:shadow-white focus:border-vanilla-400 border border-solid border-bg-ink-100 rounded-sm outline-none p-3 h-10"
            :class="`${disabled && 'text-slate cursor-not-allowed' || 'text-vanilla-300'}`"
            :value="name"
            :placeholder="placeholder"
            :disabled="disabled"
            @input="updateSelf($event.target.value)">
        <span v-if="clearable" 
                class="absolute h-full flex items-center top-0 text-center transition-all right-2 cursor-pointer"
                @click.stop="updateSelf('')">
            <z-icon icon="x" size="small"></z-icon>
        </span>
    </div>
</template>

<script>
import ZIcon from '../ZIcon/ZIcon.vue';

export default {
  name: 'ZInput',
  components: {
    ZIcon
  },
  props: {
    name: {
        default: '',
        type: String
    },
    placeholder: {
        default: "Enter a value",
        type: String
    },
    label: {
        type: String
    },
    disabled: {
        default: false,
        type: Boolean
    },
    icon: {
        type: String        
    },
    clearable: {
        type: Boolean
    },
    iconPosition: {
        type: String,
        default: "left"
    }
  },
  model: {
      prop: "name",
      event: "input"
  }, 
  methods: {
      updateSelf(name) {
          this.$emit("input", name);
      }
  }
}
</script>
