import ZContentCard from './ZContentCard.vue'
import ZContentCardItem from './../ZContentCardItem/ZContentCardItem.vue'

export default {
  title: 'Zeal Marketing/Content Card',
  component: ZContentCard,
  excludeStories: /.*Data$/
}

export const LeftAligned = () => ({
  components: { ZContentCard, ZContentCardItem },
  template: `<div class='padded-container bg-ink-400 text-vanilla-400 grid grid-cols-12'>
      <z-content-card class="col-span-8" img="https://imgur.com/ZiHtp5p.png" index="1" colorScheme="seaglass" cardAlign="left">
        <template slot="heading">Code Quality</template>
        <template slot="links">
          <z-content-card-item index="1">Blandit quisque metus blandit massa.</z-content-card-item>
          <z-content-card-item index="2">Parturient ac sed augue nisl proin.</z-content-card-item>
          <z-content-card-item index="3">Ultrices tellus sagittis integer nec.</z-content-card-item>
          <z-content-card-item index="4">Sit sociis sed convallis vitae nunc id.</z-content-card-item>
          <z-content-card-item index="5">Luctus dictum ultrices sit convallis.</z-content-card-item>
          <z-content-card-item index="6">Nulla eleifend porttitor habitasse.</z-content-card-item>
        </template>
      </z-content-card>
    </div>`
})

export const RightAligned = () => ({
  components: { ZContentCard, ZContentCardItem },
  template: `<div class='padded-container bg-ink-400 text-vanilla-400 grid grid-cols-12'>
      <z-content-card class="col-span-8" img="https://imgur.com/ZiHtp5p.png" index="1" colorScheme="flamingo" cardAlign="right">
        <template slot="heading">Better code in Go</template>
        <template slot="links">
          <z-content-card-item index="1" accentColor="lilac">Blandit quisque metus blandit massa.</z-content-card-item>
          <z-content-card-item index="2" accentColor="lilac">Parturient ac sed augue nisl proin.</z-content-card-item>
          <z-content-card-item index="3" accentColor="lilac">Ultrices tellus sagittis integer nec.</z-content-card-item>
          <z-content-card-item index="4" accentColor="lilac">Sit sociis sed convallis vitae nunc id.</z-content-card-item>
          <z-content-card-item index="5" accentColor="lilac">Luctus dictum ultrices sit convallis.</z-content-card-item>
          <z-content-card-item index="6" accentColor="lilac">Nulla eleifend porttitor habitasse.</z-content-card-item>
        </template>
      </z-content-card>
    </div>`
})

export const CardStack = () => ({
  components: { ZContentCard, ZContentCardItem },
  template: `<div class='padded-container bg-ink-400 text-vanilla-400 grid grid-cols-12'>
      <z-content-card class="col-span-8" img="https://imgur.com/ZiHtp5p.png" index="1" colorScheme="seaglass" cardAlign="left">
        <template slot="heading">Code Quality</template>
        <template slot="links">
          <z-content-card-item index="1">Blandit quisque metus blandit massa.</z-content-card-item>
          <z-content-card-item index="2">Parturient ac sed augue nisl proin.</z-content-card-item>
          <z-content-card-item index="3">Ultrices tellus sagittis integer nec.</z-content-card-item>
          <z-content-card-item index="4">Sit sociis sed convallis vitae nunc id.</z-content-card-item>
          <z-content-card-item index="5">Luctus dictum ultrices sit convallis.</z-content-card-item>
          <z-content-card-item index="6">Nulla eleifend porttitor habitasse.</z-content-card-item>
        </template>
      </z-content-card>
      <z-content-card class="col-span-8" img="https://imgur.com/ZiHtp5p.png" index="2" colorScheme="flamingo" cardAlign="right">
        <template slot="heading">Better code in Go</template>
        <template slot="links">
          <z-content-card-item index="1" accentColor="lilac">Blandit quisque metus blandit massa.</z-content-card-item>
          <z-content-card-item index="2" accentColor="lilac">Parturient ac sed augue nisl proin.</z-content-card-item>
          <z-content-card-item index="3" accentColor="lilac">Ultrices tellus sagittis integer nec.</z-content-card-item>
          <z-content-card-item index="4" accentColor="lilac">Sit sociis sed convallis vitae nunc id.</z-content-card-item>
          <z-content-card-item index="5" accentColor="lilac">Luctus dictum ultrices sit convallis.</z-content-card-item>
          <z-content-card-item index="6" accentColor="lilac">Nulla eleifend porttitor habitasse.</z-content-card-item>
        </template>
      </z-content-card>
      <z-content-card class="col-span-8" img="https://imgur.com/ZiHtp5p.png" index="3" colorScheme="dawn" cardAlign="left">
        <template slot="heading">Code Quality</template>
        <template slot="links">
          <z-content-card-item index="1" accentColor="honey">Blandit quisque metus blandit massa.</z-content-card-item>
          <z-content-card-item index="2" accentColor="honey">Parturient ac sed augue nisl proin.</z-content-card-item>
          <z-content-card-item index="3" accentColor="honey">Ultrices tellus sagittis integer nec.</z-content-card-item>
          <z-content-card-item index="4" accentColor="honey">Sit sociis sed convallis vitae nunc id.</z-content-card-item>
          <z-content-card-item index="5" accentColor="honey">Luctus dictum ultrices sit convallis.</z-content-card-item>
          <z-content-card-item index="6" accentColor="honey">Nulla eleifend porttitor habitasse.</z-content-card-item>
        </template>
      </z-content-card>
    </div>`
})
