import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getReviewsByProductId } from '../../components/api'
import { ReviewDto } from '../../components/api/types'
import { Button } from '../../components/Button'
import { CardDetail } from './CardDetail'
import { ReviewsContainer } from './ReviewsContainer'

import { RowButton, StyledDetails } from './styled'

export const ProductDetail = (props: any) => {
  const params = useParams()
  const id = params.id!
  const navigate = useNavigate()
  const [reviews, setReviews] = useState<ReviewDto[]>()
  useEffect(() => {
    getReviewsByProductId(id).then((data) => setReviews(data))
  }, [id])
  return (
    <StyledDetails>
      <RowButton>
        <Button
          border="1"
          font="h5"
          outline
          padding="lg"
          title="Return To Catalog"
          iconName="right"
          colorText="text"
          onClick={() => navigate('/')}
        />
      </RowButton>
      <CardDetail />
      <ReviewsContainer reviews={reviews} />
    </StyledDetails>
  )
}
