import { useState, useEffect } from 'react'
import { getTags } from '../../components/api'
import { TagDto } from '../../components/api/types'
import { CategoryCard } from '../../components/CategoryCard'
import { CategoryWrapper } from './styled'

export const CategorySection = () => {
  const [categories, setCategories] = useState<TagDto[]>([])

  useEffect(() => {
    getTags().then((data) => setCategories(data.filter(({ hidden }) => !hidden)))
  }, [])
  return (
    <>
      <CategoryWrapper>
        {categories.length &&
          categories.map((category) => <CategoryCard category={category} />)}
      </CategoryWrapper>
    </>
  )
}
