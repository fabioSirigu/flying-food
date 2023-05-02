import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../../components/api'
import { ProductDto, ValueType } from '../../../components/api/types'
import { Counter } from '../../../components/Counter'
import { Image } from '../../../components/Image'
import { Price } from '../../../components/Price'
import { Rating } from '../../../components/Rating'
import { Text } from '../../../components/Text'
import {
  StyledButton,
  DetailCard,
  ImageWrapper,
  PriceWrapper,
  TextWrapper
} from '../styled'

export const CardDetail = () => {
  const { id } = useParams()
  const [productDetail, setProductDetail] = useState<ProductDto>()
  const initialState = () => {
    if (productDetail && productDetail.stock < 1) {
      return Math.min(productDetail.stock)
    }
    return 0
  }

  const [counter, setCounter] = useState(initialState)

  useEffect(() => {
    if (id) {
      getProductById(id).then((data) => setProductDetail(data))
    }
  }, [id])

  const handleClickPlus = () => {
    if (productDetail && counter < productDetail.stock) {
      setCounter(counter + 1)
    }
  }

  const handleClickMinus = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  if (!productDetail) return <>Loading</> // todo aggiungere loader

  return (
    <DetailCard>
      <TextWrapper>
        <Text color="text" variant="h1">
          {productDetail?.name}
        </Text>
        <Rating rating={productDetail?.rating || 0} />
        <Text color="textLight" variant="p">
          {productDetail?.description}
        </Text>
        <Text variant="h5" color="textLight">
          Ingredients
        </Text>
        <PriceWrapper>
          <Price title={productDetail?.price as ValueType} font="h2" />
          {productDetail.stock > 0 ? (
            <Counter
              onClickPlus={handleClickPlus}
              onClickMinus={handleClickMinus}
              counter={counter}
            />
          ) : (
            <Text variant="h2">Out Of Stock</Text>
          )}
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
        <Image url={productDetail?.imageUrl} />
      </ImageWrapper>
    </DetailCard>
  )
}
