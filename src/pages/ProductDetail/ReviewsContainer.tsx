import { ReviewDto } from '../../components/api/types'
import { Text } from '../../components/Text'
import { Review } from './Review'
import { StyledReview, CardsContainer } from './styled'

type Props = {
  reviews?: ReviewDto[]
}
export const ReviewsContainer = ({ reviews }: Props) => {
  return (
    <StyledReview>
      <Text color="text">Review</Text>
      <CardsContainer>
        {reviews && reviews.map((review) => <Review review={review} />)}
      </CardsContainer>
    </StyledReview>
  )
}
