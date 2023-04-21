import React from 'react'
import { IconButton } from '../../components/Button'
import { CategoryCard } from '../../components/CategoryCard'
// import { CategoryCardProps } from '../../components/CategoryCard/styled'
import { ProductCard } from '../../components/ProductCard'
import { Select } from '../../components/Select'
import { Text } from '../../components/Text'
import {
  CategoryWrapper,
  RowWrapper,
  SliderWrapper,
  SelectWrapper,
  TextWrapper,
  IconWrapper,
  SelectIconWrapper,
  ProductWrapper
} from './styled'

type Cards = {
  title: string
}
const CategoryCards: Cards[] = [
  { title: 'All' },
  { title: 'Salads' },
  { title: 'Soup' },
  { title: 'Side Dishes' },
  { title: 'Fruit' },
  { title: 'Drinks' }
]

export function Home() {
  return (
    <div className="App">
      <RowWrapper>
        <CategoryWrapper>
          {CategoryCards.map((item) => (
            <CategoryCard title={item.title} />
          ))}
        </CategoryWrapper>
        <SliderWrapper />
      </RowWrapper>
      <RowWrapper>
        <TextWrapper>
          <Text variant="h2" color="text">
            Popular Dishes
          </Text>
        </TextWrapper>
        <SelectIconWrapper>
          <SelectWrapper>
            <Select />
            <Select />
            <Select />
          </SelectWrapper>
          <IconWrapper>
            <IconButton rounded iconName="bars" color="background" />
            <IconButton rounded iconName="grid" color="primary" />
          </IconWrapper>
        </SelectIconWrapper>
      </RowWrapper>
      <ProductWrapper>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductWrapper>
    </div>
  )
}
