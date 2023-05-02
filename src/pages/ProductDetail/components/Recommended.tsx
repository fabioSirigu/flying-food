import { useEffect, useState } from 'react'
import { getProductsRandom } from '../../../components/api'
import { ProductDto } from '../../../components/api/types'
import { Paper } from '../../../components/Paper'
import { ProductCardVariant } from '../../../components/ProductCard/Variant'
import { Text } from '../../../components/Text'
import { RaccomandedWrapper } from '../styled'

export const Recommended = () => {
  const [randoms, setRandoms] = useState<ProductDto[]>([])

  useEffect(() => {
    getProductsRandom().then((data) => setRandoms(data))
  }, [])
  return (
    <>
      <Text color="text" variant="h3">
        Raccomanded
      </Text>
      <RaccomandedWrapper>
        {randoms.map((random) => (
          <Paper>
            <ProductCardVariant
              imageUrl={random.imageUrl}
              productName={random.name}
              productDescription={random.description}
              price={random.price}
              unity={random.size.type}
              quantity={random.size.value}
            />
          </Paper>
        ))}
      </RaccomandedWrapper>
    </>
  )
}
