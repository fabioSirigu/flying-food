import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../components/api'
import { ProductDto } from '../../components/api/types'
import { Button } from '../../components/Button'
import { Counter } from '../../components/Counter'
import { Image } from '../../components/Image'
import { Price } from '../../components/Price'
import { Text } from '../../components/Text'
import {
  DetailCard,
  ImageWrapper,
  PriceWrapper,
  RowButton,
  StyledDetails,
  TextWrapper
} from './styled'

export const ProductDetail = (props: any) => {
  const params = useParams()
  const id = params.id!
  console.log(id)

  const [singleProducts, setSingleProducts] = useState<ProductDto>()

  useEffect(() => {
    getProductById(id).then((data) => setSingleProducts(data))
  }, [])
  return (
    <StyledDetails>
      <RowButton>
        <Button border="1" font="h5" outline title="Return To Catalog" iconName="right" />
      </RowButton>
      <DetailCard>
        <TextWrapper>
          <Text color="text" variant="h1">
            {singleProducts?.name}
          </Text>
          <Text color="text" variant="h6">
            Rating
          </Text>
          <Text color="textLight" variant="p">
            {singleProducts?.description}
          </Text>
          <Text variant="h5" color="textLight">
            Ingredients
          </Text>
          <PriceWrapper>
            <Price title={singleProducts?.price.value} />
            <Counter />
          </PriceWrapper>
        </TextWrapper>
        <ImageWrapper>
          <Image url={singleProducts?.imageUrl} />
        </ImageWrapper>
      </DetailCard>
    </StyledDetails>
  )
}
