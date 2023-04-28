import React, { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductDto } from '../api/types'
import { Image } from '../Image'
import { Paper } from '../Paper'
import { Text } from '../Text'
import { FooterCard } from './FooterCard'
import {
  ImageWrapper,
  ProductCardProps,
  StyledCard,
  TextWrapper,
  LinkWrapper
} from './styled'

type Props = PropsWithChildren<Partial<ProductCardProps>>
type Product = {
  product: ProductDto
}
export const ProductCard = ({
  product,
  background,
  children,
  ...rest
}: Props & Product) => {
  const navigate = useNavigate()
  return (
    <Paper>
      <StyledCard>
        <LinkWrapper onClick={() => navigate(`/catalog/${product.id}`)}>
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
        </LinkWrapper>
        <FooterCard
          price={product.price}
          unity={product.size.type}
          quantity={product.size.value}
        />
      </StyledCard>
    </Paper>
  )
}
