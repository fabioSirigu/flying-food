import { useEffect, useState } from 'react'
import { getProductsRandom } from '../../../components/api'
import { ProductDto } from '../../../components/api/types'
import { Paper } from '../../../components/Paper'
import { ProductCardVariant } from '../../../components/ProductCard/Variant'
import { Text } from '../../../components/Text'
import { RaccomandedWrapper } from '../styled'

export const Recommended = () => {
  const [raccomandeds, setRaccomandeds] = useState<ProductDto[]>([])

  useEffect(() => {
    getProductsRandom().then((data) => setRaccomandeds(data))
  }, [])

  return (
    <>
      <Text color="text" variant="h3">
        Raccomanded
      </Text>
      <RaccomandedWrapper>
        {raccomandeds.map((raccomanded) => (
          <Paper key={raccomanded.id}>
            <ProductCardVariant
              imageUrl={raccomanded.imageUrl}
              productName={raccomanded.name}
              productDescription={raccomanded.description}
              price={raccomanded.price}
              unity={raccomanded.size.type}
              quantity={raccomanded.size.value}
            />
          </Paper>
        ))}
      </RaccomandedWrapper>
    </>
  )
}
