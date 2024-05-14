import { Restaurant } from '../../pages/Home'
import Restaurante from '../Restaurant'
import { Container, List } from './styles'

export type RestaurantListProps = {
  comercios: Restaurant[]
}

const RestaurantList = ({ comercios }: RestaurantListProps) => (
  <Container className="container">
    <div>
      <List>
        {comercios.map((comercio) => (
          <li key={comercio.id}>
            <Restaurante
              id={comercio.id}
              tipo={comercio.tipo}
              image={comercio.capa}
              title={comercio.titulo}
              number={comercio.avaliacao}
              destacado={comercio.destacado}
              description={comercio.descricao}
              button={comercio.button}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantList
