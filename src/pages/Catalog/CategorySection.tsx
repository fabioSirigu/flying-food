import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTags } from '../../components/api'

import { CategoryCard } from '../../components/CategoryCard'
import { productActions } from '../../features/products/reducer'
import { selectTags } from '../../features/products/selectors'
import { CategoryWrapper } from './styled'

export const CategorySection = () => {
  const categories = useSelector(selectTags)

  const dispatch = useDispatch()

  useEffect(() => {
    getTags().then((data) =>
      dispatch(productActions.fetchTagsProducts(data.filter(({ hidden }) => !hidden)))
    )
  }, [dispatch])

  return (
    <>
      <CategoryWrapper>
        {categories.length &&
          categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
      </CategoryWrapper>
    </>
  )
}
