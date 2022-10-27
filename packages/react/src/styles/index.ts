import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, space } from "@caio-ui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const { 
    styled, css, globalCss, keyframes, getCssText, theme, createTheme, config
 } = createStitches({

    themeMap: {
        ...defaultThemeMap,
        height: 'space',
        width: 'space'
    },

    theme: {
        colors,
        fontSizes,
        fontWeights,
        lineHeights,
        radii,
        space,
        fonts,
    },
})