import { ButtonContainer, ButtonLink } from './styles'

export type ButtonProps = {
  type: 'button' | 'link'
  title: string
  to: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secundary'
}
const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary'
}: ButtonProps) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        variant={variant}
        to=""
        type="button"
        title={title}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink to={to} title={title}>
      {children}
    </ButtonLink>
  )
}
export default Button
