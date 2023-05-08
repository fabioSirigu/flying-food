import type { RootState } from '../store'

export const selectAllProducts = (state: RootState) => state.products.products

export const selectProductDetail = (state: RootState) => state.products.productDetail
