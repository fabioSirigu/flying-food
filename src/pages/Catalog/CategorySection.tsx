import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTags } from '../../components/api'

import { CategoryCard } from '../../components/CategoryCard'
import { productActions } from '../../features/products/reducer'
import { selectTags } from '../../features/products/selectors'
import { CategoryWrapper } from './styled'

export const CategorySection = () => {
  const categories = useSelector(selectTags)
  const categoryFiltered = categories.filter(({ hidden }) => !hidden)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productActions.fetchTagsProducts(categories))
  }, [dispatch, categories])

  return (
    <>
      <CategoryWrapper>
        {categoryFiltered.length &&
          categoryFiltered.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
      </CategoryWrapper>
    </>
  )
}
