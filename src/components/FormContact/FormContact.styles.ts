import { StyledButton } from 'components/Button'
import styled from 'styled-components'
import { breakpoints } from 'theme'
import { fontSize } from 'utils'

const StyledFormContact = styled.footer`
  padding: 60px 0;
  margin-top: 80px;
  border-top: 1px solid var(--gray-900);
  background-color: var(--bg-form);
  .form-header {
    text-align: center;
    padding: 0 20%;
    h3 {
      ${fontSize(40, 600, 50)};
      margin-bottom: 24px;
    }
    p {
      ${fontSize(20, 400, 30)};
    }
  }
  @media (max-width: ${breakpoints.screenLg}) {
    margin-top: 40px;
    .form-header {
      padding: 0 10%;
      h3 {
        ${fontSize(34, 600, 45)};
      }
      p {
        ${fontSize(18, 400, 27)};
      }
    }
  }
  @media (max-width: ${breakpoints.screenMd}) {
    padding: 40px 0;
    .form-header {
      padding: 0 5%;
    }
  }
`

const StyledFormContactContainer = styled.form`
  display: grid;
  row-gap: 20px;
  padding: 0 20%;
  margin-top: 40px;
  ${StyledButton} {
    min-width: 250px;
    margin-left: auto;
  }
  @media (max-width: ${breakpoints.screenLg}) {
    padding: 0 10%;
  }
  @media (max-width: ${breakpoints.screenMd}) {
    padding: 0;
    ${StyledButton} {
      margin-left: 0;
    }
  }
`

export { StyledFormContact, StyledFormContactContainer }
