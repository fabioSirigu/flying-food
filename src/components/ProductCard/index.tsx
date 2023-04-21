import React, { PropsWithChildren } from 'react'
import { IconButton } from '../Button'
import { Image } from '../Image'
import { Paper } from '../Paper'
import { Price } from '../Price'
import { Tag } from '../Tag'
import { Text } from '../Text'
// import { SearchBox } from '../SearchBox'
// import { Text } from '../Text'
import {
  FooterCardWrapper,
  FooterRightWrapper,
  ImageWrapper,
  ProductCardProps,
  StyledCard,
  TextWrapper
} from './styled'

type Props = PropsWithChildren<Partial<ProductCardProps>>

export const ProductCard = ({ background, children, ...rest }: Props) => {
  return (
    <Paper>
      <StyledCard>
        <ImageWrapper>
          <Image url="https://static.vecteezy.com/system/resources/previews/009/345/591/original/stir-fry-salad-with-sushi-and-shrimps-in-a-bowl-with-a-slate-background-top-view-copy-space-shrimp-and-vegetables-served-with-salad-chopsticks-with-asian-food-vector-free-png.png" />
        </ImageWrapper>
        <TextWrapper>
          <Text variant="h3" color="text">
            Titolo
          </Text>
          <Text variant="p" color="textLight">
            Prova di testo della card
          </Text>
        </TextWrapper>
        <FooterCardWrapper>
          <Price title="120" font="p" />
          <FooterRightWrapper>
            <Tag title="280g" font="h6" />
            <IconButton rounded iconName="plus" padding="lg" color="secondary" />
          </FooterRightWrapper>
        </FooterCardWrapper>
      </StyledCard>
    </Paper>
  )
}
