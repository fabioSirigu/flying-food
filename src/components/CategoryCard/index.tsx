import React, { memo, PropsWithChildren } from 'react'
import { useDispatch } from 'react-redux'
import { productActions } from '../../features/products/reducer'
import { Image } from '../Image'
import { Paper } from '../Paper'
import { Text } from '../Text'
import {
  CategoryCardProps,
  StyledCategoryCard,
  TextWrapper,
  SelectedCategory
} from './styled'

type Props = PropsWithChildren<Partial<CategoryCardProps>>
export const CategoryCard = memo(({ category }: Props) => {
  const dispatch = useDispatch()

  return (
    <Paper>
      <StyledCategoryCard
        category={category}
        onClick={() => dispatch(productActions.selectedTags(category!.id))}
      >
        <Image url={category?.imageUrl} />
        <TextWrapper>
          <Text variant="h5" color="textLight">
            {category?.namePlural}
          </Text>
        </TextWrapper>
        <SelectedCategory />
      </StyledCategoryCard>
    </Paper>
  )
})
