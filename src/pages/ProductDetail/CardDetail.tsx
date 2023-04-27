import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../components/api'
import { ProductDto } from '../../components/api/types'
import { Counter } from '../../components/Counter'
import { Image } from '../../components/Image'
import { Price } from '../../components/Price'
import { Text } from '../../components/Text'
import {
  StyledButton,
  DetailCard,
  ImageWrapper,
  PriceWrapper,
  TextWrapper
} from './styled'

export const CardDetail = () => {
  const params = useParams()
  const id = params.id!
  console.log(id)

  const [singleProducts, setSingleProducts] = useState<ProductDto>()

  useEffect(() => {
    getProductById(id).then((data) => setSingleProducts(data))
  }, [id])
  return (
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
        <StyledButton
          colorText="text"
          color="secondary"
          title="Order Now"
          font="h4"
          radius={3}
        />
      </TextWrapper>
      <ImageWrapper>
        <Image url={singleProducts?.imageUrl} />
      </ImageWrapper>
    </DetailCard>
  )
}
