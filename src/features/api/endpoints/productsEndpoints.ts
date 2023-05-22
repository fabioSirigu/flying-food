import { ProductDto } from '../../../components/api/types'
import { serviceApi } from '../serviceApi'

const productsApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductDto[], void>({
      query: () => 'products'
    }),
    getProductById: builder.query<ProductDto, string>({
      query: (id) => `products/${id}`
    })
  })
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi
