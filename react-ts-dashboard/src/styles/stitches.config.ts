import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme: defaultTheme,
  createTheme,
  config,
} = createStitches({
    theme: {
        colors: {
            primary: '#1B1F38',
            secondary: '#252A48',
            tertiary: '#313862',
            
            white: '#FFFFFF',
            black: '#000000',
            gray: '#BFBFBF',
            
            success: '#4E41F0 ',
            info: '#F7931B',
            warning: '#E44C4E',
        }
    }
});