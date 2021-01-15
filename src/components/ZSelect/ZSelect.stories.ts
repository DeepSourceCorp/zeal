import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZSelect from './ZSelect.vue'
import ZOption from '../ZOption/ZOption.vue'
import ZIcon from '../ZIcon/ZIcon.vue'

export default {
  title: 'Form Inputs and Controls: Select',
  component: ZSelect,
  excludeStories: /.*Data$/
}

export const DefaultSelect= () => ({
    components: { ZSelect, ZOption, ZIcon },
    data() {
        return {
            value: '',
            options: [{
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
            }]
        }
    },
    template: `<div class='padded-container'>
            <div class="select-container">
                <z-select v-model="value">
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

export const SelectWithCustomPlaceholder= () => ({
    components: { ZSelect, ZOption, ZIcon },
    data() {
        return {
            value: '',
            options: [{
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
            }]
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

export const SelectWithClearables= () => ({
    components: { ZSelect, ZOption, ZIcon },
    data() {
        return {
            value: '',
            options: [{
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
            }]
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

export const SelectWithCustomOptionsTemplate= () => ({
    components: { ZSelect, ZOption, ZIcon },
    data() {
        return {
            value: '',
            options: [{
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
            }]
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

export const SelectWithPreselectedOption= () => ({
    components: { ZSelect, ZOption, ZIcon },
    data() {
        return {
            value: '',
            options: [{
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
            }]
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
