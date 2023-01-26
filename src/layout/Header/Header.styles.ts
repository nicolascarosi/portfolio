import styled from 'styled-components'
import { breakpoints } from 'theme'

const StyledHeader = styled.header`
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
  .logo {
      background-color: var(--black);
      height: 80px;
      padding: 15px;
      border-radius: 50%;
      display: flex;
  }
  @media (min-width: ${breakpoints.screenSm}) {
    box-shadow: 0px 2px 0 var(--gray-800);
    backdrop-filter: blur(5px);
    transition: transform 600ms;
    background-color: var(--no-scrolled-black);
  }
  @media (max-width: ${breakpoints.screenSm}) {
    position: absolute;
  }
`


export { StyledHeader }
