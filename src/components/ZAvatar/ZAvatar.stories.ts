import { Component } from 'vue'
import ZAvatar from './ZAvatar.vue'

export default {
  title: 'Avatar',
  component: ZAvatar,
  excludeStories: /.*Data$/
}

export const AsASpan = (): Component => ({
  components: { ZAvatar },
  template: `
    <div class='padded-container'>
      <z-avatar
        type="span"
        image="https://randomuser.me/api/portraits/women/24.jpg"
        user-name="Akshay Paliwal"
        href="https://example.com"
      ></z-avatar>
    </div>
    `
})

export const InLoadingState = (): Component => ({
  components: { ZAvatar },
  template: `
    <div class='padded-container'>
      <z-avatar
        :loading="true"
        type="link"
        image="https://randomuser.me/api/portraits/women/24.jpg"
        user-name="Akshay Paliwal"
        href="https://example.com"
      ></z-avatar>
    </div>
    `
})

export const WithUserName = (): Component => ({
  components: { ZAvatar },
  template: `
    <div class='padded-container'>
      <z-avatar
        user-name="Akshay Paliwal"
      ></z-avatar>
    </div>
    `
})

export const WithImageAndUserName = (): Component => ({
  components: { ZAvatar },
  template: `<div class='padded-container'>
      <z-avatar
        image="https://randomuser.me/api/portraits/women/24.jpg"
        user-name="Akshay Paliwal"
      ></z-avatar>
    </div>`
})

export const WithState = (): Component => ({
  components: { ZAvatar },
  template: `<div class='padded-container'>
      <z-avatar
        image="https://randomuser.me/api/portraits/women/24.jpg"
        user-name="Akshay Paliwal"
        state="online"
      ></z-avatar>
    </div>`
})

export const WithSizes = (): Component => ({
  components: { ZAvatar },
  template: `
    <div class='bg-dark padded-container'>
      <div class='padded-container'>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          user-name="Akshay Paliwal"
          size="xs"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          user-name="Akshay Paliwal"
          size="sm"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          user-name="Akshay Paliwal"
          size="md"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          user-name="Akshay Paliwal"
          size="lg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          user-name="Akshay Paliwal"
          size="xl"
        ></z-avatar>
      </div>
      <div class='padded-container bg-vanilla-100'>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          user-name="Akshay Paliwal"
          size="xs"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          user-name="Akshay Paliwal"
          size="sm"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          user-name="Akshay Paliwal"
          size="md"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          user-name="Akshay Paliwal"
          size="lg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
          user-name="Akshay Paliwal"
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
