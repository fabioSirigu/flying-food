import { ProductDto } from '../../components/api/types'

export type CartState = {
  cart: ItemInCart[]
}

export type ItemInCart = {
  product: ProductDto
  quantity: number
}
