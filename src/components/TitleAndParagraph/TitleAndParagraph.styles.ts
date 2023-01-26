import styled from 'styled-components'
import { breakpoints } from 'theme'
import { fontSize, Wrapper } from 'utils'

const StyledTitleAndParagraph = styled.div`
  margin-bottom: 74px;
  ${Wrapper} {
    display: flex;
  }
  h2 {
    ${fontSize(50, 600)};
    
  }
  p {
    margin-top: 10px;
    ${fontSize(24)};
  }
  @media (max-width: ${breakpoints.screenMd}) {
    margin-bottom: 44px;
    h2 {
      ${fontSize(38, 600)};
    }
  }
`

export { StyledTitleAndParagraph }
