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
  product: ItemInCart
}

export const CartCard = ({ product }: Props) => {
  const dispatch = useDispatch()

  const handleClickPlus = () => {
    if (product.quantity < product.product.stock) {
      dispatch(cartActions.incrementQuantity(product.product.id))
      // dispatch(cartActions.updateTotalPrice())
    }
  }

  const handleClickMinus = () => {
    if (product.quantity > 1) {
      dispatch(cartActions.decrementQuantity(product.product.id))
      // dispatch(cartActions.updateTotalPrice())
    }
  }
  const removeItem = () => {
    dispatch(cartActions.removeToCart(product.product.id))
    // dispatch(cartActions.updateTotalPrice())
  }
  if (!product) return null

  return (
    <Paper>
      <CardWrapper>
        <ImageWrapper>
          <Image rounded url={product.product.imageUrl} />
        </ImageWrapper>
        <TextWrapper>
          <Text color="text">{product.product.name}</Text>
          <Tag quantity={product.product.size.value} value={product.product.size.type} />
        </TextWrapper>
        <Counter
          counter={product.quantity}
          onClickMinus={() => handleClickMinus()}
          onClickPlus={() => handleClickPlus()}
        />
        <Price title={product.product.price} />
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
