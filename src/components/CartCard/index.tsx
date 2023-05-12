import { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { ItemInCart } from '../../features/cart/model'
import { cartActions } from '../../features/cart/reducer'
import { IconButton } from '../Button'
import { Counter } from '../Counter'
import { Image } from '../Image'
import { Paper } from '../Paper'
import { Price } from '../Price'
import { Tag } from '../Tag'
import { Text } from '../Text'
import { CardWrapper, ImageWrapper, TextWrapper } from './styled'

type Props = {
  cartItem: ItemInCart
}

export const CartCard = memo(({ cartItem }: Props) => {
  const dispatch = useDispatch()
  const { product, quantity } = cartItem

  const handleClickPlus = useCallback(() => {
    if (quantity < product.stock) {
      dispatch(cartActions.incrementQuantity(product.id))
    }
  }, [dispatch, quantity, product])

  const handleClickMinus = useCallback(() => {
    if (quantity > 1) {
      dispatch(cartActions.decrementQuantity(product.id))
    }
  }, [dispatch, quantity, product])

  const removeItem = useCallback(() => {
    dispatch(cartActions.removeToCart(product.id))
  }, [dispatch, product])

  if (!product) return null

  return (
    <Paper>
      <CardWrapper>
        <ImageWrapper>
          <Image rounded url={product.imageUrl} />
        </ImageWrapper>
        <TextWrapper>
          <Text color="text">{product.name}</Text>
          <Tag quantity={product.size.value} value={product.size.type} />
        </TextWrapper>
        <Counter
          counter={quantity}
          onClickMinus={handleClickMinus}
          onClickPlus={handleClickPlus}
        />
        <Price title={product.price} />
        <IconButton
          rounded
          color="primary"
          iconColor="text"
          iconName="close"
          onClick={removeItem}
        />
      </CardWrapper>
    </Paper>
  )
})
