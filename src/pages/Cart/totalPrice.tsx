import { useSelector } from 'react-redux'

import { Text } from '../../components/Text'
import { selectCartItemsPrice } from '../../features/cart/selectors'
import { useCurrency } from '../../hooks'
import { getTotalPrice } from '../../utilties/utilities'

export const TotalPrice = () => {
  const total = useSelector(selectCartItemsPrice)
  const priceRate = useCurrency()

  const totalPrice = getTotalPrice(priceRate, total)

  return (
    <Text variant="h2" color="text">
      {totalPrice}
    </Text>
  )
}
