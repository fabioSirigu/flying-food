import { call, put, takeLatest } from 'redux-saga/effects'
import { getAllOrders } from '../../components/api'
import { OrderDto } from '../../components/api/types'
import { orderActions as a } from './reducer'

function* fetchOrdersSaga() {
  try {
    const allOrders: OrderDto[] = yield call(getAllOrders)

    yield put(a.fetchOrdersSuccess(allOrders))
  } catch (error) {
    console.log((error as Error).message)
  }
}

export function* ordersSaga() {
  yield takeLatest(a.fetchOrders.toString(), fetchOrdersSaga)
}
