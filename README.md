v# @downwindcss/grid-center

Tailwind CSS utilities for placing items.

Instead of
1. `grid place-items-center`, do `grid-center`
1. `grid place-items-start`, do `grid-start`
1. `grid place-items-end`, do `grid-end`
1. `grid place-items-stretch`, do `grid-stretch`

This does more than "centering" items but named as `@downwindcss/grid-center`  
to match existing flex utility [@downwindcss/flex-center](https://github.com/downwindcss/flex-center).

## Installation

```bash
npm install @downwindcss/grid-center

# using Yarn
yarn add @downwindcss/grid-center

# with PNPM
pnpm install @downwindcss/grid-center
```

## Configuration

In your Tailwind CSS configuration file, tailwindcss.config.js,
add the plugin after following the installation step above.

module.exports = {
  plugins: [require('@downwindcss/grid-center')]
}
Only responsive variant is enabled by default.
Same as `place-items-*` utility: https://tailwindcss.com/docs/place-items#variants

## Example

**Demo**: https://codesandbox.io/s/grid-center-demo-s7puu?file=/public/index.html

```html
<article>
  <h2 class="text-center py-8 text-4xl font-semibold">grid-center</h2>
  <!--           👇                                   -->
  <div class="grid-center grid-cols-3 gap-2 h-48 w-full">
    <!-- list of divs... -->
  </div>
</article>
<article>
  <h2 class="text-center py-8 text-4xl font-semibold">grid-center</h2>
  <!--           👇                                   -->
  <div class="grid-start grid-cols-3 gap-2 h-48 w-full">
    <!-- list of divs... -->
  </div>
</article>
<article>
  <h2 class="text-center py-8 text-4xl font-semibold">grid-center</h2>
  <!--           👇                                   -->
  <div class="grid-end grid-cols-3 gap-2 h-48 w-full">
    <!-- list of divs... -->
  </div>
</article>
<article>
  <h2 class="text-center py-8 text-4xl font-semibold">grid-center</h2>
  <!--           👇                                   -->
  <div class="grid-stretch grid-cols-3 gap-2 h-48 w-full">
    <!-- list of divs... -->
  </div>
</article>
```

## Motivation

A reddit user, [u/tortus](https://www.reddit.com/user/tortus/) left a ([comment](https://www.reddit.com/r/tailwindcss/comments/nyqo31/flexcenter_utility_downwindcssflexcenter/h1movvi/?utm_source=reddit&utm_medium=web2x&context=3)) for `grid place-items-center`.

