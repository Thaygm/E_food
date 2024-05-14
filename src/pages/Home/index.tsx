import Header from '../../components/Header'
import Loader from '../../components/Loader'
import RestaurantList from '../../components/RestaurantList'
import { useGetRestaurantsQuery } from '../../services/api'

export type Restaurant = {
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  capa: string
  button: string
  destacado: boolean
  tipo: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Header />
        <RestaurantList comercios={restaurants} />
      </>
    )
  }

  return <Loader />
}

export default Home
