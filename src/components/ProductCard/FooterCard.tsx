import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../features/cart/reducer'
import { selectCart } from '../../features/cart/selectors'
import { ProductDto } from '../api/types'
import { IconButton } from '../Button'
import { Price } from '../Price'
import { Tag } from '../Tag'
import { FooterCardWrapper, FooterRightWrapper } from './styled'

type Props = {
  product: ProductDto
}

export const FooterCard = ({ product }: Props) => {
  const dispatch = useDispatch()
  const cart = useSelector(selectCart)
  const handleSubmit = useCallback(() => {
    dispatch(
      cartActions.addToCart({
        product,
        quantity: 1
      })
    )
  }, [dispatch, product])

  const removeCart = useCallback(() => {
    dispatch(cartActions.removeToCart(product.id))
  }, [dispatch, product])

  const isInCart = cart.findIndex((cartItem) => cartItem.product.id === product.id)

  const button = useMemo(
    () =>
      isInCart !== -1 ? (
        <IconButton
          onClick={removeCart}
          rounded
          iconName="minus"
          padding="lg"
          color="primary"
        />
      ) : (
        <IconButton
          onClick={handleSubmit}
          rounded
          iconName="plus"
          padding="lg"
          color="secondary"
        />
      ),
    [removeCart, handleSubmit, isInCart]
  )

  return (
    <FooterCardWrapper>
      <Price title={product.price} font="h3" />
      <FooterRightWrapper>
        <Tag quantity={product.size.value} value={product.size.type} font="h6" />
        {button}
      </FooterRightWrapper>
    </FooterCardWrapper>
  )
}
