import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ValueType } from '../../../components/api/types'
import { Counter } from '../../../components/Counter'
import { Image } from '../../../components/Image'
import { Loader } from '../../../components/Loader'
import { Price } from '../../../components/Price'
import { Rating } from '../../../components/Rating'
import { Text } from '../../../components/Text'
import { ItemInCart } from '../../../features/cart/model'
import { cartActions } from '../../../features/cart/reducer'
import { makeSelectQtyById } from '../../../features/cart/selectors'
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
  const dispatch = useDispatch()
  const [counter, setCounter] = useState(0)
  const productDetail = useSelector(selectProductDetail)
  const productQty = useSelector(makeSelectQtyById(id!))

  const maximumItems =
    productDetail && productQty ? productDetail.stock - productQty : productDetail?.stock

  useEffect(() => {
    if (id) dispatch(productActions.fetchProductById(id))

    // Il return di una function viene eseguito all'unmount del componente
    // Può essere vista come un'azione di clear
    return () => {
      dispatch(productActions.clearDetail())
    }
  }, [id, dispatch])

  const handleSubmit = useCallback(() => {
    if (counter < 1 || !productDetail) {
      return
    }
    dispatch(
      cartActions.addToCart({
        product: productDetail,
        quantity: counter
      })
    )
    setCounter(0)
  }, [dispatch, counter, productDetail])

  const handleClickPlus = useCallback(() => {
    if (productDetail && counter < maximumItems!) {
      setCounter(counter + 1)
    }
  }, [productDetail, counter, maximumItems])

  const handleClickMinus = useCallback(() => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }, [counter])

  const productImage = useMemo(() => {
    return (
      <ImageWrapper>
        <Image url={productDetail?.imageUrl} />
      </ImageWrapper>
    )
  }, [productDetail])

  if (!productDetail) return <Loader />

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
          onClick={handleSubmit}
          stock={productDetail.stock}
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
}
