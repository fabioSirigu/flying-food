import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderActions } from '../../features/orders/reducer'
import { selectAllOrders } from '../../features/orders/selectors'

import { OrderCard } from './OrderCard'
import { StyledOrdersList } from './styled'

export const Orders = memo(() => {
  const dispatch = useDispatch()
  const orders = useSelector(selectAllOrders)

  useEffect(() => {
    dispatch(orderActions.fetchOrders())
  }, [dispatch])

  return (
    <StyledOrdersList className="App">
      {orders.map((order) => (
        <OrderCard order={order} key={order.id} />
      ))}
    </StyledOrdersList>
  )
})
