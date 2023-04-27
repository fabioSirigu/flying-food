import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { CardDetail } from './CardDetail'
import { ReviewsContainer } from './ReviewsContainer'

import { RowButton, StyledDetails } from './styled'

export const ProductDetail = (props: any) => {
  const params = useParams()
  const id = params.id!
  const navigate = useNavigate()

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
          onClick={() => navigate('/catalog')}
        />
      </RowButton>
      <CardDetail />
      <ReviewsContainer productId={id} />
    </StyledDetails>
  )
}
