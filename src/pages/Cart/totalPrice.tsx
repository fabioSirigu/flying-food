import { useSelector } from 'react-redux'
import { Price } from '../../components/Price'
import { Text } from '../../components/Text'
import { selectCartItemsPrice } from '../../features/cart/selectors'
import { useCurrency } from '../../hooks'
import { getTotalPrice } from '../../utilties/utilities'

export const TotalPrice = () => {
  const total = useSelector(selectCartItemsPrice)
  const priceRate = useCurrency()

  const totalPrice = getTotalPrice(priceRate, total)

  //   const price = total.reduce((acc, {value, type})=> acc +=, 0)

  return <Text>{totalPrice}</Text>
}
