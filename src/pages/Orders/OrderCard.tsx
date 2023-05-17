import React, { memo } from 'react'
import { OrderDto, OrderItem } from '../../components/api/types'
import { Paper } from '../../components/Paper'
import { Text } from '../../components/Text'
import { StyledOrderCard } from './styled'

type Props = {
  order: OrderDto
}
export const OrderCard = memo(({ order }: Props) => {
  const str = order.date
  const newDate = new Date(str!)
  return (
    <Paper radius={1}>
      <StyledOrderCard>
        <Text variant="h5" color="text">
          {newDate.toLocaleString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </Text>
        <Text variant="h5" color="textLight">
          {order.id}
        </Text>
        <Text variant="h5" color="textLight">
          {order.userId}
        </Text>
        <Text variant="h5" color="secondary">
          Prodotti dell'ordine: {order.items.length}
        </Text>
      </StyledOrderCard>
    </Paper>
  )
})
