import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import cartReducer from './cart/reducer'
import { cartSaga } from './cart/sagas'
import orderReducer from './orders/reducer'
import { ordersSaga } from './orders/sagas'
import productReducer from './products/reducer'
import { productsSaga } from './products/sagas'
import tagReducer from './tags/reducer'
import { tagsSaga } from './tags/sagas'

const rootReducer = {
  products: productReducer,
  cart: cartReducer,
  orders: orderReducer,
  tags: tagReducer
}

function* rootSaga() {
  yield all([productsSaga(), cartSaga(), ordersSaga(), tagsSaga()])
}

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
})

sagaMiddleware.run(rootSaga)

export type RootState = {
  [K in keyof typeof rootReducer]: ReturnType<(typeof rootReducer)[K]>
}
