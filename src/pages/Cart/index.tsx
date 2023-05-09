import { useSelector } from 'react-redux'
import { CartCard } from '../../components/CartCard'

import { Text } from '../../components/Text'
import { selectCart } from '../../features/cart/selectors'
import {
  FooterWrapper,
  FormCheckoutWrapper,
  ListCartWrapper,
  MainWrapper,
  WrapperCart
} from './styled'
import { TotalPrice } from './totalPrice'

export const Cart = () => {
  const productInCart = useSelector(selectCart)

  return (
    <WrapperCart className="App">
      <Text variant="h1" color="text">
        Shopping Cart
      </Text>
      <MainWrapper>
        <ListCartWrapper>
          {productInCart &&
            productInCart.map((product) => (
              <CartCard key={product.product.id} product={product} />
            ))}
        </ListCartWrapper>
        <FormCheckoutWrapper />
      </MainWrapper>
      <FooterWrapper>
        <TotalPrice />
      </FooterWrapper>
    </WrapperCart>
  )
}
