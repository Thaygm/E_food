import logo from '../../assets/images/logo.svg'
import { ProductContainer, ProductLayout, ProductText } from './styles'

const ProductHeader = () => (
  <ProductLayout>
    <div className="container">
      <ProductContainer>
        <ProductText>Restaurantes</ProductText>
        <img src={logo} alt="logo principal" />
        <ProductText>0 produto(s) no carrinho</ProductText>
      </ProductContainer>
    </div>
  </ProductLayout>
)

export default ProductHeader
