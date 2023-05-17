import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductDto, ReviewDto, TagDto } from '../../components/api/types'
import { ProductsState } from './model'

const initialState: ProductsState = {
  products: [],
  reviews: [],
  recommendeds: [],
  tags: [],
  productDetail: null,
  selectedTag: null
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
    fetchTagsProductsSuccess: (state, { payload }: PayloadAction<TagDto[]>) => {
      state.tags = payload
    },
    selectedTags: (state, { payload }: PayloadAction<string>) => {
      state.selectedTag = payload
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
  fetchTags: createAction('products/fetchTags'),
  fetchFilteredProducts: createAction('products/fetchFilteredProducts'),
  postReview: createAction<ReviewDto>('products/postReview')
}

export default productsSlice.reducer
