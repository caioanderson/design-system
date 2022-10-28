import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark
  },
  options: {
    storySort: {
      order: ['Tokens', ['Start', 'Colors', 'FontWeights', 'FontSize', 'Font', 'LineHeights', 'Radii']],
    },
  },
}