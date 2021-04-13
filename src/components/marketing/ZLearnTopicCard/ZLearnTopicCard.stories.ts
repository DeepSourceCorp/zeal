import ZLearnTopicCard from './ZLearnTopicCard.vue'
import ZLearnTopicCardListItem from './../ZLearnTopicCardListItem/ZLearnTopicCardListItem.vue'

export default {
  title: 'Zeal Marketing/Learn Main Topic Card',
  component: ZLearnTopicCard,
  excludeStories: /.*Data$/
}

export const Basic = () => ({
  components: { ZLearnTopicCard, ZLearnTopicCardListItem },
  template: 
    `<div class='padded-container bg-ink-400 text-vanilla-400 grid grid-cols-12'>
      <z-learn-topic-card class="col-span-8" index="1" colorScheme="seaglass" cardAlign="left">
        <template slot="heading">Code Quality</template>
        <template slot="links">
          <z-learn-topic-card-list-item index="1">Blandit quisque metus blandit massa.</z-learn-topic-card-list-item>
          <z-learn-topic-card-list-item index="2">Parturient ac sed augue nisl proin.</z-learn-topic-card-list-item>
          <z-learn-topic-card-list-item index="3">Ultrices tellus sagittis integer nec.</z-learn-topic-card-list-item>
          <z-learn-topic-card-list-item index="4">Sit sociis sed convallis vitae nunc id.</z-learn-topic-card-list-item>
          <z-learn-topic-card-list-item index="5">Luctus dictum ultrices sit convallis.</z-learn-topic-card-list-item>
          <z-learn-topic-card-list-item index="6">Nulla eleifend porttitor habitasse.</z-learn-topic-card-list-item>
        </template>
      </z-learn-topic-card>
      <z-learn-topic-card class="col-span-8" index="2" colorScheme="flamingo" cardAlign="right">
        <template slot="heading">Better code in Go</template>
        <template slot="links">
          <z-learn-topic-card-list-item index="1" accentColor="lilac">Blandit quisque metus blandit massa.</z-learn-topic-card-list-item>
          <z-learn-topic-card-list-item index="2" accentColor="lilac">Parturient ac sed augue nisl proin.</z-learn-topic-card-list-item>
          <z-learn-topic-card-list-item index="3" accentColor="lilac">Ultrices tellus sagittis integer nec.</z-learn-topic-card-list-item>
          <z-learn-topic-card-list-item index="4" accentColor="lilac">Sit sociis sed convallis vitae nunc id.</z-learn-topic-card-list-item>
          <z-learn-topic-card-list-item index="5" accentColor="lilac">Luctus dictum ultrices sit convallis.</z-learn-topic-card-list-item>
          <z-learn-topic-card-list-item index="6" accentColor="lilac">Nulla eleifend porttitor habitasse.</z-learn-topic-card-list-item>
        </template>
      </z-learn-topic-card>
      <z-learn-topic-card class="col-span-8" index="3" colorScheme="dawn" cardAlign="left">
        <template slot="heading">Code Quality</template>
        <template slot="links">
          <z-learn-topic-card-list-item index="1" accentColor="honey">Blandit quisque metus blandit massa.</z-learn-topic-card-list-item>
          <z-learn-topic-card-list-item index="2" accentColor="honey">Parturient ac sed augue nisl proin.</z-learn-topic-card-list-item>
          <z-learn-topic-card-list-item index="3" accentColor="honey">Ultrices tellus sagittis integer nec.</z-learn-topic-card-list-item>
          <z-learn-topic-card-list-item index="4" accentColor="honey">Sit sociis sed convallis vitae nunc id.</z-learn-topic-card-list-item>
          <z-learn-topic-card-list-item index="5" accentColor="honey">Luctus dictum ultrices sit convallis.</z-learn-topic-card-list-item>
          <z-learn-topic-card-list-item index="6" accentColor="honey">Nulla eleifend porttitor habitasse.</z-learn-topic-card-list-item>
        </template>
      </z-learn-topic-card>
    </div>`
})
