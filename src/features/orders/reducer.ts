import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OrderDto } from '../../components/api/types'
import { OrdersState } from './model'

const initialState: OrdersState = {
  orders: []
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    fetchOrdersSuccess: (state, { payload }: PayloadAction<OrderDto[]>) => {
      state.orders = payload
    }
  }
})

export const orderActions = {
  ...ordersSlice.actions,

  fetchOrders: createAction('orders/fetchOrders')
}

export default ordersSlice.reducer
