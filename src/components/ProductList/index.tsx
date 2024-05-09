import ProductType from '../../models/ProductType'
import Products from '../Products'
import { Title } from '../Restaurant/styles'
import { List, ListContainer } from './styles'

export type ProductListProps = {
  title: string
  types: ProductType[]
}
const RestaurantsList = ({ title, types }: ProductListProps) => (
  <>
    <div className="container">
      <ListContainer>
        <Title>{title}</Title>
        <List>
          {types.map((type) => (
            <Products
              key={type.id}
              title={type.title}
              description={type.description}
              image={type.image}
            />
          ))}
        </List>
      </ListContainer>
    </div>
  </>
)

export default RestaurantsList
