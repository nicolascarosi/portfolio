import styled from 'styled-components'
import { breakpoints } from 'theme'
import { fontSize } from 'utils'

const StyledMenu = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    column-gap: 80px;
    height: 100%;
  }
  .social-media {
    display: flex;
    column-gap: 20px;
    padding: 0 10px;
    a {
      transition: transform 300ms;
      &:hover {
        transform: scale(1.15);
      }
      img {
        width: 32px;
        height: 32px;
      }
      &:last-child {
        img {
          width: 30px;
          height: 30px;
          margin-top: 1px;
        }
      }
    }
  }
  @media (max-width: ${breakpoints.screenLg}) {
    ul {
      column-gap: 40px;
    }
  }
  @media (max-width: ${breakpoints.screenMd}) {
    ul {
      column-gap: 20px;
    }
  }
  @media (max-width: ${breakpoints.screenSm}) {
    ul {
      display: none;
    }
  }
`

const StyledMenuItem = styled.li`
  a {
    ${fontSize(14, 400)};
    padding: 0 10px;
    height: var(--header-height);
    display: flex;
    align-items: center;
    transition: box-shadow 300ms;
    color: currentColor;
    text-decoration: none;
    &:hover {
      box-shadow: 0 2px 0 var(--primary-dark);
    }
  }
`


export { StyledMenu, StyledMenuItem }
