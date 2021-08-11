import ZRadio from '../../src/components/ZRadio'
import ZRadioGroup from '../../src/components/ZRadioGroup'
import ZRadioButton from '../../src/components/ZRadioButton'

import { mount } from '@vue/test-utils'

const defaultRadio = {
  template: `<z-radio-group v-model="modelValue">
                    <z-radio value="female" label="Female"></z-radio>
                    <z-radio value="male" label="Male"></z-radio>
                </z-radio-group>
            </div>
        </div>`,
  components: {
    ZRadioGroup,
    ZRadio
  },
  data() {
    return {
      modelValue: ''
    }
  }
}

const CheckedRadio = {
  template: `<z-radio-group v-model="modelValue">
                    <z-radio value="female" label="Female"></z-radio>
                    <z-radio value="male" label="Male"></z-radio>
                </z-radio-group>
            </div>
        </div>`,
  components: {
    ZRadioGroup,
    ZRadio
  },
  data() {
    return {
      modelValue: 'female'
    }
  }
}

const DisabledRadioButton = {
  template: `<z-radio-group v-model="modelValue" :disabled="true">
                <z-radio value="female" label="Female"></z-radio>
                <z-radio value="male" label="Male"></z-radio>
              </z-radio-group>`,
  components: {
    ZRadioGroup,
    ZRadio
  },
  data() {
    return {
      modelValue: ''
    }
  }
}

const ReadOnlyRadioButton = {
  template: `<z-radio-group v-model="modelValue" :readOnly="true">
                <z-radio value="female" label="Female"></z-radio>
                <z-radio value="male" label="Male"></z-radio>
              </z-radio-group>`,
  components: {
    ZRadioGroup,
    ZRadio
  },
  data() {
    return {
      modelValue: 'female'
    }
  }
}

const DisabledCheckedRadioButton = {
  template: `<z-radio-group v-model="modelValue" :disabled="true">
                <z-radio value="female" label="Female"></z-radio>
                <z-radio value="male" label="Male"></z-radio>
              </z-radio-group>`,
  components: {
    ZRadioGroup,
    ZRadio
  },
  data() {
    return {
      modelValue: 'female'
    }
  }
}

const DefaultRadioButtonStyle = {
  components: { ZRadioGroup, ZRadio, ZRadioButton },
  data() {
    return {
      modelValue: 'female'
    }
  },
  template: `<div class='padded-container'>
            <div class="input-container">
                <z-radio-group v-model="modelValue" class="flex">
                    <z-radio-button value="female" label="Female"></z-radio-button>
                    <z-radio-button value="male" label="Male"></z-radio-button>
                </z-radio-group>
            </div>
        </div>`
}

describe('Radio Button Component', () => {
  it('renders the default radio component', () => {
    const wrapper = mount(defaultRadio)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('input[type="radio"]').length).toEqual(2)
  })

  it('renders the checked radio component', () => {
    const wrapper = mount(CheckedRadio)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('.z-radio--inner span').length).toEqual(1)
  })
  it('renders the disabled radio component', () => {
    const wrapper = mount(DisabledRadioButton)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('input[disabled="disabled"]').length).toEqual(2)
  })
  it('renders the readonly radio component', () => {
    const wrapper = mount(ReadOnlyRadioButton)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('input[disabled="disabled"]').length).toEqual(2)
  })
  it('renders a checked radio button disabled', () => {
    const wrapper = mount(DisabledCheckedRadioButton)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('input[disabled="disabled"]').length).toEqual(2)
    expect(wrapper.findAll('.z-radio--inner span').length).toEqual(1)
  })
  it('renders a radio button with button style like switcher', () => {
    const wrapper = mount(DefaultRadioButtonStyle)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('.z-radio-button').length).toEqual(2)
  })
})
