import { ProductDto, ValueType } from '../../components/api/types'

export type CartState = {
  cart: ItemInCart[]
  totalPrice: ValueType
}

export type ItemInCart = {
  product: ProductDto
  quantity: number
}
