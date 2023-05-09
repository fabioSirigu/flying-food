import { useSelector } from 'react-redux'
import { Price } from '../../components/Price'
import { getTotalPrice } from '../../features/cart/selectors'

export const TotalPrice = () => {
  const total = useSelector(getTotalPrice)

  return (
    <>
      <Price font="h3" title={total} />
    </>
  )
}
