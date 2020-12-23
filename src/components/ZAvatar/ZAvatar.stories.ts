import ZAvatar from './ZAvatar.vue'

export default {
  title: 'Avatar',
  component: ZAvatar,
  excludeStories: /.*Data$/
}

export const AsALink = () => ({
  components: { ZAvatar },
  template: `
    <div class='padded-container'>
      <z-avatar
        type="link"
        image="https://randomuser.me/api/portraits/women/24.jpg"
        href="https://example.com"
      ></z-avatar>
    </div>
    `
})

export const InLoadingState = () => ({
  components: { ZAvatar },
  template: `
    <div class='padded-container'>
      <z-avatar
        :loading="true"
        type="link"
        image="https://randomuser.me/api/portraits/women/24.jpg"
        href="https://example.com"
      ></z-avatar>
    </div>
    `
})


export const WithUserName = () => ({
  components: { ZAvatar },
  template: `
    <div class='padded-container'>
      <z-avatar
        user-name="Akshay Paliwal"
      ></z-avatar>
    </div>
    `
})

export const WithImageAndUserName = () => ({
  components: { ZAvatar },
  template: `<div class='padded-container'>
      <z-avatar
        image="https://randomuser.me/api/portraits/women/24.jpg"
      ></z-avatar>
    </div>`
})

export const WithSizes = () => ({
  components: { ZAvatar },
  template: `
    <div class='bg-dark padded-container'>
      <div class='padded-container'>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          size="xs"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          size="sm"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          size="md"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          size="lg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          size="xl"
        ></z-avatar>
      </div>
      <div class='padded-container bg-vanilla-100'>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          size="xs"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          size="sm"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          size="md"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          size="lg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          size="xl"
        ></z-avatar>
      </div>
      <div class='padded-container'>
        <z-avatar
          user-name="Akshay Paliwal"
          size="xs"
        ></z-avatar>
        <z-avatar
          user-name="Akshay Paliwal"
          size="sm"
        ></z-avatar>
        <z-avatar
          user-name="Akshay Paliwal"
          size="md"
        ></z-avatar>
        <z-avatar
          user-name="Akshay Paliwal"
          size="lg"
        ></z-avatar>
        <z-avatar
          user-name="Akshay Paliwal"
          size="xl"
        ></z-avatar>
      </div>
      <div class='bg-vanilla-100 padded-container'>
        <z-avatar
          user-name="Akshay Paliwal"
          size="xs"
        ></z-avatar>
        <z-avatar
          user-name="Akshay Paliwal"
          size="sm"
        ></z-avatar>
        <z-avatar
          user-name="Akshay Paliwal"
          size="md"
        ></z-avatar>
        <z-avatar
          user-name="Akshay Paliwal"
          size="lg"
        ></z-avatar>
        <z-avatar
          user-name="Akshay Paliwal"
          size="xl"
        ></z-avatar>
      </div>
    </div>
    `
})
