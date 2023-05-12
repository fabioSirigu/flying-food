import { memo } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Text } from '../../components/Text'
import { ExpirationForm } from './ExpirationForm'
import { PaymentCard } from './PaymentCard'
import { FooterFormWrapper, StyledCheckoutButton, StyledCvv } from './styled'

export const CheckoutForm = memo(() => {
  return (
    <>
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
        <Button padding="lg" color="secondary" colorText="text" title="Checkout" />
      </StyledCheckoutButton>
    </>
  )
})
