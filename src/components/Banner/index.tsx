import { useParams } from 'react-router-dom'

import { Image, Text, Title, Container } from './styles'
import { useGetBannerQuery } from '../../services/api'

type BannerParams = {
  id: string
}

const Banner = () => {
  const { id } = useParams() as BannerParams
  const { data: restaurant } = useGetBannerQuery(id)

  return (
    <Image style={{ backgroundImage: `url(${restaurant?.capa})` }}>
      <div className="container">
        <Container>
          <div>
            <Text>{restaurant?.tipo}</Text>
          </div>
          <div>
            <Title>{restaurant?.titulo}</Title>
          </div>
        </Container>
      </div>
    </Image>
  )
}

export default Banner
