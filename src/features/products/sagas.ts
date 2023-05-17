import { call, put, takeLatest } from 'redux-saga/effects'
import {
  addReviewOnProduct,
  getAllOrders,
  getProductById,
  getProducts,
  getProductsRandom,
  getReviewsByProductId,
  getTags
} from '../../components/api'
import { OrderDto, ProductDto, ReviewDto, TagDto } from '../../components/api/types'
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
  console.log(
    '🚀 ~ file: sagas.ts:46 ~ function*postProductReviewSaga ~ payload:',
    payload
  )

  try {
    const reviews: ReviewDto[] = yield call(getReviewsByProductId, payload)

    yield put(a.fetchReviewsSuccess(reviews))
  } catch (error) {
    console.log((error as Error).message)
  }
}

function* postProductReviewSaga({ payload }: ReturnType<typeof a.postReview>) {
  try {
    yield call(addReviewOnProduct, payload)

    yield put(a.fetchReviewsByProductId(payload.productId))
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

function* fetchTagsSaga() {
  try {
    const tagsProduct: TagDto[] = yield call(getTags)

    yield put(a.fetchTagsProductsSuccess(tagsProduct))
  } catch (error) {
    console.log((error as Error).message)
  }
}

function* fetchOrdersSaga() {
  try {
    const allOrders: OrderDto[] = yield call(getAllOrders)

    yield put(a.fetchOrdersSuccess(allOrders))
  } catch (error) {
    console.log((error as Error).message)
  }
}

export function* productsSaga() {
  yield takeLatest(a.fetchProducts.toString(), fetchProductsSaga)
  yield takeLatest(a.fetchProductById.toString(), fetchProductByIdSaga)
  yield takeLatest(a.fetchReviewsByProductId.toString(), fetchProductReviewsSaga)
  yield takeLatest(a.postReview.toString(), postProductReviewSaga)
  yield takeLatest(a.fetchRandomProducts.toString(), fetchProductRandomSaga)
  yield takeLatest(a.fetchTags.toString(), fetchTagsSaga)
  yield takeLatest(a.fetchOrders.toString(), fetchOrdersSaga)
}
