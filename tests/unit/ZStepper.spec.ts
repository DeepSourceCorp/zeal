import ZStepper from '../../src/components/ZStepper'
import ZStep from '../../src/components/ZStep'
import Vue from 'vue'

import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

let id = 0;

const createElm = function() {
  const elm = document.createElement('div');

  elm.id = 'app' + ++id;
  document.body.appendChild(elm);

  return elm;
};

export const createVue = function(Compo: any) {
  return new Vue({ template: Compo }).$mount(createElm());
};

const div = document.createElement('div')
div.id = 'root'
document.body.appendChild(div)

const Stepper = {
    template: `<el-steps>
        <el-step title="step1"></el-step>
        <el-step title="step2"></el-step>
        <el-step title="step3"></el-step>
      </el-steps>`
}

describe('ZStepper', () => {
  let mountFn: (options?: object) => Wrapper<Vue>
  let localVue: typeof Vue

  beforeEach(() => {
    mountFn = (options = {}) => {
      return mount(Stepper, {
        localVue,
        ...options
      })
    }
  })

  it('renders a default stepper component', () => {
      let wrapper = mountFn({
        attachTo: '#root'
    })
      expect(wrapper.vm.$el.querySelectorAll('.z-step')).toHaveLength(3);
      wrapper.destroy()
  })
})
