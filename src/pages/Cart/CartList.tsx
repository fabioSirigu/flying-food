import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { CartCard } from '../../components/CartCard'
import { Text } from '../../components/Text'
import { selectCart } from '../../features/cart/selectors'
import { ListCartWrapper, NoProductWrapper } from './styled'

export const CartList = () => {
  const productInCart = useSelector(selectCart)
  const navigate = useNavigate()
  return (
    <ListCartWrapper>
      {!productInCart.length ? (
        <NoProductWrapper>
          <Text variant="h1" color="primary">
            Add something!
          </Text>
          <Button
            color="secondary"
            colorText="text"
            padding="md"
            title="Return To Catalog"
            onClick={() => navigate('/catalog')}
          />
        </NoProductWrapper>
      ) : (
        productInCart.map((cartItem) => (
          <CartCard key={cartItem.product.id} cartItem={cartItem} />
        ))
      )}
    </ListCartWrapper>
  )
}
