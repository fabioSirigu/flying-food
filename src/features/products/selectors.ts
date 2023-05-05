import type { RootState } from '../store'

export const selectAllProducts = (state: RootState) => state.products.products
