import { LeftCard, RightCard, MainText } from '../../../pages/ProductDetail/styled'
import { ValueType } from '../../api/types'
import { Image } from '../../Image'
import { Text } from '../../Text'
import { StyledVariant } from '../styled'
import { FooterCard } from './FooterCard'

type Props = {
  imageUrl: string
  productName: string
  productDescription: string
  price: ValueType
  quantity: number
  unity: string
}
export const ProductCardVariant = ({
  imageUrl,
  productName,
  productDescription,
  price,
  unity,
  quantity
}: Props) => {
  return (
    <>
      <StyledVariant>
        <LeftCard>
          <Image url={imageUrl} />
        </LeftCard>
        <RightCard>
          <Text color="text" variant="h3">
            {productName}
          </Text>
          <MainText>
            <Text variant="h6" color="textLight">
              {productDescription.slice(0, 50)}...
            </Text>
          </MainText>
          <FooterCard price={price} unity={unity} quantity={quantity} />
        </RightCard>
      </StyledVariant>
    </>
  )
}
