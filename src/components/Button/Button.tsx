import { IButton } from './Button.interface'
import { StyledButton, StyledLink, StyledLoading } from './Button.styles'
import { Icon } from 'utils'

const Button = (
  props: IButton = {
    color: 'primary',
    variant: 'default',
    label: '',
    isLoading: false,
    block: false,
    formId: ''
  }
) => {
  const { href, label, isLoading, icon, formId } = props

  const Loading = () => (
    <StyledLoading {...props} className="loading">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </StyledLoading>
  )

  if (href) {
    return (
      <StyledLink {...props}>
        <span>
          {icon ? <Icon icon={icon} /> : ''}
          {label ? label : ''}
        </span>
        {isLoading && Loading()}
      </StyledLink>
    )
  } else {
    return (
      <StyledButton {...props} type={formId ? 'submit' : 'button'} form={formId}>
        <span>
          {icon ? <Icon icon={icon} /> : ''}
          {label ? label : ''}
        </span>
        {isLoading && Loading()}
      </StyledButton>
    )
  }
}

export { Button }
