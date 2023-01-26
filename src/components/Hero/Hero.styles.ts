import styled from 'styled-components'
import { fontSize } from 'utils'
import { breakpoints } from 'theme'

const StyledHero = styled.section`
  padding: 80px 0 40px;
  min-height: 700px;
  display: flex;
  align-items: center;
  background-image: linear-gradient(135deg, rgba(250,251,253,0.1) 0%, rgba(250,251,253,0) 20%, rgba(245,245,247,0) 50%, rgba(245,245,247,0) 100%);
  .image {
    position: absolute;
    top: -170px;
    right: -160px;
    img {
      min-height: 928px;
      object-fit: contain;
    }
    
  }
  @media (max-width: ${breakpoints.screenLg}) {
    .image {
      right: -300px;
      img {
        opacity: .3;
      }
    }
  }
  @media (max-width: ${breakpoints.screenMd}) {
    min-height: 600px;
    padding: 80px 0 0;
    .image {
      img {
        min-height: 800px;
      }
    }
  }
  @media (max-width: ${breakpoints.screenSm}) {
    padding: 120px 0 0;
    .square-before {
      &::before {
        width: 50px;
        height: 235px;
        left: -10px;
      }
    }
  }
`

const StyledHeroContainer = styled.div`
  width: 60%;
  position: relative;
  z-index: 50;
  .info {
    color: var(--white);
    position: relative;
    h1 {
      ${fontSize(52, 600, 60)};
    }
    small {
      display: block;
      ${fontSize(18, 400)};
      margin-top: 8px;
      color: var(--gray-700);
    }
    > p {
      margin-top: 50px;
      ${fontSize(16, 400, 30)};
      color: var(--gray-400);
      max-width: 80%;
    }
  }
  @media (max-width: ${breakpoints.screenLg}) {
    width: 75%;
  }
  @media (max-width: ${breakpoints.screenMd}) {
    width: 100%;
    .info {
      h1 {
        ${fontSize(40, 600, 56)};
      }
      > p {
        max-width: 90%;
      }
    }
  }
`

export { StyledHero, StyledHeroContainer }
