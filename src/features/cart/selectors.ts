import type { RootState } from '../store'

export const selectCart = (state: RootState) => state.cart.cart

export const makeSelectQtyById = (id: string) => (state: RootState) =>
  state.cart.cart.find(({ product }) => product.id === id)?.quantity

export const getTotalPrice = (state: RootState) => state.cart.totalPrice
