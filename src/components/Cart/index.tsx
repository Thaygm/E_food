import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import Checkout from '../Checkout'
import {
  Overlay,
  CartContainer,
  Sidebar,
  CartItem,
  TotalValue,
  ButtonContinue
} from './styles'
import { getTotalPrice } from '../../utils'
import { formatPrice } from '../Products'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [payment, setPayment] = useState(false)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {!payment && items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formatPrice(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <TotalValue>
              <p>Valor total</p>
              <p>
                {formatPrice(getTotalPrice(items))}
                {''}
              </p>
            </TotalValue>
            <ButtonContinue
              title="Clique aqui para continuar com a entrega"
              type="button"
              onClick={() => setPayment(true)}
            >
              Continuar com a entrega
            </ButtonContinue>
          </>
        ) : (
          items.length === 0 && (
            <p className="empty-text">
              O carrinho está vazio, adicione pelo menos um produto para
              continuar com a compra.
            </p>
          )
        )}
        {payment && <Checkout setPayment={setPayment} />}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
