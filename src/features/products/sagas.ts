import { call, put, takeLatest } from 'redux-saga/effects'
import {
  getProductById,
  getProducts,
  getProductsRandom,
  getReviewsByProductId
} from '../../components/api'
import { ProductDto, ReviewDto } from '../../components/api/types'
import { productActions as a } from './reducer'

function* fetchProductsSaga() {
  try {
    const products: ProductDto[] = yield call(getProducts)

    yield put(a.fetchProductsSuccess(products))
  } catch (error) {
    console.log((error as Error).message)
  }
}

function* fetchProductByIdSaga({ payload }: ReturnType<typeof a.fetchProductById>) {
  try {
    const product: ProductDto = yield call(getProductById, payload)

    yield put(a.fetchProductByIdSuccess(product))
  } catch (error) {
    console.log((error as Error).message)
  }
}

function* fetchProductReviewsSaga({
  payload
}: ReturnType<typeof a.fetchReviewsByProductId>) {
  try {
    const reviews: ReviewDto[] = yield call(getReviewsByProductId, payload)

    yield put(a.fetchReviewsSuccess(reviews))
  } catch (error) {
    console.log((error as Error).message)
  }
}

function* fetchProductRandomSaga() {
  try {
    const randomProducts: ProductDto[] = yield call(getProductsRandom)

    yield put(a.fetchRandomProductsSuccess(randomProducts))
  } catch (error) {
    console.log((error as Error).message)
  }
}

export function* productsSaga() {
  yield takeLatest(a.fetchProducts.toString(), fetchProductsSaga)
  yield takeLatest(a.fetchProductById.toString(), fetchProductByIdSaga)
  yield takeLatest(a.fetchReviewsByProductId.toString(), fetchProductReviewsSaga)
  yield takeLatest(a.fetchRandomProducts.toString(), fetchProductRandomSaga)
}
