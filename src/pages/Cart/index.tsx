import { memo } from 'react'
import { useSelector } from 'react-redux'
import { Text } from '../../components/Text'
import { selectCart } from '../../features/cart/selectors'
import { CartList } from './CartList'
import { CheckoutForm } from './CheckoutForm'
import { FooterWrapper, MainWrapper, WrapperCart } from './styled'
import { TotalPrice } from './TotalPrice'

export const Cart = memo(() => {
  const itemsInCart = useSelector(selectCart)
  return (
    <WrapperCart className="App">
      <Text variant="h1" color="text">
        Shopping Cart
      </Text>
      <MainWrapper>
        <CartList />
        <CheckoutForm products={itemsInCart} />
      </MainWrapper>
      <FooterWrapper>
        <TotalPrice />
      </FooterWrapper>
    </WrapperCart>
  )
})
