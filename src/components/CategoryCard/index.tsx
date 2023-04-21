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
        <Image url="https://static.vecteezy.com/system/resources/previews/009/345/591/original/stir-fry-salad-with-sushi-and-shrimps-in-a-bowl-with-a-slate-background-top-view-copy-space-shrimp-and-vegetables-served-with-salad-chopsticks-with-asian-food-vector-free-png.png" />

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
