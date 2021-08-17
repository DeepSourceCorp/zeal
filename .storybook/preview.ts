import '../src/assets/css/tailwind.css'
import '../src/assets/css/typography.css'
import '../src/assets/css/layout.css'
import './css/story.css'

// Configure Custom Background color for storybook
export const parameters = {
  backgrounds: {
    default: 'Ink 400',
    values: [
      {
        name: 'Ink 400',
        value: '#16181d'
      },
      {
        name: 'Light',
        value: '#F8F8F8'
      }
    ]
  }
}
