import Vue from 'vue'
import ZAlert from '../ZAlert/ZAlert.vue'
import ZButton from '../ZButton/ZButton.vue'

export default {
  title: 'Alert',
  component: ZAlert
}

export const AlertTypes = () => {
  return Vue.extend({
    components: { ZAlert },
    data: function () {
      return {
        types: ['info', 'warning', 'danger']
      }
    },
    template: `
    <div class='text-vanilla-100 space-y-4'>
      <div v-for="type in types" :key="type">
        <z-alert :type="type">
          Alert of the type {{ type }} 
        </z-alert>
      </div>
    </div>
    `
  })
}

export const DismissibleAlert = () => {
  return Vue.extend({
    components: { ZAlert },
    data: function () {
      return {
        types: ['info', 'warning', 'danger']
      }
    },
    template: `
    <div class='text-vanilla-100 space-y-4'>
      <div v-for="type in types" :key="type">
        <z-alert :type="type" :dismissible="true">
          Alert of the type {{ type }}
        </z-alert>
      </div>
    </div>
    `
  })
}

export const DismissibleAlertWithControls = () => {
  return Vue.extend({
    components: { ZAlert, ZButton },
    data: function () {
      return {
        colors: {
          info: 'bg-robin',
          warning: 'bg-honey',
          danger: 'bg-cherry'
        },
        types: ['info', 'warning', 'danger']
      }
    },
    template: `
    <div class='text-vanilla-100 space-y-4'>
      <div v-for="type in types" :key="type">
        <z-alert :type="type" :dismissible="true">
          Alert of the type {{ type }}
          <template #controls>
            <z-button button-type="ghost" color="vanilla-100" size="small" :class="[colors[type], 'bg-opacity-40']">
              Default button
            </z-button>
          </template>
        </z-alert>
      </div>
    </div>
    `
  })
}

export const DismissibleAlertWithCodeSnippet = () => {
  return Vue.extend({
    components: { ZAlert, ZButton },
    data: function () {
      return {
        colors: {
          info: 'bg-robin',
          warning: 'bg-honey',
          danger: 'bg-cherry'
        },
        content: `<div class="highlight"><pre><span class="ln">2</span>\n<span class="ln">3</span>\n<span class="ln">4</span><span class="nd">@dramatiq.actor</span>\n<span class="hl"><span class="ln">5</span><span class="k">def</span> <span class="nf">example</span><span class="p">(</span><span class="p">)</span><span class="p">:</span></span><span class="ln">6</span>    <span class="k">pass</span>\n</pre></div>`,
        types: ['info', 'warning', 'danger']
      }
    },
    template: `
    <div class='text-vanilla-100 space-y-4'>
      <div v-for="type in types" :key="type">
        <z-alert :type="type" :dismissible="true" :source-code-markup="content">
          Alert of the type {{ type }}
          <template #controls>
            <z-button button-type="ghost" color="vanilla-100" size="small" :class="[colors[type], 'bg-opacity-40']">
              Default button
            </z-button>
          </template>
        </z-alert>
      </div>
    </div>
    `
  })
}

export const DismissibleAlertWithBorders = () => {
  return Vue.extend({
    components: { ZAlert },
    data: function () {
      return {
        borderTypes: ['top', 'right', 'bottom', 'left']
      }
    },
    template: `
    <div class='text-vanilla-100 space-y-4'>
      <div v-for="type in borderTypes" :key="type">
        <z-alert type="danger" :dismissible="true" :border="type">
          Alert of the type danger with border-{{ type }}
        </z-alert>
      </div>
    </div>
    `
  })
}
