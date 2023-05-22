import { memo } from 'react'
import { useSelector } from 'react-redux'
import { CategoryCard } from '../../components/CategoryCard'
import { useGetTagsQuery } from '../../features/api/endpoints/tagsEndpoints'
import { selectSelectedTagId } from '../../features/tags/selectors'
import { CategoryWrapper } from './styled'

export const CategorySection = memo(() => {
  const { data: categories, isSuccess } = useGetTagsQuery()

  const categoryFiltered = isSuccess ? categories.filter(({ hidden }) => !hidden) : []
  const selectedCategory = useSelector(selectSelectedTagId)

  return (
    <CategoryWrapper>
      {categoryFiltered.length &&
        categoryFiltered.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            selected={selectedCategory === category.id}
          />
        ))}
    </CategoryWrapper>
  )
})
