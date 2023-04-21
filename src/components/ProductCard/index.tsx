import React, { PropsWithChildren } from 'react'
import { Image } from '../Image'
import { Paper } from '../Paper'
import { Text } from '../Text'
import { FooterCard } from './FooterCard'
import { ImageWrapper, ProductCardProps, StyledCard, TextWrapper } from './styled'

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
            Prova di testo della card, contenuto aggiungivo
          </Text>
        </TextWrapper>
        <FooterCard />
      </StyledCard>
    </Paper>
  )
}
