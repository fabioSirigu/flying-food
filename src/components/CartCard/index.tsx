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
    if (product.quantity < product.stock) {
      dispatch(cartActions.incrementQuantity(product.id))
    }
  }

  const handleClickMinus = () => {
    if (product.quantity > 1) {
      dispatch(cartActions.decrementQuantity(product.id))
    }
  }
  if (!product) return null

  return (
    <Paper>
      <CardWrapper>
        <ImageWrapper>
          <Image rounded url={product.image} />
        </ImageWrapper>
        <TextWrapper>
          <Text color="text">{product.title}</Text>
          <Tag quantity={product.sizeQuantity} value={product.sizeUnity} />
        </TextWrapper>
        <Counter
          counter={product.quantity}
          onClickMinus={() => handleClickMinus()}
          onClickPlus={() => handleClickPlus()}
        />
        <Price title={product.price} />
        <IconButton
          rounded
          color="primary"
          iconColor="text"
          iconName="close"
          onClick={() => dispatch(cartActions.removeToCart(product.id))}
        />
      </CardWrapper>
    </Paper>
  )
}
