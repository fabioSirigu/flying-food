// import { ValueType } from '../api/types'
import {
  FooterCardWrapper,
  FooterRightWrapper
} from '../../../pages/ProductDetail/styled'
import { ValueType } from '../../api/types'
import { IconButton } from '../../Button'
import { Price } from '../../Price'
import { Tag } from '../../Tag'

type Props = {
  price: ValueType
  quantity: number
  unity: string
}

export const FooterCard = ({ price, unity, quantity }: Props) => {
  return (
    <FooterCardWrapper>
      <Tag quantity={quantity} value={unity} font="h6" />
      <FooterRightWrapper>
        <Price title={price} font="h4" />
        <IconButton rounded iconName="plus" padding="md" color="secondary" />
      </FooterRightWrapper>
    </FooterCardWrapper>
  )
}
