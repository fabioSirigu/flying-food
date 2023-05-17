export type ValueType = {
  type: string
  value: number
}

export type OptionsType = {
  label: string
  value: string | number
}

export type ProductDto = {
  id: string
  name: string
  description: string
  available?: boolean
  new?: boolean
  stock: number
  rating: number
  delivery: string
  discountRate: number
  price: ValueType
  size: ValueType
  tags: string[]
  imageUrl: string
}

export type TagDto = {
  id: string
  name: string
  namePlural: string
  hidden?: boolean
  imageUrl: string
}

export type ReviewDto = {
  date: string
  text: string
  productId: string
  author: string
}

export type CurrencyRatesDto = { rates: Record<string, number> }

export type OrderItem = {
  delivery: string
  id: string
  quantity: number
  price: ValueType
}

export type OrderDto = {
  date: string
  id: string
  items: OrderItem[]
  userId: string
}

export type AnyCallbackFunction = (...args: any[]) => any
