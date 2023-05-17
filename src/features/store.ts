import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import cartReducer from './cart/reducer'
import { cartSaga } from './cart/sagas'
import productReducer from './products/reducer'
import { productsSaga } from './products/sagas'

const rootReducer = {
  products: productReducer,
  cart: cartReducer
}

function* rootSaga() {
  yield all([productsSaga(), cartSaga()])
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
