import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../../components/api'
import { ValueType } from '../../../components/api/types'
import { Counter } from '../../../components/Counter'
import { Image } from '../../../components/Image'
import { Loader } from '../../../components/Loader'
import { Price } from '../../../components/Price'
import { Rating } from '../../../components/Rating'
import { Text } from '../../../components/Text'
import { productActions } from '../../../features/products/reducer'
import { selectProductDetail } from '../../../features/products/selectors'
import {
  StyledButton,
  DetailCard,
  ImageWrapper,
  PriceWrapper,
  TextWrapper,
  OutOfStock
} from '../styled'

export const CardDetail = () => {
  const { id } = useParams()
  const productDetail = useSelector(selectProductDetail)

  const [counter, setCounter] = useState(Math.min(productDetail?.stock || 0, 1))

  const dispatch = useDispatch()

  useEffect(() => {
    if (id)
      getProductById(id).then((res) =>
        dispatch(productActions.fetchProductByIdSuccess(res))
      )
  }, [id, dispatch])

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

  if (!productDetail) return <Loader /> // todo aggiungere loader

  return (
    <DetailCard>
      <TextWrapper>
        <Text color="text" variant="h1">
          {productDetail.name}
        </Text>
        <Rating rating={productDetail.rating || 0} />
        <Text color="textLight" variant="p">
          {productDetail.description}
        </Text>
        <Text variant="h5" color="textLight">
          Ingredients
        </Text>
        <PriceWrapper>
          <Price title={productDetail.price as ValueType} font="h2" />
          <Counter
            onClickPlus={handleClickPlus}
            onClickMinus={handleClickMinus}
            counter={counter}
          />
        </PriceWrapper>
        {productDetail.stock === 0 && (
          <OutOfStock>
            <Text variant="h2">Out Of Stock</Text>
          </OutOfStock>
        )}
        <StyledButton
          stock={productDetail.stock}
          disabled={false}
          colorText="text"
          color="secondary"
          title="Order Now"
          font="h4"
          radius={3}
        />
      </TextWrapper>
      <ImageWrapper>
        <Image url={productDetail.imageUrl} />
      </ImageWrapper>
    </DetailCard>
  )
}
