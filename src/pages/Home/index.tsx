import { useEffect, useState } from 'react'
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
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://d4crsehc65.execute-api.eu-central-1.amazonaws.com/prod/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'e34vAOxj2C9fo2NVp9kT89QBOA4P1qvl459VtZak'
      }
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setProducts(data)
      })
  }, [])

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
        {products.length && products.map((product) => <ProductCard product={product} />)}
      </ProductWrapper>
    </div>
  )
}
