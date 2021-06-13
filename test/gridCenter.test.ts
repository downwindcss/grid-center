import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import { TailwindConfig } from 'tailwindcss/tailwind-config';
import gridCenterPlugin from '../src/gridCenter';

const defaultConfig = ({
  plugins: [gridCenterPlugin],
  // disalble core plugins: https://tailwindcss.com/docs/configuration#core-plugins
  corePlugins: [],
} as unknown) as TailwindConfig;

function generateTailwindCss(customConfig?: TailwindConfig) {
  const config = Object.assign(defaultConfig, customConfig);

  return postcss([tailwindcss(config)]).process('@tailwind utilities', {
    from: undefined,
  });
}

test('Default breakpoint inline snapshot', async () => {
  const utility = await generateTailwindCss();
  expect(utility.css).toMatchInlineSnapshot(`
    ".grid-center {
      display: grid;
      place-items: center
    }

    .grid-start {
      display: grid;
      place-items: start
    }

    .grid-end {
      display: grid;
      place-items: end
    }

    .grid-stretch {
      display: grid;
      place-items: stretch
    }

    @media (min-width: 640px) {
      .sm\\\\:grid-center {
        display: grid;
        place-items: center
      }

      .sm\\\\:grid-start {
        display: grid;
        place-items: start
      }

      .sm\\\\:grid-end {
        display: grid;
        place-items: end
      }

      .sm\\\\:grid-stretch {
        display: grid;
        place-items: stretch
      }
    }

    @media (min-width: 768px) {
      .md\\\\:grid-center {
        display: grid;
        place-items: center
      }

      .md\\\\:grid-start {
        display: grid;
        place-items: start
      }

      .md\\\\:grid-end {
        display: grid;
        place-items: end
      }

      .md\\\\:grid-stretch {
        display: grid;
        place-items: stretch
      }
    }

    @media (min-width: 1024px) {
      .lg\\\\:grid-center {
        display: grid;
        place-items: center
      }

      .lg\\\\:grid-start {
        display: grid;
        place-items: start
      }

      .lg\\\\:grid-end {
        display: grid;
        place-items: end
      }

      .lg\\\\:grid-stretch {
        display: grid;
        place-items: stretch
      }
    }

    @media (min-width: 1280px) {
      .xl\\\\:grid-center {
        display: grid;
        place-items: center
      }

      .xl\\\\:grid-start {
        display: grid;
        place-items: start
      }

      .xl\\\\:grid-end {
        display: grid;
        place-items: end
      }

      .xl\\\\:grid-stretch {
        display: grid;
        place-items: stretch
      }
    }

    @media (min-width: 1536px) {
      .\\\\32xl\\\\:grid-center {
        display: grid;
        place-items: center
      }

      .\\\\32xl\\\\:grid-start {
        display: grid;
        place-items: start
      }

      .\\\\32xl\\\\:grid-end {
        display: grid;
        place-items: end
      }

      .\\\\32xl\\\\:grid-stretch {
        display: grid;
        place-items: stretch
      }
    }"
  `);
});

test('Custom breakpoint testing', async () => {
  const customBreakpoints = ({
    theme: {
      extend: {
        screens: {
          sm: '111px',
          md: '222px',
          lg: '333px',
          xl: '444px',
          '2xl': '555px',
          desktop: '1080px',
        },
      },
    },
  } as unknown) as TailwindConfig;

  const utility = await generateTailwindCss(customBreakpoints);
  expect(utility.css).toMatchInlineSnapshot(`
    ".grid-center {
      display: grid;
      place-items: center
    }

    .grid-start {
      display: grid;
      place-items: start
    }

    .grid-end {
      display: grid;
      place-items: end
    }

    .grid-stretch {
      display: grid;
      place-items: stretch
    }

    @media (min-width: 111px) {
      .sm\\\\:grid-center {
        display: grid;
        place-items: center
      }

      .sm\\\\:grid-start {
        display: grid;
        place-items: start
      }

      .sm\\\\:grid-end {
        display: grid;
        place-items: end
      }

      .sm\\\\:grid-stretch {
        display: grid;
        place-items: stretch
      }
    }

    @media (min-width: 222px) {
      .md\\\\:grid-center {
        display: grid;
        place-items: center
      }

      .md\\\\:grid-start {
        display: grid;
        place-items: start
      }

      .md\\\\:grid-end {
        display: grid;
        place-items: end
      }

      .md\\\\:grid-stretch {
        display: grid;
        place-items: stretch
      }
    }

    @media (min-width: 333px) {
      .lg\\\\:grid-center {
        display: grid;
        place-items: center
      }

      .lg\\\\:grid-start {
        display: grid;
        place-items: start
      }

      .lg\\\\:grid-end {
        display: grid;
        place-items: end
      }

      .lg\\\\:grid-stretch {
        display: grid;
        place-items: stretch
      }
    }

    @media (min-width: 444px) {
      .xl\\\\:grid-center {
        display: grid;
        place-items: center
      }

      .xl\\\\:grid-start {
        display: grid;
        place-items: start
      }

      .xl\\\\:grid-end {
        display: grid;
        place-items: end
      }

      .xl\\\\:grid-stretch {
        display: grid;
        place-items: stretch
      }
    }

    @media (min-width: 555px) {
      .\\\\32xl\\\\:grid-center {
        display: grid;
        place-items: center
      }

      .\\\\32xl\\\\:grid-start {
        display: grid;
        place-items: start
      }

      .\\\\32xl\\\\:grid-end {
        display: grid;
        place-items: end
      }

      .\\\\32xl\\\\:grid-stretch {
        display: grid;
        place-items: stretch
      }
    }

    @media (min-width: 1080px) {
      .desktop\\\\:grid-center {
        display: grid;
        place-items: center
      }

      .desktop\\\\:grid-start {
        display: grid;
        place-items: start
      }

      .desktop\\\\:grid-end {
        display: grid;
        place-items: end
      }

      .desktop\\\\:grid-stretch {
        display: grid;
        place-items: stretch
      }
    }"
  `);
});
