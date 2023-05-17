import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productActions } from '../../features/products/reducer'
import { selectAllOrders } from '../../features/products/selectors'
import { OrderCard } from './OrderCard'
import { StyledOrdersList } from './styled'

export const Orders = memo(() => {
  const dispatch = useDispatch()
  const orders = useSelector(selectAllOrders)
  useEffect(() => {
    dispatch(productActions.fetchOrders())
  }, [dispatch])
  return (
    <StyledOrdersList className="App">
      {orders.map((order) => (
        <OrderCard order={order} />
      ))}
    </StyledOrdersList>
  )
})
