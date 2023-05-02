import { useEffect, useState } from 'react'
import { getProductsRandom } from '../../../components/api'
import { ProductDto } from '../../../components/api/types'
import { Paper } from '../../../components/Paper'
import { ProductCardVariant } from '../../../components/ProductCard/Variant'
import { Text } from '../../../components/Text'
import { RaccomandedWrapper } from '../styled'

export const Recommended = () => {
  const [recommended, setRecommended] = useState<ProductDto[]>([])

  useEffect(() => {
    getProductsRandom().then((data) => setRecommended(data))
  }, [])

  return (
    <>
      <Text color="text" variant="h3">
        Raccomanded
      </Text>
      <RaccomandedWrapper>
        {recommended.map((recommended) => (
          <Paper key={recommended.id}>
            <ProductCardVariant
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
