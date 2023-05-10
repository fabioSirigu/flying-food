import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Review } from '../../../components/Review'
import { Text } from '../../../components/Text'
import { productActions } from '../../../features/products/reducer'
import { selectAllReviews } from '../../../features/products/selectors'
import { StyledReview, CardsContainer } from '../styled'
import { TitleSection } from './TitleSection'

type Props = {
  productId: string
  onClick: () => void
}

export const Reviews = ({ productId, onClick }: Props) => {
  const dispatch = useDispatch()
  const allReviews = useSelector(selectAllReviews)

  useEffect(() => {
    dispatch(productActions.fetchReviewsByProductId(productId))
  }, [productId, dispatch])

  return (
    <StyledReview>
      <TitleSection onClick={onClick} />
      <CardsContainer>
        {!allReviews?.length ? (
          <Text variant="h2">No Reviews..</Text>
        ) : (
          allReviews.map((review, index) => (
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
