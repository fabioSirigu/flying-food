import { memo } from 'react'
import { Text } from '../../components/Text'
import { CartList } from './CartList'
import { CheckoutForm } from './CheckoutForm'
import { FooterWrapper, FormCheckoutWrapper, MainWrapper, WrapperCart } from './styled'
import { TotalPrice } from './totalPrice'

export const Cart = memo(() => {
  return (
    <WrapperCart className="App">
      <Text variant="h1" color="text">
        Shopping Cart
      </Text>
      <MainWrapper>
        <CartList />
        <FormCheckoutWrapper>
          <CheckoutForm />
        </FormCheckoutWrapper>
      </MainWrapper>
      <FooterWrapper>
        <TotalPrice />
      </FooterWrapper>
    </WrapperCart>
  )
})
