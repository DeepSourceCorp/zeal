import ZCustomers from './ZCustomers.vue'

export default {
  title: 'Zeal Marketing/Customers section',
  component: ZCustomers,
  excludeStories: /.*Data$/
}

export const Basic = () => ({
  components: { ZCustomers },
  data() {
    return {
      customers: [
        {
          title: 'Slack1',
          slug: 'Slack1',
          image: 'https://i.imgur.com/mu7Vh6o.png',
          url: ''
        },
        {
          title: 'Slack2',
          slug: 'Slack2',
          image: 'https://i.imgur.com/BxxXp7v.png',
          url: ''
        },
        {
          title: 'Nasa',
          slug: 'Nasa',
          image: 'https://i.imgur.com/46V02HC.png',
          url: ''
        },
        {
          title: 'Sas',
          slug: 'Sas',
          image: 'https://i.imgur.com/v7zouKN.png',
          url: ''
        },
        {
          title: 'Dgraph',
          slug: 'Dgraph',
          image: 'https://i.imgur.com/ZJBUi4D.png',
          url: ''
        },
        {
          title: 'Qubole',
          slug: 'Qubole',
          image: 'https://i.imgur.com/O9bfIqK.png',
          url: ''
        },
        {
          title: 'Intel',
          slug: 'Intel',
          image: 'https://i.imgur.com/4uKLbka.png',
          url: ''
        },
        {
          title: 'Okteto',
          slug: 'Okteto',
          image: 'https://i.imgur.com/9gqeCeh.png',
          url: ''
        }
      ]
    }
  },
  template: `<div class='padded-container'>
      <z-customers :customers="customers">
        <h2 slot="heading">Used by developers from</h2>
      </z-customers>
    </div>`
})
