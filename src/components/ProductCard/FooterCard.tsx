// import { ValueType } from '../api/types'
import { IconButton } from '../Button'
import { Price } from '../Price'
import { Tag } from '../Tag'
import { FooterCardWrapper, FooterRightWrapper } from './styled'

type Props = {
  price: number
  quantity: number
  unity: string
}

export const FooterCard = ({ price, unity, quantity }: Props) => {
  return (
    <FooterCardWrapper>
      <Price title={price} font="p" />
      <FooterRightWrapper>
        <Tag quantity={quantity} value={unity} font="h6" />
        <IconButton rounded iconName="plus" padding="lg" color="secondary" />
      </FooterRightWrapper>
    </FooterCardWrapper>
  )
}
