import { ValueType } from '../components/api/types'

export const getTotalPrice = (
  priceRate: (price: ValueType) => string,
  total: ValueType[]
) => {
  const prices = total.map((price) => priceRate(price))
  const type = prices[0].substring(0, 1)
  const totalPrice = prices.reduce((acc, price) => {
    acc += Number(price.substring(1))
    return acc
  }, 0)
  return `${type} ${totalPrice}`
}
