import { memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Text } from '../../components/Text'
import { selectCartItemsPrice } from '../../features/cart/selectors'
import { useCurrency } from '../../hooks/useCurrency'
import { getTotalPrice } from '../../utilties/utilities'
import { StyledTotal } from './styled'

export const TotalPrice = memo(() => {
  const total = useSelector(selectCartItemsPrice)
  const priceRate = useCurrency()

  const totalPrice = useMemo(() => getTotalPrice(priceRate, total), [priceRate, total])

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
})
