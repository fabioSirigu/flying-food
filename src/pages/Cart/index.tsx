import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { CartCard } from '../../components/CartCard'
import { Text } from '../../components/Text'
import { selectCart } from '../../features/cart/selectors'
import {
  FooterWrapper,
  FormCheckoutWrapper,
  ListCartWrapper,
  MainWrapper,
  NoProductWrapper,
  WrapperCart
} from './styled'
import { TotalPrice } from './totalPrice'

export const Cart = () => {
  const productInCart = useSelector(selectCart)
  const navigate = useNavigate()

  return (
    <WrapperCart className="App">
      <Text variant="h1" color="text">
        Shopping Cart
      </Text>
      <MainWrapper>
        <ListCartWrapper>
          {!productInCart.length ? (
            <NoProductWrapper>
              <Text variant="h1" color="primary">
                Aggiungi qualcosa al carrello!
              </Text>
              <Button
                color="secondary"
                colorText="text"
                padding="md"
                title="Return To Catalog"
                onClick={() => navigate('/catalog')}
              />
            </NoProductWrapper>
          ) : (
            productInCart.map((product) => (
              <CartCard key={product.product.id} product={product} />
            ))
          )}
        </ListCartWrapper>
        <FormCheckoutWrapper />
      </MainWrapper>
      <FooterWrapper>
        <TotalPrice />
      </FooterWrapper>
    </WrapperCart>
  )
}
