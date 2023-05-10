import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductDto, ReviewDto, TagDto } from '../../components/api/types'
import { ProductsState } from './model'

const initialState: ProductsState = {
  products: [],
  reviews: [],
  recommendeds: [],
  tags: []
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
    fetchTagsProducts: (state, { payload }: PayloadAction<TagDto[]>) => {
      state.tags = payload
    }
  }
})

export const productActions = {
  ...productsSlice.actions,
  fetchProducts: createAction('products/fetchProducts'),
  fetchProductById: createAction<string>('products/fetchProductById'),
  fetchReviewsByProductId: createAction<string>('products/fetchReviewsByProductId')
}

export default productsSlice.reducer
