import ZAvatarGroup from './ZAvatarGroup.vue'
import ZAvatar from '../ZAvatar/index'

export default {
  title: 'Avatar Group',
  component: ZAvatarGroup,
  excludeStories: /.*Data$/
}

export const Default = () => ({
  components: { ZAvatarGroup, ZAvatar },
  template: `<div class='padded-container'>
      <z-avatar-group>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
      </z-avatar-group>
    </div>`
})

export const InLoadingState = () => ({
  components: { ZAvatarGroup, ZAvatar },
  template: `
    <div class='padded-container'>
      <z-avatar-group :loading="true">
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
      </z-avatar-group>
    </div>
    `
})

export const WithSize = () => ({
  components: { ZAvatarGroup, ZAvatar },
  template: `<div class='padded-container'>
      <z-avatar-group size="xl">
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
      </z-avatar-group>
    </div>`
})

export const WithLimit = () => ({
  components: { ZAvatarGroup, ZAvatar },
  template: `
    <div class='padded-container'>
      <z-avatar-group class="p-2 text-vanilla-100 bg-dark" :limit="3">
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
      </z-avatar-group>
      <z-avatar-group class="p-2" :limit="3">
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
      </z-avatar-group>
    </div>
  `
})

export const WithUserNameOrImageOrSize = () => ({
  components: { ZAvatarGroup, ZAvatar },
  template: `
    <div class='padded-container'>
      <z-avatar-group class="p-2 text-vanilla-100 bg-dark" :limit="6">
        <z-avatar
          user-name="John Doe"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
        user-name="Tom Marvolo Riddle"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
      </z-avatar-group>
      <z-avatar-group class="p-2" :limit="3" size="xl">
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          user-name="Snoop Dogg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
        <z-avatar
          image="https://randomuser.me/api/portraits/women/24.jpg"
        ></z-avatar>
      </z-avatar-group>
    </div>
  `
})
