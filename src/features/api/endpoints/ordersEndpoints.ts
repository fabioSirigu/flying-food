import { OrderDto } from '../../../components/api/types'
import { serviceApi } from '../serviceApi'

export const ordersApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<OrderDto[], void>({
      query: () => 'orders'
    }),
    createOrder: builder.mutation<any, OrderDto>({
      query: (order) => ({
        url: 'order',
        method: 'POST',
        body: order
      })
    })
  })
})

export const { useGetOrdersQuery, useCreateOrderMutation } = ordersApi
