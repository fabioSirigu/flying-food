import { useState, useEffect } from 'react'
import { getReviewsByProductId } from '../../components/api'
import { ReviewDto } from '../../components/api/types'
import { Text } from '../../components/Text'
import { Review } from './Review'
import { StyledReview, CardsContainer } from './styled'

type Props = {
  productId?: string
}

export const ReviewsContainer = ({ productId }: Props) => {
  const [reviews, setReviews] = useState<ReviewDto[]>()

  useEffect(() => {
    getReviewsByProductId(productId!).then(setReviews)
  }, [productId])

  return (
    <StyledReview>
      <Text color="text">Review</Text>
      <CardsContainer>
        {reviews && reviews.map((review) => <Review review={review} />)}
      </CardsContainer>
    </StyledReview>
  )
}
