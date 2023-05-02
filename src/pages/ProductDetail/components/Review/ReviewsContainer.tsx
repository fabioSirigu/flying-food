import { useState, useEffect } from 'react'
import { getReviewsByProductId } from '../../../../components/api'
import { ReviewDto } from '../../../../components/api/types'

import { StyledReview, CardsContainer } from '../../styled'
import { Review } from './Review'
import { TitleSection } from './TitleSection'

type Props = {
  productId?: string
  onClick: () => void
}

export const ReviewsContainer = ({ productId, onClick }: Props) => {
  const [reviews, setReviews] = useState<ReviewDto[]>()

  useEffect(() => {
    getReviewsByProductId(productId!).then(setReviews)
  }, [productId])

  return (
    <StyledReview>
      <TitleSection onClick={onClick} />
      <CardsContainer>
        {reviews && reviews.map((review) => <Review review={review} />)}
      </CardsContainer>
    </StyledReview>
  )
}
