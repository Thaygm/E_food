import { BottomCard, Card, CardHeader, Description, Title } from './styles'
import Button from '../Button'

type ProductsProps = {
  title: string
  description: string
  image: string
}

const Products = ({ title, description, image }: ProductsProps) => (
  <Card>
    <img src={image} alt={title} />
    <BottomCard>
      <CardHeader>
        <Title>{title}</Title>
      </CardHeader>
      <Description>{description}</Description>
      <Button
        variant="secundary"
        to="/product"
        type={'button'}
        title={'Adicione ao carrinho'}
      >
        Adicionar ao carrinho
      </Button>
    </BottomCard>
  </Card>
)

export default Products
