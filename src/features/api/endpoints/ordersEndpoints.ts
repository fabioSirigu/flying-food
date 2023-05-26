import { OrderDto } from '../../../components/api/types'
import { serviceApi } from '../serviceApi'

export const ordersApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<OrderDto[], void>({
      query: () => 'orders'
    })
  })
})

export const { useGetOrdersQuery } = ordersApi
