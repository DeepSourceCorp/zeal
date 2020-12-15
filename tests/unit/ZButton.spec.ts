import Vue from 'vue'
import { createLocalVue, mount, Wrapper, shallowMount } from '@vue/test-utils'

import ZButton from '../../src/components/ZButton'

describe('Button component', () => {
    let mountFunction: (options?: object) => Wrapper<Vue>
    let localVue: typeof Vue
    beforeEach(() => {
        localVue = createLocalVue()
        mountFunction = (options = {}) => {
            return mount(ZButton, {
                localVue, 
                ...options
            })
        }
    })
    it('renders a button tag when the component is mounted', () => {
        expect(mountFunction().html()).toMatchSnapshot()
    })

    it('renders a button tag with the given text', () => {
        expect(mountFunction({
            slots: {
                default: 'Hello World'
            }
        }).html()).toMatchSnapshot()
    })

    it('renders a button with primary color', () => {
        expect(mountFunction({
            propsData: {
                color: 'primary'
            },
            slots: {
                default: 'Primary Button'
            }
        }).html()).toMatchSnapshot();
    })
    it('renders a button with secondary color', () => {
        expect(mountFunction({
            propsData: {
                color: 'secondary'
            },
            slots: {
                default: 'Secondary Button'
            }
        }).html()).toMatchSnapshot();
    })
    it('renders a button with the given size(large)', () => {
        expect(mountFunction({
            propsData: {
                size: 'large'
            },
            slots: {
                default: 'Large Button'
            }
        }).html()).toMatchSnapshot();
    })
    it('renders a disabled button when the disabled attribute is passed', () => {
        expect(mountFunction({
            propsData: {
                disabled: true
            },
            slots: {
                default: 'Disabled Button'
            }
        }).html()).toMatchSnapshot();
    })
    it('renders a full-width button', () => {
        expect(mountFunction({
            propsData: {
                fullWidth: true
            },
            slots: {
                default: 'Full Width Button'
            }
        }).html()).toMatchSnapshot();
    })
     it('renders a link tag when type is specified as link', () => {
        expect(mountFunction({
            propsData: {
                type: 'link',
                color: 'link',
                to: 'https://deepsource.io/'
            },
            slots: {
                default: 'Link Button'
            }
        }).html()).toMatchSnapshot();
    })
    it('should use custom classes', () => {
        const wrapper = mountFunction({
            propsData: {
                customClasses: 'bg-transparent'
            },
            slots: {
                default: 'Custom Styled Button'
            }
        });

        expect(wrapper.classes('bg-transparent')).toBe(true);
    })
    // it.only('button should emit a click event', () => {
    //     const sayHello = () => {
    //         console.log('hello')
    //     }
    //     const wrapper = mountFunction({
    //         propsData: {
    //             onclick: sayHello()
    //         }
    //     });
    //     const click = jest.fn()
    //     wrapper.vm.$on('click', click)
    //     wrapper.trigger('click')
    //     expect(click.mock.calls).toHaveLength(1)
    // })
})
