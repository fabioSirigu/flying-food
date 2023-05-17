import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export const selectOrdersState = (state: RootState) => state.orders

export const selectAllOrders = createSelector(
  selectOrdersState,
  (allOrders) => allOrders.orders
)
