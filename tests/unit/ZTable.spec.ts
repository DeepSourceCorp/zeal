import ZTable from '../../src/components/ZTable'
import ZTableRow from '../../src/components/ZTableRow'
import ZTableCell from '../../src/components/ZTableCell'

import { mount } from '@vue/test-utils'

const Table = {
  template: `<z-table>
        <template v-slot:head>
          <z-table-row>
            <z-table-cell>Heading 1</z-table-cell>
            <z-table-cell>Heading 2</z-table-cell>
          </z-table-row>
        </template>
        <template v-slot:body>
          <z-table-row>
            <z-table-cell>Content Row 1</z-table-cell>
            <z-table-cell>Content Row 1</z-table-cell>
          </z-table-row>
          <z-table-row>
            <z-table-cell>Content Row 2</z-table-cell>
            <z-table-cell>Content Row 2</z-table-cell>
          </z-table-row>
        </template>
      </z-table>`,
  components: {
    ZTable,
    ZTableRow,
    ZTableCell
  }
}

describe('Table', () => {
  it('renders a default table', () => {
    const wrapper = mount(Table)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
