import { ProductDto, ReviewDto, TagDto } from '../../components/api/types'

export type ProductsState = {
  products: ProductDto[]
  productDetail: ProductDto | null
  reviews: ReviewDto[] | null
  recommendeds: ProductDto[] | null
  tags: TagDto[]
  selectedTag: string | null
}
