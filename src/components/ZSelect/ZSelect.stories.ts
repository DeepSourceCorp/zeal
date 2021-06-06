import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZSelect from './ZSelect.vue'
import ZOption from '../ZOption/ZOption.vue'
import ZIcon from '../ZIcon/ZIcon.vue'

export default {
  title: 'Select',
  component: ZSelect,
  excludeStories: /.*Data$/
}

export const DefaultSelect = () => ({
  components: { ZSelect, ZOption, ZIcon },
  data() {
    return {
      value: 7,
      options: [
        {
          value: 7,
          label: 'Last 7 Days'
        },
        {
          value: 14,
          label: 'Last 14 Days'
        },
        {
          value: 30,
          label: 'Last 30 Days'
        },
        {
          value: 45,
          label: 'Last 45 Days'
        },
        {
          value: 60,
          label: 'Last 60 Days'
        }
      ]
    }
  },
  template: `<div class='padded-container'>
              <div class="select-container space-y-4">
                <z-select v-model="value">
                    <z-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </z-option>
                </z-select>
                <div class='text-sm text-vanilla-400'>Selected Value: <span class='text-juniper font-bold'>{{ value }}</span></div>
              </div>
        </div>`
})

export const SelectWithCustomPlaceholder = () => ({
  components: { ZSelect, ZOption, ZIcon },
  data() {
    return {
      value: '',
      options: [
        {
          value: 'Option 1',
          label: 'Option 1'
        },
        {
          value: 'Option 2',
          label: 'Option 2'
        },
        {
          value: 'Option 3',
          label: 'Option 3'
        },
        {
          value: 'Option 4',
          label: 'Option 4'
        },
        {
          value: 'Option 5',
          label: 'Option 5'
        }
      ]
    }
  },
  template: `<div class='padded-container'>
            <div class="select-container">
                <z-select v-model="value" placeholder="Choose a framework">
                    <z-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </z-option>
                </z-select>
            </div>
        </div>`
})

export const SelectWithClearables = () => ({
  components: { ZSelect, ZOption, ZIcon },
  data() {
    return {
      value: '',
      options: [
        {
          value: 'Option 1',
          label: 'Option 1'
        },
        {
          value: 'Option 2',
          label: 'Option 2'
        },
        {
          value: 'Option 3',
          label: 'Option 3'
        },
        {
          value: 'Option 4',
          label: 'Option 4'
        },
        {
          value: 'Option 5',
          label: 'Option 5'
        }
      ]
    }
  },
  template: `<div class='padded-container'>
            <div class="select-container">
                <z-select v-model="value" placeholder="Choose a framework" :clearable="true">
                    <z-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </z-option>
                </z-select>
            </div>
        </div>`
})

export const SelectWithCustomOptionsTemplate = () => ({
  components: { ZSelect, ZOption, ZIcon },
  data() {
    return {
      value: '',
      options: [
        {
          value: 'Option 1',
          label: 'Option 1'
        },
        {
          value: 'Option 2',
          label: 'Option 2'
        },
        {
          value: 'Option 3',
          label: 'Option 3'
        },
        {
          value: 'Option 4',
          label: 'Option 4'
        },
        {
          value: 'Option 5',
          label: 'Option 5'
        }
      ]
    }
  },
  template: `<div class='padded-container'>
            <div class="select-container">
                <z-select v-model="value" placeholder="Choose a framework" :clearable="true">
                    <z-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        <div class="flex items-center">
                            <z-icon icon="github" size="small" class="-mt-1 mr-2"></z-icon>
                            <span class="flex-1">{{item.label}}</span>
                        </div>
                    </z-option>
                </z-select>
            </div>
        </div>`
})

export const SelectWithPreselectedOption = () => ({
  components: { ZSelect, ZOption, ZIcon },
  data() {
    return {
      value: 'Option 1',
      options: [
        {
          value: 'Option 1',
          label: 'Option 1'
        },
        {
          value: 'Option 2',
          label: 'Option 2'
        },
        {
          value: 'Option 3',
          label: 'Option 3'
        },
        {
          value: 'Option 4',
          label: 'Option 4'
        },
        {
          value: 'Option 5',
          label: 'Option 5'
        }
      ]
    }
  },
  template: `<div class='padded-container'>
            <div class="select-container">
                <z-select v-model="value" placeholder="Choose a framework" :clearable="true" selected="Option 5">
                    <z-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        <div class="flex items-center">
                            <z-icon icon="github" size="small" class="-mt-1 mr-2"></z-icon>
                            <span class="flex-1">{{item.label}}</span>
                        </div>
                    </z-option>
                </z-select>
            </div>
        </div>`
})

export const SelectWithCustomStyle = () => ({
  components: { ZSelect, ZOption, ZIcon },
  data() {
    return {
      value: 'Option 1',
      options: [
        {
          value: 'Option 1',
          label: 'Option 1'
        },
        {
          value: 'Option 2',
          label: 'Option 2'
        },
        {
          value: 'Option 3',
          label: 'Option 3'
        },
        {
          value: 'Option 4',
          label: 'Option 4'
        },
        {
          value: 'Option 5',
          label: 'Option 5'
        }
      ]
    }
  },
  template: `<div class='padded-container'>
            <div class="select-container">
                <z-select v-model="value" placeholder="Choose a framework" :clearable="true" selected="Option 5" borderClass="border-cherry" backgroundClass="bg-cherry">
                    <z-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        <div class="flex items-center">
                            <z-icon icon="github" size="small" class="-mt-1 mr-2"></z-icon>
                            <span class="flex-1">{{item.label}}</span>
                        </div>
                    </z-option>
                </z-select>
            </div>
        </div>`
})
