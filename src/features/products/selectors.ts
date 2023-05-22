import { createSelector } from '@reduxjs/toolkit'
import { productsApi } from '../api/endpoints/productsEndpoints'
import type { RootState } from '../store'
import { selectSelectedTagId } from '../tags/selectors'

export const selectProductState = (state: RootState) => state.products
export const selectGetProducts = productsApi.endpoints.getProducts.select()

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
  selectGetProducts,
  selectSelectedTagId,
  ({ data = [], isLoading }, tagId) => {
    return {
      products: tagId ? data.filter((product) => product.tags.includes(tagId)) : data,
      isLoading
    }
  }
)

/* export const sortReviewByDate = createSelector(selectAllReviews, (reviews) =>
  reviews?.map((review, i) => review.date.split('-')).flat()
) */
