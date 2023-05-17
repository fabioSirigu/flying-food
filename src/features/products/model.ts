import { ProductDto, ReviewDto } from '../../components/api/types'

export type ProductsState = {
  products: ProductDto[]
  productDetail: ProductDto | null
  reviews: ReviewDto[] | null
  recommendeds: ProductDto[] | null
}
