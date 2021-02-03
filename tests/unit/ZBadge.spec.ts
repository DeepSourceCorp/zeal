import ZBadge from '../../src/components/ZBadge'
import ZButton from '../../src/components/ZButton'

<<<<<<< HEAD
=======

>>>>>>> Add badge component
import { shallowMount, mount } from '@vue/test-utils'

const slotData = {
  default: 'Badge'
}

const BasicBadge = {
<<<<<<< HEAD
  template: `<z-badge type="danger" :value="12">
            <z-button color="primary">Likes</z-button>
        </z-badge>`,
  components: {
    ZBadge,
    ZButton
  }
=======
    template: `<z-badge type="danger" :value="12">
            <z-button color="primary">Likes</z-button>
        </z-badge>`,
    components: {
        ZBadge,
        ZButton
    }
>>>>>>> Add badge component
}

describe('Badge', () => {
  it('renders a badge as a dot', () => {
    const wrapper = shallowMount(ZBadge, {
<<<<<<< HEAD
      slots: slotData,
      propsData: {
        isDot: true
      }
    })

=======
        slots: slotData,
        propsData: {
            isDot: true
        }
    })
   
>>>>>>> Add badge component
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders a badge with content', () => {
    const wrapper = mount(BasicBadge)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with state', () => {
    expect(
      shallowMount(ZBadge, {
        propsData: {
          state: 'success'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()

    expect(
      shallowMount(ZBadge, {
        propsData: {
          state: 'danger'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()

    expect(
      shallowMount(ZBadge, {
        propsData: {
          state: 'warning'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()

    expect(
      shallowMount(ZBadge, {
        propsData: {
          state: 'info'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()

    expect(
      shallowMount(ZBadge, {
        propsData: {
          state: 'default'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()
  })

  it('renders with size', () => {
    expect(
      shallowMount(ZBadge, {
        propsData: {
          size: 'sm'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()
<<<<<<< HEAD

=======
      
>>>>>>> Add badge component
    expect(
      shallowMount(ZBadge, {
        propsData: {
          size: 'md'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()

    expect(
      shallowMount(ZBadge, {
        propsData: {
          size: 'lg'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()
  })
})
