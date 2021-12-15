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
    data: function() {
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
    data: function() {
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

export const AlertWithDismissAndControls = () => {
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

export const AlertWithBorders = () => {
  return Vue.extend({
    components: { ZAlert },
    data: function() {
      return {
        types: ['info', 'warning', 'danger']
      }
    },
    template: `
    <div class='text-vanilla-100'>
      <z-alert type="danger" border="bottom">
        Alert of the type danger with border-bottom
      </z-alert>
    </div>
    `
  })
}
