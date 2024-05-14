import { Link } from 'react-router-dom'

import { FooterContainer, TaxContainer, Description } from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="Efood" />
      </Link>
      <TaxContainer>
        <img src={instagram} alt="Instagram" />
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
      </TaxContainer>
      <div>
        <Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Description>
      </div>
    </div>
  </FooterContainer>
)

export default Footer
