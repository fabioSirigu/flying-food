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
  product?: ItemInCart
}

export const CartCard = ({ product }: Props) => {
  const dispatch = useDispatch()
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
          onClickMinus={() => console.log()}
          onClickPlus={() => console.log()}
        />
        <Price title={product.price} />
        <IconButton
          rounded
          color="primary"
          iconColor="text"
          iconName="close"
          onClick={() => dispatch(cartActions.removeToCart(3))}
        />
      </CardWrapper>
    </Paper>
  )
}
