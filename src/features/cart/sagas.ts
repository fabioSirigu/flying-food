import { call, put, takeLatest } from 'redux-saga/effects'
import { addOrder } from '../../components/api'
import { cartActions as a } from './reducer'

function* postOrderItemSaga({ payload }: ReturnType<typeof a.postOrderItem>) {
  try {
    yield call(addOrder, payload)

    yield put(a.clearCart())
  } catch (error) {
    console.log((error as Error).message)
  }
}

export function* cartSaga() {
  yield takeLatest(a.postOrderItem.toString(), postOrderItemSaga)
}
