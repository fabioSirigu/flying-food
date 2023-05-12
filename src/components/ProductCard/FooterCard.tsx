import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../features/cart/reducer'
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

  const handleSubmit = useCallback(() => {
    dispatch(
      cartActions.addToCart({
        product,
        quantity: 1
      })
    )
  }, [dispatch, product])

  return (
    <FooterCardWrapper>
      <Price title={product.price} font="h3" />
      <FooterRightWrapper>
        <Tag quantity={product.size.value} value={product.size.type} font="h6" />
        <IconButton
          onClick={handleSubmit}
          rounded
          iconName="plus"
          padding="lg"
          color="secondary"
        />
      </FooterRightWrapper>
    </FooterCardWrapper>
  )
}
