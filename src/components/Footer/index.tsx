import {
  FooterContainer,
  FooterLayout,
  FooterText,
  Footerlink,
  Footerlinks
} from './styles'

import Logo from '../../assets/images/logo.svg'
import insta from '../../assets/images/insta.svg'
import face from '../../assets/images/face.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <FooterLayout>
    <FooterContainer>
      <img src={Logo} alt="logo" />
      <Footerlinks>
        <Footerlink>
          <img src={insta} alt="logo instagram" />
        </Footerlink>
        <Footerlink>
          <img src={face} alt="logo facebook" />
        </Footerlink>
        <Footerlink>
          <img src={twitter} alt="logo X/twitter" />
        </Footerlink>
      </Footerlinks>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </FooterText>
    </FooterContainer>
  </FooterLayout>
)

export default Footer
