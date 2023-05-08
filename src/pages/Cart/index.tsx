import { CartCard } from '../../components/CartCard'

import { Text } from '../../components/Text'
import { FormCheckoutWrapper, ListCartWrapper, MainWrapper } from './styled'

export const Cart = () => {
  return (
    <div className="App">
      <Text variant="h1" color="text">
        Shopping Cart
      </Text>
      <MainWrapper>
        <ListCartWrapper>
          <CartCard />
        </ListCartWrapper>
        <FormCheckoutWrapper />
      </MainWrapper>
    </div>
  )
}
