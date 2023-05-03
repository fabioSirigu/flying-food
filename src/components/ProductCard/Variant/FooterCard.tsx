// import { ValueType } from '../api/types'
import { ValueType } from '../../api/types'
import { IconButton } from '../../Button'
import { Price } from '../../Price'
import { Tag } from '../../Tag'
import { FooterVariant, FooterVariantRight } from '../styled'

type Props = {
  price: ValueType
  quantity: number
  unity: string
}

export const FooterCard = ({ price, unity, quantity }: Props) => {
  return (
    <FooterVariant>
      <Tag quantity={quantity} value={unity} font="h6" />
      <FooterVariantRight>
        <Price title={price} font="h4" />
        <IconButton
          onClick={() => console.log('add')}
          rounded
          iconName="plus"
          padding="md"
          color="secondary"
        />
      </FooterVariantRight>
    </FooterVariant>
  )
}
