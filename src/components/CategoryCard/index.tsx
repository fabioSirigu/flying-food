import React, { memo, PropsWithChildren, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { select } from 'redux-saga/effects'
import { makeSelectQtyById } from '../../features/cart/selectors'
import { productActions } from '../../features/products/reducer'
import { selectSelectedTagId, selectTags } from '../../features/products/selectors'
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
        onClick={() => category && dispatch(productActions.selectedTags(category.id))}
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
