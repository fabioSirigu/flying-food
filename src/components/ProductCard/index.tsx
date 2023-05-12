import React, { PropsWithChildren, useCallback } from 'react'
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

type Props = PropsWithChildren<
  {
    product: ProductDto
  } & Partial<ProductCardProps>
>

export const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate()

  const { imageUrl, description, name, id } = product

  const handleNavigate = useCallback(() => {
    navigate(`/catalog/${id}`)
  }, [navigate, id])

  return (
    <Paper>
      <StyledCard>
        <LinkWrapper onClick={handleNavigate}>
          <ImageWrapper>
            <Image url={imageUrl} />
          </ImageWrapper>
          <TextWrapper>
            <Text variant="h3" color="text">
              {name}
            </Text>
            <Text variant="p" color="textLight">
              {description.length > 140 ? `${description.slice(0, 140)}...` : description}
            </Text>
          </TextWrapper>
        </LinkWrapper>
        <FooterCard product={product} />
      </StyledCard>
    </Paper>
  )
}
