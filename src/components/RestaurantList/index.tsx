import FoodType from '../../models/FoodType'
import Restaurant from '../Restaurant'
import { Title } from '../Restaurant/styles'
import { List, ListContainer } from './styles'

export type RestaurantListProps = {
  title: string
  types: FoodType[]
}
const RestaurantsList = ({ title, types }: RestaurantListProps) => (
  <>
    <div className="container">
      <ListContainer>
        <Title>{title}</Title>
        <List>
          {types.map((type) => (
            <Restaurant
              key={type.id}
              title={type.title}
              category={type.category}
              score={type.score}
              description={type.description}
              infos={type.infos}
              image={type.image}
              star={type.star}
            />
          ))}
        </List>
      </ListContainer>
    </div>
  </>
)

export default RestaurantsList
