import ZSelect from '../../src/components/ZSelect'
import ZOption from '../../src/components/ZOption'
import ZIcon from '../../src/components/ZIcon'

import { mount } from '@vue/test-utils'

const defaultSelect = {
  template: `<z-select v-model="value">
                <z-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </z-option>
            </z-select>`,
  components: {
    ZSelect,
    ZOption
  },
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
        }
      ]
    }
  }
}

const SelectWithCustomPlaceholder = {
  template: `<z-select v-model="value" placeholder="Choose a framework">
                <z-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </z-option>
            </z-select>`,
  components: {
    ZSelect,
    ZOption
  },
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
        }
      ]
    }
  }
}

const SelectWithClearables = {
  template: `<z-select v-model="value" placeholder="Choose a framework" :clearable="true" selected="Option 1">
                <z-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </z-option>
            </z-select>`,
  components: {
    ZSelect,
    ZOption
  },
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
        }
      ]
    }
  }
}

const SelectWithCustomOptionsTemplate = {
  template: `<z-select v-model="value" placeholder="Choose a framework" :clearable="true">
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
                </z-select>`,
  components: {
    ZSelect,
    ZOption,
    ZIcon
  },
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
        }
      ]
    }
  }
}

const disabledSelect = {
  template: `<z-select v-model="value" :disabled="true">
                <z-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </z-option>
            </z-select>`,
  components: {
    ZSelect,
    ZOption
  },
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
        }
      ]
    }
  }
}

const readOnlySelect = {
  template: `<z-select v-model="value" :read-only="true">
                <z-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </z-option>
            </z-select>`,
  components: {
    ZSelect,
    ZOption
  },
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
        }
      ]
    }
  }
}

describe('Select Component', () => {
  it('renders the default select component', () => {
    const wrapper = mount(defaultSelect)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('.z-option').length).toEqual(2)
  })

  it('renders the select with a custom placeholder', () => {
    const wrapper = mount(SelectWithCustomPlaceholder)
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.find('.is-selected div')
  })
  it('renders the select component with clearables', () => {
    const wrapper = mount(SelectWithClearables)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('.z-icon').length).toEqual(1)
  })
  it('renders a select component with custom options template', () => {
    const wrapper = mount(SelectWithCustomOptionsTemplate)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('.z-option svg').length).toEqual(2)
  })
  it('renders a disabled select component', () => {
    const wrapper = mount(disabledSelect)
    expect(wrapper.classes()).toContain('is-disabled')
    expect(wrapper.findAll('.z-option').length).toEqual(2)
  })
  it('renders a read only select component', () => {
    const wrapper = mount(readOnlySelect)
    expect(wrapper.classes()).toContain('is-readonly')
    expect(wrapper.findAll('.z-option').length).toEqual(2)
  })
})
