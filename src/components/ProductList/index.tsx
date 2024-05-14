import { Prato } from '../../pages/Categories'
import Products from '../Products'
import { Container, List } from './styles'

export type ProductListProps = {
  pratos: Prato[]
}

const ProductList = ({ pratos }: ProductListProps) => (
  <Container className="container">
    <div>
      <List>
        {pratos.map((prato) => (
          <li key={prato.id}>
            <Products
              id={prato.id}
              foto={prato.foto}
              nome={prato.nome}
              descricao={prato.descricao}
              porcao={prato.porcao}
              preco={prato.preco}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
