import { useState, useEffect } from 'react'
import { getReviewsByProductId } from '../../../components/api'
import { ReviewDto } from '../../../components/api/types'
import { Review } from '../../../components/Review'
import { Text } from '../../../components/Text'
import { StyledReview, CardsContainer } from '../styled'
import { TitleSection } from './TitleSection'

type Props = {
  productId?: string
  onClick: () => void
}

export const Reviews = ({ productId, onClick }: Props) => {
  const [reviews, setReviews] = useState<ReviewDto[]>()

  useEffect(() => {
    getReviewsByProductId(productId!).then(setReviews)
  }, [productId])

  return (
    <StyledReview>
      <TitleSection onClick={onClick} />
      <CardsContainer>
        {!reviews?.length ? (
          <Text variant="h2">No Reviews..</Text>
        ) : (
          reviews.map((review, index) => (
            <Review
              key={index}
              author={review.author}
              date={review.date}
              body={review.text}
            />
          ))
        )}
      </CardsContainer>
    </StyledReview>
  )
}
