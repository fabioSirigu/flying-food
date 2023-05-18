import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductDto, ReviewDto } from '../../components/api/types'
import { ProductsState } from './model'

const initialState: ProductsState = {
  products: [],
  reviews: [],
  recommendeds: [],
  productDetail: null
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsSuccess: (state, { payload }: PayloadAction<ProductDto[]>) => {
      state.products = payload
    },
    fetchProductByIdSuccess: (state, { payload }: PayloadAction<ProductDto>) => {
      state.productDetail = payload
    },
    fetchReviewsSuccess: (state, { payload }: PayloadAction<ReviewDto[]>) => {
      state.reviews = payload
    },
    fetchRandomProductsSuccess: (state, { payload }: PayloadAction<ProductDto[]>) => {
      state.recommendeds = payload
    },
    clearDetail: (state) => {
      state.productDetail = null
    },
    clearRecommended: (state) => {
      state.recommendeds = null
    },
    clearReview: (state) => {
      state.reviews = null
    }
  }
})

export const productActions = {
  ...productsSlice.actions,
  fetchProducts: createAction('products/fetchProducts'),
  fetchProductById: createAction<string>('products/fetchProductById'),
  fetchReviewsByProductId: createAction<string>('products/fetchReviewsByProductId'),
  fetchRandomProducts: createAction('products/fetchRandomProducts'),
  postReview: createAction<ReviewDto>('products/postReview')
}

export default productsSlice.reducer
