import { ProductDto, ReviewDto, TagDto } from '../../components/api/types'

export type ProductsState = {
  products: ProductDto[]
  productDetail?: ProductDto
  reviews: ReviewDto[]
  recommendeds: ProductDto[]
  tags: TagDto[]
  counterNumber: number
}
