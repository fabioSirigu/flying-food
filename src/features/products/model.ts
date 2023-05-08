import { ProductDto } from '../../components/api/types'

export type ProductsState = {
  products: ProductDto[]
  productDetail?: ProductDto
}
