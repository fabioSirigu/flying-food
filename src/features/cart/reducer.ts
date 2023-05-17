import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OrderDto, OrderItem } from '../../components/api/types'
import { CartState, ItemInCart } from './model'

const initialState: CartState = {
  cart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<ItemInCart>) => {
      const index = state.cart.findIndex((item) => item.product.id === payload.product.id)

      index === -1
        ? state.cart.push(payload)
        : (state.cart[index].quantity += payload.quantity)
    },
    removeToCart: (state, { payload }: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.product.id !== payload)
    },
    incrementQuantity: (state, { payload }: PayloadAction<string>) => {
      const index = state.cart.findIndex((item) => item.product.id === payload)
      if (state.cart[index].quantity < state.cart[index].product.stock) {
        state.cart[index].quantity++
      }
    },
    decrementQuantity: (state, { payload }: PayloadAction<string>) => {
      const index = state.cart.findIndex((item) => item.product.id === payload)

      state.cart[index].quantity--
    },
    clearCart: (state) => {
      state.cart = []
    }
  }
})

export const cartActions = {
  ...cartSlice.actions,
  postOrderItem: createAction<OrderDto>('cart/postOrderItem')
}

export default cartSlice.reducer
