// import { ValueType } from '../api/types'
import { IconButton } from '../../../../components/Button'
import { Price } from '../../../../components/Price'
import { Tag } from '../../../../components/Tag'
import { FooterCardWrapper, FooterRightWrapper } from '../../styled'

type Props = {
  price: number
  quantity: number
  unity: string
}

export const FooterCard = ({ price, unity, quantity }: Props) => {
  return (
    <FooterCardWrapper>
      <Tag quantity={quantity} value={unity} font="h6" />
      <FooterRightWrapper>
        <Price title={price} font="h4" />
        <IconButton rounded iconName="plus" padding="sm" color="secondary" />
      </FooterRightWrapper>
    </FooterCardWrapper>
  )
}
