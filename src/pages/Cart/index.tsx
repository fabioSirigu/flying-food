import { useSelector } from 'react-redux'
import { CartCard } from '../../components/CartCard'

import { Text } from '../../components/Text'
import { selectCart } from '../../features/cart/selectors'
import {
  FooterWrapper,
  FormCheckoutWrapper,
  ListCartWrapper,
  MainWrapper
} from './styled'

export const Cart = () => {
  const productInCart = useSelector(selectCart)

  return (
    <div className="App">
      <Text variant="h1" color="text">
        Shopping Cart
      </Text>
      <MainWrapper>
        <ListCartWrapper>
          {productInCart &&
            productInCart.map((product) => <CartCard product={product} />)}
        </ListCartWrapper>
        <FormCheckoutWrapper />
      </MainWrapper>
      <FooterWrapper />
    </div>
  )
}
