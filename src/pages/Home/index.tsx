import { useEffect, useState } from 'react'
import React from 'react'
import { getProducts, getTags } from '../../components/api'
import { ProductDto, TagDto } from '../../components/api/types'
import { IconButton } from '../../components/Button'
import { CategoryCard } from '../../components/CategoryCard'
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

export function Home() {
  const [products, setProducts] = useState<ProductDto[]>([])
  const [categories, setCategories] = useState<TagDto[]>([])

  useEffect(() => {
    getProducts().then((data) => setProducts(data))
    getTags().then((data) => setCategories(data.filter(({ hidden }) => !hidden)))
  }, [])

  return (
    <div className="App">
      <RowWrapper>
        <CategoryWrapper>
          {categories.length &&
            categories.map((category) => <CategoryCard category={category} />)}
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
