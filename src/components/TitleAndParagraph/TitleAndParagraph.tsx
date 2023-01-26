import { Wrapper } from 'utils'
import { ITitleAndParagraph } from './TitleAndParagraph.interface'
import { StyledTitleAndParagraph } from './TitleAndParagraph.styles'

const TitleAndParagraph = ({title, paragraph, square = false}: ITitleAndParagraph) => (
  <StyledTitleAndParagraph>
    <Wrapper>
      {square ?
        <div className="square-after">
          <h2>{title}</h2>
        </div>
      :
        <h2>{title}</h2>
      }
      {paragraph && <p>{paragraph}</p>}
    </Wrapper>
  </StyledTitleAndParagraph>
)

export { TitleAndParagraph }
