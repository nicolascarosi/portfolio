import styled, { css } from 'styled-components'
import { breakpoints } from 'theme'
import { IStyledProjectItem } from './Projects.interface'

const StyledProjects = styled.section`
  padding: 40px 0;
`

const StyledProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: ${breakpoints.screenLg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${breakpoints.screenSm}) {
    gap: 5px;
  }
`

const StyledProjectItem = styled.a<IStyledProjectItem>`
  --transition-duration: 300ms;
  display: flex;
  position: relative;
  overflow: hidden;
  .project-photo {
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 0.8;
    ${({bgColor, bgImage}) => {
      if (bgColor) return css`background-color: ${bgColor};`
      if (bgImage) return css`
        background-image: url(${bgImage});
        background-size: cover;
      `
    }}
    img {
      transition: transform var(--transition-duration) ease-out;
      width: 100%;
      object-fit: contain;
      padding: 0 80px;
      max-height: 250px;
      @media (max-width: ${breakpoints.screenMd}) {
        padding: 0 40px;
      }
      @media (max-width: ${breakpoints.screenSm}) {
        padding: 0 20px;
      }
    }
  }
  &:hover {
    .project-photo {
      img {
        transform: scale(1.05);
      }
    }
  }
`

export { StyledProjects, StyledProjectsContainer, StyledProjectItem }
