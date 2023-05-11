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
      <Text variant="h2" color="secondary">
        To pay: {totalPrice}
      </Text>
    </StyledTotal>
  )
}
