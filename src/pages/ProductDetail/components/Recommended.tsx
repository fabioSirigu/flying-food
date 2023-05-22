import { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Paper } from '../../../components/Paper'
import { ProductCardVariant } from '../../../components/ProductCard/Variant'
import { Text } from '../../../components/Text'
import { useGetRandomProductsQuery } from '../../../features/api/endpoints/productsEndpoints'
import { productActions } from '../../../features/products/reducer'
import { RaccomandedWrapper } from '../styled'

export const Recommended = memo(() => {
  const dispatch = useDispatch()
  const { data: recommendeds, isLoading } = useGetRandomProductsQuery()
  useEffect(() => {
    return () => {
      dispatch(productActions.clearRecommended())
    }
  }, [dispatch])

  if (isLoading)
    return (
      <Text variant="h3" color="secondary">
        Recommendeds is loading. . .
      </Text>
    )
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
