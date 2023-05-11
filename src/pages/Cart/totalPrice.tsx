import { useSelector } from 'react-redux'
import { Text } from '../../components/Text'
import { selectCartItemsPrice } from '../../features/cart/selectors'
import { useCurrency } from '../../hooks'
import { getTotalPrice } from '../../utilties/utilities'
import { StyledTotal } from './styled'

export const TotalPrice = () => {
  const total = useSelector(selectCartItemsPrice)
  const priceRate = useCurrency()

  const totalPrice = getTotalPrice(priceRate, total)

  return (
    <StyledTotal>
      <Text variant="h3" color="text">
        To Pay:
      </Text>
      <Text variant="h3" color="secondary">
        {totalPrice}
      </Text>
    </StyledTotal>
  )
}
