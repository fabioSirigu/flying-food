import React, { PropsWithChildren } from 'react'
import { Image } from '../Image'
import { Paper } from '../Paper'
import { Text } from '../Text'
import { FooterCard } from './FooterCard'
import { ImageWrapper, ProductCardProps, StyledCard, TextWrapper } from './styled'

type Props = PropsWithChildren<Partial<ProductCardProps>>
type Product = {
  product: any
}
export const ProductCard = ({
  product,
  background,
  children,
  ...rest
}: Props & Product) => {
  return (
    <Paper>
      <StyledCard>
        <ImageWrapper>
          <Image url={product.imageUrl} />
        </ImageWrapper>
        <TextWrapper>
          <Text variant="h3" color="text">
            {product.name}
          </Text>
          <Text variant="p" color="textLight">
            {product.description.length > 140
              ? `${product.description.slice(0, 140)}...`
              : product.description}
          </Text>
        </TextWrapper>
        <FooterCard
          price={product.price.value}
          unity={product.size.type}
          quantity={product.size.value}
        />
      </StyledCard>
    </Paper>
  )
}
