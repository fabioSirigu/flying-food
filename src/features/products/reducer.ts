import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductDto, ReviewDto } from '../../components/api/types'
import { ProductsState } from './model'

const initialState: ProductsState = {
  products: [],
  reviews: []
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
    }
  }
})

export const productActions = productsSlice.actions

export default productsSlice.reducer
