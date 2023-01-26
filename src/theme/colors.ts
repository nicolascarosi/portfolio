interface ColorTheme {
  [key: string]: string
}

const colors: ColorTheme = {
  'primary': '#ce2c2d',
  'primary-inverted': '#FFF',
  'primary-dark': '#b03231',
  'primary-light': '#1890FF',
  'info': '#02B9A5',
  'observation': '#FBC024',
  'warning': '#FF973D',
  'danger': '#E83131',
  'danger-light': '#FF6666',
  'success': '#4ad295',
  'success-dark': '#2c8b60',
  'success-light': '#a0e4c6',
  'disabled': '#CBCBCB',
  'gray-100': '#F7F7F7',
  'gray-200': '#DDDDDD',
  'gray-300': '#ABABAB',
  'gray-400': '#D9D9D9',
  'gray-500': '#ABABAB',
  'gray-600': '#7F7F7F',
  'gray-700': '#999999',
  'gray-800': '#141414',
  'gray-900': '#1e1e1e',
  'bg-black': '#1d1d1d',
  'bg-white': '#fefaf6',
  'black': '#000',
  'scrolled-black': '#000000c2',
  'no-scrolled-black': '#000000bd',
  'bg-form': '#121212',
  'white': '#e3e3e3'
}

const getColor = (color: string = 'primary') => {
  return `var(--${color})`
}

const getDarkColor = (color: string = 'primary') => {
  return getColor(`${color}-dark`)
}

const getLightColor = (color: string = 'primary') => {
  return getColor(`${color}-light`)
}

const getTextColor = (color: string = 'primary') => {
  const hexcolor = colors[color].replace('#', '')
  const [r, g, b] = [0, 2, 4].map((p) =>
    parseInt(hexcolor.substring(p, p + 2), 16)
  )

  return (r * 299 + g * 587 + b * 114) / 1000 >= 210
    ? 'var(--dark)'
    : 'var(--white)'
}

export type { ColorTheme }
export { colors, getColor, getDarkColor, getLightColor, getTextColor }
