import { useEffect, useState } from 'react'
import { getProductsRandom } from '../../../../components/api'
import { ProductDto } from '../../../../components/api/types'
import { Image } from '../../../../components/Image'
import { Paper } from '../../../../components/Paper'
import { Text } from '../../../../components/Text'
import {
  LeftCard,
  MainText,
  RaccomandedCard,
  RaccomandedWrapper,
  RightCard
} from '../../styled'
import { FooterCard } from './FooterCard'

export const Raccomanded = () => {
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
            <RaccomandedCard>
              <LeftCard>
                <Image url={random.imageUrl} />
              </LeftCard>
              <RightCard>
                <Text color="text" variant="h5">
                  {random.name}
                </Text>
                <MainText>
                  <Text variant="h6" color="textLight">
                    {random.description.slice(0, 15)}...
                  </Text>
                </MainText>
                <FooterCard
                  price={random.price.value}
                  unity={random.size.type}
                  quantity={random.size.value}
                />
              </RightCard>
            </RaccomandedCard>
          </Paper>
        ))}
      </RaccomandedWrapper>
    </>
  )
}
