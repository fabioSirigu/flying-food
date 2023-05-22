import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../../../components/Loader'
import { Review } from '../../../components/Review'
import { Text } from '../../../components/Text'
import { useGetReviewsByProductIdQuery } from '../../../features/api/endpoints/productsEndpoints'
import { productActions } from '../../../features/products/reducer'
import { selectAllReviews } from '../../../features/products/selectors'
import { StyledReview, CardsContainer } from '../styled'
import { TitleSection } from './TitleSection'

type Props = {
  productId: string
  onClick: () => void
}

export const Reviews = memo(({ productId, onClick }: Props) => {
  const dispatch = useDispatch()
  const { data: reviews, isLoading } = useGetReviewsByProductIdQuery(productId)

  useEffect(() => {
    return () => {
      dispatch(productActions.clearReview())
    }
  }, [productId, dispatch])

  if (isLoading)
    return (
      <Text variant="h3" color="secondary">
        Reviews is loading...
      </Text>
    )
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
})
