import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CategoryCard } from '../../components/CategoryCard'
import { productActions } from '../../features/products/reducer'
import { selectTags } from '../../features/products/selectors'
import { CategoryWrapper } from './styled'

export const CategorySection = memo(() => {
  const categories = useSelector(selectTags)
  const dispatch = useDispatch()
  const categoryFiltered = categories.filter(({ hidden }) => !hidden)

  useEffect(() => {
    dispatch(productActions.fetchTags())
  }, [dispatch])

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
})
