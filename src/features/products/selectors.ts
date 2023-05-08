import type { RootState } from '../store'

export const selectAllProducts = (state: RootState) => state.products.products

export const selectProductDetail = (state: RootState) => state.products.productDetail

export const selectAllReviews = (state: RootState) => state.products.reviews

export const selectAllRecommendeds = (state: RootState) => state.products.recommendeds

export const selectTags = (state: RootState) => state.products.tags
