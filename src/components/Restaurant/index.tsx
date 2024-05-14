import { Link } from 'react-router-dom'

import estrela from '../../assets/images/estrela.png'

import {
  Card,
  CardContainer,
  TitleContainer,
  Title,
  NotaContainer,
  Nota,
  Description,
  Infos,
  TagContainer,
  ReadMore
} from './styles'

type RestaurantProps = {
  id: number | undefined
  image: string
  title: string
  number: number
  description: string
  button: string
  tipo: string
  destacado: boolean
}

const Restaurant = ({
  id,
  image,
  title,
  number,
  description,
  tipo,
  destacado
}: RestaurantProps) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {destacado === true ? (
        <TagContainer>Destaque da semana</TagContainer>
      ) : null}
      <TagContainer>{tipo}</TagContainer>
    </Infos>
    <CardContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <NotaContainer>
          <Nota>{number}</Nota>
          <img src={estrela} alt="Estrela" />
        </NotaContainer>
      </TitleContainer>
      <Description>{description}</Description>
      <ReadMore>
        <Link
          style={{ textDecoration: 'none', color: '#FFEBD9' }}
          to={`cardapio/${id}`}
        >
          Saiba mais
        </Link>
      </ReadMore>
    </CardContainer>
  </Card>
)

export default Restaurant
