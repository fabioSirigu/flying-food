import { Image } from '../../components/Image'
import { Input } from '../../components/Input'
import { PaymentCards, SingleCardCheckbox } from './styled'

export const PaymentCard = () => {
  return (
    <PaymentCards>
      <SingleCardCheckbox>
        <Input type="radio" />
        <Image url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png" />
      </SingleCardCheckbox>
      <SingleCardCheckbox>
        <Input type="radio" />
        <Image url="https://www.mastercard.it/content/dam/public/mastercardcom/it/it/consumers/find-a-card/cards/privati_credito_bianca.png" />
      </SingleCardCheckbox>
    </PaymentCards>
  )
}
