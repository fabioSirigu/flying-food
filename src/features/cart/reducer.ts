import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartState, ItemInCart } from './model'

const initialState: CartState = {
  cart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<ItemInCart>) => {
      const index = state.cart.findIndex((item) => item.id === payload.id)

      index === -1
        ? state.cart.push(payload)
        : (state.cart[index].quantity += payload.quantity)
    },
    removeToCart: (state, { payload }: PayloadAction<number>) => {
      console.log('remove')
    }
  }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer
