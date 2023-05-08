import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductDto, ReviewDto, TagDto } from '../../components/api/types'
import { ProductsState } from './model'

const initialState: ProductsState = {
  products: [],
  reviews: [],
  recommendeds: [],
  tags: [],
  counterNumber: 0
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
    },
    incrementCounter: (state, { payload }: PayloadAction<number>) => {
      state.counterNumber += payload
    },
    decrementCounter: (state, { payload }: PayloadAction<number>) => {
      state.counterNumber -= payload
    }
  }
})

export const productActions = productsSlice.actions

export default productsSlice.reducer
