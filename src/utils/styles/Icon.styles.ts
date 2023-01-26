import styled, { css } from 'styled-components'
import { IIcon } from './Utils.interface'

const getIconStyle = (icon: string, width = 18, height = 18, color = 'white') => {
  return css`
    mask-image: url(${icon});
    mask-repeat: no-repeat;
    mask-size: 100%;
    display: block;
    width: ${width + 'px'};
    height: ${height + 'px'};
    background-color: ${'var(--' + color + ')'};
  `
}

const Icon = styled.i<IIcon>`
  &::after {
    content: '';
    ${({icon, width, height, color}) => getIconStyle(icon, width, height, color)};
  }
`

export { Icon, getIconStyle }
