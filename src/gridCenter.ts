const plugin = require('tailwindcss/plugin')

function gridCenter({ addUtilities }: { addUtilities: any }) {
  const utilities = {
    '.grid-center': {
      display: 'grid',
      'place-items': 'center',
    },
    '.grid-start': {
      display: 'grid',
      'place-items': 'start',
    },
    '.grid-end': {
      display: 'grid',
      'place-items': 'end',
    },
    '.grid-stretch': {
      display: 'grid',
      'place-items': 'stretch',
    },
  }
  // Same as 'place-items': https://tailwindcss.com/docs/place-items#variants
  const variants = ['responsive']
  addUtilities(utilities, { variants })
}

export default plugin(gridCenter);