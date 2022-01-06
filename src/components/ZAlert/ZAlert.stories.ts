import Vue from 'vue'
import ZAlert from '../ZAlert/ZAlert.vue'
import ZButton from '../ZButton/ZButton.vue'
import ZCode from '../ZCode/ZCode.vue'

export default {
  title: 'Alert',
  component: ZAlert
}

/**
 * UI states representing the various Alert component types
 *
 * @returns {ExtendedVue}
 */
export const AlertTypes = () => {
  return Vue.extend({
    components: { ZAlert },
    data: function() {
      return {
        types: ['info', 'warning', 'danger']
      }
    },
    template: `
      <div class='text-vanilla-100 space-y-4'>
        <div v-for="type in types" :key="type">
          <z-alert :type="type">
            <p class="flex items-center h-8">
              Alert of the type {{ type }}
            </p>
          </z-alert>
        </div>
      </div>
    `
  })
}

/**
 * UI states representing dismissible Alert component
 *
 * @returns {ExtendedVue}
 */
export const DismissibleAlert = () => {
  return Vue.extend({
    components: { ZAlert },
    data: function() {
      return {
        types: ['info', 'warning', 'danger']
      }
    },
    template: `
      <div class='text-vanilla-100 space-y-4'>
        <div v-for="type in types" :key="type">
          <z-alert :type="type" :dismissible="true">
            <p class="flex items-center h-8">
              Alert of the type {{ type }}
            </p>
          </z-alert>
        </div>
      </div>
    `
  })
}

/**
 * UI states representing dismissible Alert component with controls
 *
 * @returns {ExtendedVue}
 */
export const DismissibleAlertWithControls = () => {
  return Vue.extend({
    components: { ZAlert, ZButton },
    data: function() {
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
            <div class="md:hidden flex flex-col space-y-4 mr-2">
              <p>Alert of the type {{ type }}</p>
              <div class="inline-flex space-x-2">
              <z-button button-type="ghost" color="vanilla-100" size="small" :class="[colors[type], 'bg-opacity-40']">
                Button 1
              </z-button>
              <z-button button-type="ghost" color="vanilla-100" size="small" :class="[colors[type], 'bg-opacity-40']">
                Button 2
              </z-button>
              </div>
            </div>
    
            <div class="hidden md:flex items-center justify-between mr-2">
              Alert of the type {{ type }}
              <z-button button-type="ghost" color="vanilla-100" size="small" :class="[colors[type], 'bg-opacity-40']">
                Default button
              </z-button>
            </div>
          </z-alert>
        </div>
      </div>
    `
  })
}

/**
 * UI states representing dismissible Alert component with controls and code snippet
 *
 * @returns {ExtendedVue}
 */
export const DismissibleAlertWithCodeSnippet = () => {
  return Vue.extend({
    components: { ZAlert, ZButton, ZCode },
    data: function() {
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
          <z-alert :type="type" :dismissible="true">
            <div class="md:hidden mr-2">
              Alert of the type {{ type }}
            </div>

            <div class="hidden md:flex items-center justify-between mr-2">
              <p> Alert of the type {{ type }} </p>
              <z-button button-type="ghost" color="vanilla-100" size="small" :class="[colors[type], 'bg-opacity-40']">
                Default button
              </z-button>
            </div>

            <template #code-snippet>
              <z-code :content="content" />

              <div class="md:hidden inline-flex space-x-2 mt-4">
                <z-button button-type="ghost" color="vanilla-100" size="small" :class="[colors[type], 'bg-opacity-40']">
                  Button 1
                </z-button>
                <z-button button-type="ghost" color="vanilla-100" size="small" :class="[colors[type], 'bg-opacity-40']">
                  Button 2
                </z-button>
              </div>
            </template>
        </z-alert>
      </div>
    `
  })
}

/**
 * UI states representing dismissible Alert component with borders
 *
 * @returns {ExtendedVue}
 */
export const DismissibleAlertWithBorders = () => {
  return Vue.extend({
    components: { ZAlert },
    data: function() {
      return {
        borderTypes: ['top', 'right', 'bottom', 'left']
      }
    },
    template: `
      <div class='text-vanilla-100 space-y-4'>
        <div v-for="type in borderTypes" :key="type">
          <z-alert type="danger" :dismissible="true" :border="type">
            <p class="flex items-center h-8">
              Alert of the type danger with border-{{ type }}
            </p>
          </z-alert>
        </div>
      </div>
    `
  })
}
