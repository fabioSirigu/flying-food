import React, { memo, PropsWithChildren } from 'react'
import { useDispatch } from 'react-redux'
import { tagActions } from '../../features/tags/reducer'
import { Image } from '../Image'
import { Paper } from '../Paper'
import { Text } from '../Text'
import { CategoryCardProps, StyledCategoryCard, TextWrapper } from './styled'

type Props = PropsWithChildren<Partial<CategoryCardProps>>
export const CategoryCard = memo(({ category, selected }: Props) => {
  const dispatch = useDispatch()

  return (
    <Paper>
      <StyledCategoryCard
        category={category}
        onClick={() => dispatch(tagActions.selectedTags(category!.id))}
        selected={selected}
      >
        <Image url={category?.imageUrl} />
        <TextWrapper>
          <Text variant="h5" color="textLight">
            {category?.namePlural}
          </Text>
        </TextWrapper>
      </StyledCategoryCard>
    </Paper>
  )
})
