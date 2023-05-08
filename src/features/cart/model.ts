import { TagDto, ValueType } from '../../components/api/types'

export type CartState = {
  cart: ItemInCart[]
}

export type ItemInCart = {
  id: string
  image: string
  sizeUnity: string
  sizeQuantity: number
  stock: number
  price: ValueType
  quantity: number
  title: string
}
