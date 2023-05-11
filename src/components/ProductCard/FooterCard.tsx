// import { ValueType } from '../api/types'
import { useDispatch, useSelector } from 'react-redux'
import { ItemInCart } from '../../features/cart/model'
import { cartActions } from '../../features/cart/reducer'
import { selectProductDetail } from '../../features/products/selectors'
import { ProductDto, ValueType } from '../api/types'
import { IconButton } from '../Button'
import { Price } from '../Price'
import { Tag } from '../Tag'
import { FooterCardWrapper, FooterRightWrapper } from './styled'

type Props = {
  product: ProductDto
}

export const FooterCard = ({ product }: Props) => {
  const productDetail = useSelector(selectProductDetail)
  const dispatch = useDispatch()
  const handleSubmit = (product: ItemInCart) => {
    dispatch(cartActions.addToCart(product))
  }

  const productInCart: ItemInCart = {
    product: productDetail!,
    quantity: 1
  }

  return (
    <FooterCardWrapper>
      <Price title={product.price} font="h3" />
      <FooterRightWrapper>
        <Tag quantity={product.size.value} value={product.size.type} font="h6" />
        <IconButton
          onClick={() => handleSubmit(productInCart)}
          rounded
          iconName="plus"
          padding="lg"
          color="secondary"
        />
      </FooterRightWrapper>
    </FooterCardWrapper>
  )
}
