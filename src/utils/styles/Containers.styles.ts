import styled from 'styled-components'
import { IFlexContainer, IGridContainer } from './Utils.interface'

const Wrapper = styled.div`
  max-width: 1380px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  padding: 0 25px;
`

const SmallContainer = styled.div`
  max-width: 1130px;
  margin: 0 auto;
`

const GridContainer = styled.div<IGridContainer>`
  display: grid;
  grid-template-columns: repeat(${({ columns = 0 }) => columns}, 1fr);
  column-gap: ${({ columnGap = 12}) => columnGap + 'px'};
  margin-bottom: ${({ rowGap = 20 }) => rowGap + 'px'};
  align-items: center;
`

const FlexContainer = styled.div<IFlexContainer>`
  display: flex;
  column-gap: ${({ columnGap = 12}) => columnGap + 'px'};
  margin-bottom: ${({ rowGap = 20 }) => rowGap + 'px'};
  align-items: center;
  > * {
    width: 100%;
  }
`

export { Wrapper, SmallContainer, GridContainer, FlexContainer }
