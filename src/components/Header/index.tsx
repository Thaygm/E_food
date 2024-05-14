import { HeaderContainer, Title } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderContainer>
    <div className="container">
      <div>
        <img src={logo} alt="Efood" />
      </div>
      <div>
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </div>
    </div>
  </HeaderContainer>
)

export default Header
