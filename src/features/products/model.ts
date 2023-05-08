import { ProductDto, ReviewDto } from '../../components/api/types'

export type ProductsState = {
  products: ProductDto[]
  productDetail?: ProductDto
  reviews: ReviewDto[]
}
