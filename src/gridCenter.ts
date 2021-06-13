const plugin = require('tailwindcss/plugin')

function gridCenter({ addUtilities }: { addUtilities: any }) {
  const placementList = ['center', 'start', 'end', 'stretch'];
  const utilities = Object.fromEntries(
    placementList.map(placement => ([
      `.grid-${placement}`, { display: 'grid', 'place-items': placement }
    ]))
  )

  // Same as 'place-items': https://tailwindcss.com/docs/place-items#variants
  const variants = ['responsive']
  addUtilities(utilities, { variants })
}

export default plugin(gridCenter);