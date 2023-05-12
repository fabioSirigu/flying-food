import { memo } from 'react'
import { Text } from '../../components/Text'
import { CartList } from './CartList'
import { CheckoutForm } from './CheckoutForm'
import { FooterWrapper, MainWrapper, WrapperCart } from './styled'
import { TotalPrice } from './TotalPrice'

export const Cart = memo(() => {
  return (
    <WrapperCart className="App">
      <Text variant="h1" color="text">
        Shopping Cart
      </Text>
      <MainWrapper>
        <CartList />
        <CheckoutForm />
      </MainWrapper>
      <FooterWrapper>
        <TotalPrice />
      </FooterWrapper>
    </WrapperCart>
  )
})
