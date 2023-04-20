import React, { PropsWithChildren } from 'react'
import { Image } from '../Image'
import { Paper } from '../Paper'
import { Text } from '../Text'
import {
  ImageWrapper,
  CategoryCardProps,
  StyledCategoryCard,
  TextWrapper
} from './styled'

type Props = PropsWithChildren<Partial<CategoryCardProps>>

export const CategoryCard = ({ background, children, ...rest }: Props) => {
  return (
    <Paper>
      <StyledCategoryCard>
        <ImageWrapper>
          <Image url="https://static.vecteezy.com/system/resources/previews/009/345/591/original/stir-fry-salad-with-sushi-and-shrimps-in-a-bowl-with-a-slate-background-top-view-copy-space-shrimp-and-vegetables-served-with-salad-chopsticks-with-asian-food-vector-free-png.png" />
        </ImageWrapper>
        <TextWrapper>
          <Text text="All" variant="h4" color="textLight" />
        </TextWrapper>
      </StyledCategoryCard>
    </Paper>
  )
}
