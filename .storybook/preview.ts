import { configure } from '@storybook/vue'

import '../dist/tailwind.css'
import '../dist/typography.css'
import '../dist/layout.css'
import './css/story.css'

configure(require.context('../src', true, /\.stories\.js$/), module)
