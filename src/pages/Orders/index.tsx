import React, { memo } from 'react'
import { Loader } from '../../components/Loader'
import { useGetOrdersQuery } from '../../features/api/endpoints/ordersEndpoints'

import { OrderCard } from './OrderCard'
import { StyledOrdersList } from './styled'

export const Orders = memo(() => {
  const { data: orders, isLoading } = useGetOrdersQuery()

  if (isLoading) return <Loader />

  return (
    <StyledOrdersList className="App">
      {orders!.map((order) => (
        <OrderCard order={order} key={order.id} />
      ))}
    </StyledOrdersList>
  )
})
