import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Prato } from '../../pages/Categories'
import { add, open } from '../../store/reducers/cart'

import fechar from '../../assets/images/close.png'

import {
  Image,
  Card,
  CardContainer,
  TitleContainer,
  Title,
  Description,
  BotaoAdd,
  Modal,
  ModalContent,
  InfosContainer
} from './styles'

type ModalState = {
  isVisible: boolean
}

export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Products = ({ foto, nome, descricao, porcao, preco, id }: Prato) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const getDescription = (descricao: string) => {
    if (descricao.length > 120) {
      return descricao.slice(0, 117) + '...'
    }
    return descricao
  }

  const prato = {
    foto,
    nome,
    descricao,
    porcao,
    preco,
    id
  }

  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(prato))
    dispatch(open())
  }

  return (
    <Card>
      <Image src={foto} alt={nome} />
      <CardContainer>
        <TitleContainer>
          <Title>{nome}</Title>
        </TitleContainer>
        <Description>{getDescription(descricao)}</Description>
        <BotaoAdd
          onClick={() => {
            setModal({
              isVisible: true
            })
          }}
        >
          <a>Adicionar ao carrinho</a>
        </BotaoAdd>
        <Modal className={modal.isVisible ? 'visivel' : ''}>
          <ModalContent className="container">
            <img
              src={fechar}
              alt="Botão de fechar"
              onClick={() => {
                closeModal()
              }}
            />
            <div>
              <img
                src={foto}
                alt="Ícone de fechar"
                onClick={() => {
                  closeModal()
                }}
              />
            </div>
            <InfosContainer>
              <h4>{nome}</h4>
              <p>{descricao}</p>
              <p>Serve: {porcao}</p>
              <BotaoAdd onClick={addToCart}>
                Adicionar ao carrinho - {formatPrice(preco)}
              </BotaoAdd>
            </InfosContainer>
          </ModalContent>
          <div
            className="overlay"
            onClick={() => {
              closeModal()
            }}
          ></div>
        </Modal>
      </CardContainer>
    </Card>
  )
}

export default Products
