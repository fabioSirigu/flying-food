import { ProductDto, ReviewDto } from '../../../components/api/types'
import { serviceApi } from '../serviceApi'

const productsApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductDto[], void>({
      query: () => 'products'
    }),
    getProductById: builder.query<ProductDto, string>({
      query: (id) => `products/${id}`
    }),
    getReviewsByProductId: builder.query<ReviewDto[], string>({
      query: (id) => `reviews/${id}`
    }),
    getRandomProducts: builder.query<ProductDto[], void>({
      query: () => 'products/random'
    })
  })
})

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetReviewsByProductIdQuery,
  useGetRandomProductsQuery
} = productsApi
