import { memo } from 'react'
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

const CartCardComponent = ({ cartItem }: Props) => {
  const dispatch = useDispatch()
  const { product, quantity } = cartItem

  const handleClickPlus = () => {
    if (quantity < product.stock) {
      dispatch(cartActions.incrementQuantity(product.id))
    }
  }

  const handleClickMinus = () => {
    if (quantity > 1) {
      dispatch(cartActions.decrementQuantity(product.id))
    }
  }
  const removeItem = () => {
    dispatch(cartActions.removeToCart(product.id))
  }
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
          onClickMinus={() => handleClickMinus()}
          onClickPlus={() => handleClickPlus()}
        />
        <Price title={product.price} />
        <IconButton
          rounded
          color="primary"
          iconColor="text"
          iconName="close"
          onClick={() => removeItem()}
        />
      </CardWrapper>
    </Paper>
  )
}

export const CartCard = memo(CartCardComponent)
