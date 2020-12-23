import ZContent from './ZContent.vue'

export default {
  title: 'Zeal/Marketing/Content Layout',
  component: ZContent,
  excludeStories: /.*Data$/
}

export const Basic = () => ({
  components: { ZContent },
  template: `<div class='padded-container bg-dark'>
      <z-content
        title="Ornare id libero vel leo tincidunt semper."
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices consequat id mauris condimentum libero. Ipsum feugiat gravida ultrices proin purus accumsan ac."
        author="John Doe Williams"
        date="February 29, 2020"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis commodo semper nunc, laoreet facilisis scelerisque enim metus. Condimentum etiam pretium amet, at ac risus non. Consectetur lacus enim purus nunc, ac sit duis tristique iaculis. Urna, blandit neque, facilisis mattis bibendum. Tempor fames elit lacus tempor, ut nunc semper. Non quis nunc vel mus viverra nascetur. Lobortis sed aliquam gravida venenatis.<br/>
        Id ullamcorper elementum, orci at. Turpis consectetur nam dis enim, luctus molestie nisl, imperdiet. Lobortis sit amet, ullamcorper eget bibendum ipsum. Sem eget orci vel in purus adipiscing id consequat. In proin est blandit suspendisse. Viverra nunc turpis hendrerit vestibulum, lorem molestie. Vitae id habitant vitae scelerisque elit fusce egestas donec lorem. Sit in tortor, urna gravida. Dictum netus donec a adipiscing arcu. Luctus morbi nisl ornare vestibulum.
      </z-content>
    </div>`
})
