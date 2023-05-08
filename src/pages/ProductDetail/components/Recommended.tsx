import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsRandom } from '../../../components/api'

import { Paper } from '../../../components/Paper'
import { ProductCardVariant } from '../../../components/ProductCard/Variant'
import { Text } from '../../../components/Text'
import { productActions } from '../../../features/products/reducer'
import { selectAllRecommendeds } from '../../../features/products/selectors'
import { RaccomandedWrapper } from '../styled'

export const Recommended = () => {
  const recommendeds = useSelector(selectAllRecommendeds)

  const dispatch = useDispatch()

  useEffect(() => {
    getProductsRandom().then((data) =>
      dispatch(productActions.fetchRandomProductsSuccess(data))
    )
  }, [dispatch])

  return (
    <>
      <Text color="text" variant="h3">
        Raccomanded
      </Text>
      <RaccomandedWrapper>
        {recommendeds.map((recommended) => (
          <Paper key={recommended.id}>
            <ProductCardVariant
              id={recommended.id}
              imageUrl={recommended.imageUrl}
              productName={recommended.name}
              productDescription={recommended.description}
              price={recommended.price}
              unity={recommended.size.type}
              quantity={recommended.size.value}
            />
          </Paper>
        ))}
      </RaccomandedWrapper>
    </>
  )
}
