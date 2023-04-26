import React, { PropsWithChildren } from 'react'
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

export const CategoryCard = ({
  background,
  category,
  children,
  imageUrl,
  ...rest
}: Props) => {
  return (
    <Paper>
      <StyledCategoryCard category={category}>
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
}
