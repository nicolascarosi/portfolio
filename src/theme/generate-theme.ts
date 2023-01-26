import { lightTheme } from './light-theme'

const generateTheme = (theme: 'light'): string => {
  const themeColors = lightTheme
  return Object.keys(themeColors)
    .map((prop) => {
      return `--${prop}:${themeColors[prop]};`
    })
    .join('\r\n')
}

export { generateTheme }
