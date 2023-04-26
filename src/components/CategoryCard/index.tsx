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

export const CategoryCard = ({ background, children, title, ...rest }: Props) => {
  return (
    <Paper>
      <StyledCategoryCard>
        <Image url="" />

        <TextWrapper>
          <Text variant="h5" color="textLight">
            {title}
          </Text>
        </TextWrapper>
        <SelectedCategory />
      </StyledCategoryCard>
    </Paper>
  )
}
