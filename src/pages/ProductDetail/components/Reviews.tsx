import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReviewsByProductId } from '../../../components/api'
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
  const allReviews = useSelector(selectAllReviews)
  const dispatch = useDispatch()

  useEffect(() => {
    getReviewsByProductId(productId).then((res) =>
      dispatch(productActions.fetchReviewsSuccess(res))
    )
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
