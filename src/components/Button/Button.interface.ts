import { IButtonVariant, IColor } from 'interfaces'

interface IButton {
  color?: IColor
  variant?: IButtonVariant
  disabled?: boolean
  href?: string
  label?: string
  isLoading?: boolean
  block?: boolean
  onClick?: () => void
  icon?: string
  formId?: string
}

export type { IButton }
