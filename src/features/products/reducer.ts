import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductDto } from '../../components/api/types'
import { ProductsState } from './model'

const initialState: ProductsState = {
  products: []
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsSuccess: (state, { payload }: PayloadAction<ProductDto[]>) => {
      state.products = payload
    }
  }
})

export const productActions = productsSlice.actions

export default productsSlice.reducer
