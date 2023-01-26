import styled, { css } from 'styled-components'
import { IColor } from 'interfaces'
import { colors, getDarkColor,  getTextColor } from 'theme'
import { IButton } from './Button.interface'
import { fontSize } from 'utils'

const variants = (color: IColor, disabled = false) => {
  const btnColor = disabled ? 'gray-700' : color
  const disabledHover = (border: boolean = true) => css`
    &:hover {
      cursor: not-allowed;
      border: ${border ? '1px solid var(--gray-700)' : 'none'};
    }
  `
  const text = btnColor === 'primary-inverted' ? '#3865B8' : getTextColor(btnColor);
  const normal = btnColor === 'primary-inverted' ? '#FFF' : colors[btnColor];
  const auxBorder = btnColor === 'primary-inverted' ? '#3865B8' : colors[btnColor];
  const dark = disabled ? colors['gray-500'] : getDarkColor(btnColor);
  return {
    default: css`
      background-color: ${normal};
      border-color: ${auxBorder};
      color: ${text};
      &:hover {
        ${disabled
          ? disabledHover()
          : css`
              background-color: ${dark};
              border-color: ${dark};
            `}
      }
    `,
    outline: css`
      background-color: transparent;
      color: ${normal};
      &:hover {
        ${disabled
          ? disabledHover()
          : css`
              color: ${dark};
              border-color: ${dark};
            `}
      }
    `,
  }
}

const StyledButton = styled.button<IButton>`
  ${fontSize(20)}
  border-radius: 2px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
  user-select: none;
  position: relative;
  padding: ${({ label }) => (label ? '10px 26px' : '10px 10px')};
  width: ${({ block }) => (block ? '100%' : 'auto')};
  cursor: ${({ isLoading }) => (isLoading ? 'normal' : 'pointer')};
  pointer-events: ${({ isLoading }) => (isLoading ? 'none' : 'auto')};
  &:hover {
    border: 1px solid;
  }
  span {
    transition: opacity 0.2s ease-in-out;
    opacity: ${({ isLoading }) => (isLoading ? '0' : '1')};
  }
  ${({ variant = 'default', color = 'primary', disabled }) =>
    variants(color, disabled)[variant]}
`

const StyledLink = styled(StyledButton).attrs({
  as: 'a',
})``

const StyledLoading = styled.div<IButton>`
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  transition: opacity 0.2s ease-in-out;
  opacity: ${({ isLoading }) => (isLoading ? '1' : '0')};
  .bounce1,
  .bounce2,
  .bounce3 {
    width: 12px;
    height: 12px;
    background-color: var(--white);
    border-radius: 100%;
    display: inline-block;
    animation: btn-spinner 1.4s infinite ease-in-out both;
  }
  .bounce1 {
    animation-delay: -0.32s;
  }
  .bounce2 {
    animation-delay: -0.16s;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      &:hover {
        cursor: not-allowed;
      }
    `}
`

export { StyledButton, StyledLink, StyledLoading }
