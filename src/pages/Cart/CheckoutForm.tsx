import { nanoid } from '@reduxjs/toolkit'
import { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { OrderDto, OrderItem } from '../../components/api/types'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Text } from '../../components/Text'
import { ItemInCart } from '../../features/cart/model'
import { cartActions } from '../../features/cart/reducer'
import { ExpirationForm } from './ExpirationForm'
import { PaymentCard } from './PaymentCard'
import {
  FooterFormWrapper,
  StyledCheckoutButton,
  StyledCvv,
  FormCheckoutWrapper
} from './styled'

type Props = {
  products: ItemInCart[]
}
export const CheckoutForm = memo(({ products }: Props) => {
  const dispatch = useDispatch()

  const items = products.map((cartObject) => {
    const orderItem: OrderItem = {
      delivery: cartObject.product.delivery,
      id: cartObject.product.id,
      quantity: cartObject.quantity,
      price: cartObject.product.price
    }
    return orderItem
  })

  const handleOrder = useCallback(() => {
    const order: OrderDto = {
      id: nanoid(),
      userId: 'Fabio',
      items: items,
      date: new Date().toDateString()
    }
    dispatch(cartActions.postOrderItem(order))
  }, [dispatch, items])

  return (
    <FormCheckoutWrapper>
      <Text variant="h3" color="text">
        Card Details
      </Text>
      <Text variant="h6" color="textLight">
        Payment Method
      </Text>
      <PaymentCard />
      <Text variant="h6" color="textLight">
        Name Surname
      </Text>
      <Input placeholder="Name and Surname..." />
      <Text variant="h6" color="textLight">
        Card Number
      </Text>
      <Input placeholder="XXXX-XXXX-XXXX-XXXX" />
      <FooterFormWrapper>
        <ExpirationForm />
        <StyledCvv>
          <Text variant="h6" color="textLight">
            CVV
          </Text>
          <Input placeholder="XXX" />
        </StyledCvv>
      </FooterFormWrapper>
      <StyledCheckoutButton>
        <Button
          padding="lg"
          color="secondary"
          colorText="text"
          title="Checkout"
          onClick={handleOrder}
        />
      </StyledCheckoutButton>
    </FormCheckoutWrapper>
  )
})
