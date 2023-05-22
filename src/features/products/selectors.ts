import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { selectSelectedTagId } from '../tags/selectors'

export const selectProductState = (state: RootState) => state.products

export const selectAllProducts = createSelector(
  selectProductState,
  (productState) => productState.products
)

export const selectProductDetail = createSelector(
  selectProductState,
  (productState) => productState.productDetail
)

export const selectAllReviews = createSelector(
  selectProductState,
  (productState) => productState.reviews
)

export const selectAllRecommendeds = createSelector(
  selectProductState,
  (productState) => productState.recommendeds
)

// selettore pronto per filtrare i prodotti
export const selectProductFilteredByTag = createSelector(
  selectAllProducts,
  selectSelectedTagId,
  (allProducts, tagId) =>
    tagId ? allProducts.filter((product) => product.tags.includes(tagId)) : allProducts
)

/* export const sortReviewByDate = createSelector(selectAllReviews, (reviews) =>
  reviews?.map((review, i) => review.date.split('-')).flat()
) */
