import { memo, useCallback, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductDto, ValueType } from '../../../components/api/types'
import { Counter } from '../../../components/Counter'
import { Image } from '../../../components/Image'
import { Loader } from '../../../components/Loader'
import { Price } from '../../../components/Price'
import { Rating } from '../../../components/Rating'
import { Text } from '../../../components/Text'
import { cartActions } from '../../../features/cart/reducer'
import { makeSelectQtyById } from '../../../features/cart/selectors'
import {
  StyledButton,
  DetailCard,
  ImageWrapper,
  PriceWrapper,
  TextWrapper,
  OutOfStock
} from '../styled'

type Props = {
  product: ProductDto
  loading: boolean
  id: string
}

export const CardDetail = memo(({ id, product, loading }: Props) => {
  const dispatch = useDispatch()
  const [counter, setCounter] = useState(0)
  const productQty = useSelector(makeSelectQtyById(id!))

  const maximumItems = product && productQty ? product.stock - productQty : product?.stock

  const handleSubmit = useCallback(() => {
    if (counter < 1 || !product) {
      return
    }
    dispatch(
      cartActions.addToCart({
        product: product,
        quantity: counter
      })
    )
    setCounter(0)
  }, [dispatch, counter, product])

  const handleClickPlus = useCallback(() => {
    if (product && counter < maximumItems!) {
      setCounter(counter + 1)
    }
  }, [product, counter, maximumItems])

  const handleClickMinus = useCallback(() => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }, [counter])

  const productImage = useMemo(() => {
    return (
      <ImageWrapper>
        <Image url={product?.imageUrl} />
      </ImageWrapper>
    )
  }, [product])

  if (loading) return <Loader />

  return (
    <DetailCard>
      <TextWrapper>
        <Text color="text" variant="h1">
          {product.name}
        </Text>
        <Rating rating={product.rating || 0} />
        <Text color="textLight" variant="p">
          {product.description}
        </Text>
        <Text variant="h5" color="textLight">
          Ingredients
        </Text>
        <PriceWrapper>
          <Price title={product.price as ValueType} font="h2" />
          <Counter
            onClickPlus={handleClickPlus}
            onClickMinus={handleClickMinus}
            counter={counter}
          />
        </PriceWrapper>
        {product.stock === 0 && (
          <OutOfStock>
            <Text variant="h2">Out Of Stock</Text>
          </OutOfStock>
        )}
        <StyledButton
          onClick={handleSubmit}
          stock={product.stock}
          disabled={false}
          colorText="text"
          color="secondary"
          title="Order Now"
          font="h4"
          radius={3}
        />
      </TextWrapper>
      {productImage}
    </DetailCard>
  )
})
