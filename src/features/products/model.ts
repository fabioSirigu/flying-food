import { ProductDto, ReviewDto, TagDto } from '../../components/api/types'

export type ProductsState = {
  products: ProductDto[]
  productDetail: ProductDto | null
  reviews: ReviewDto[]
  recommendeds: ProductDto[]
  tags: TagDto[]
}
