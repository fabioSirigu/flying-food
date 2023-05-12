import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Paper } from '../../../components/Paper'
import { ProductCardVariant } from '../../../components/ProductCard/Variant'
import { Text } from '../../../components/Text'
import { productActions } from '../../../features/products/reducer'
import { selectAllRecommendeds } from '../../../features/products/selectors'
import { RaccomandedWrapper } from '../styled'

export const Recommended = memo(() => {
  const dispatch = useDispatch()
  const recommendeds = useSelector(selectAllRecommendeds)

  useEffect(() => {
    dispatch(productActions.fetchRandomProducts())

    return () => {
      dispatch(productActions.clearRecommended())
    }
  }, [dispatch])

  return (
    <>
      <Text color="text" variant="h3">
        Raccomanded
      </Text>
      <RaccomandedWrapper>
        {recommendeds &&
          recommendeds.map((recommended) => (
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
})
