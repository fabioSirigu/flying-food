import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { CardDetail } from './CardDetail'

import { RowButton, StyledDetails } from './styled'

export const ProductDetail = (props: any) => {
  const navigate = useNavigate()
  return (
    <StyledDetails>
      <RowButton>
        <Button
          border="1"
          font="h5"
          outline
          title="Return To Catalog"
          iconName="right"
          onClick={() => navigate('/')}
        />
      </RowButton>
      <CardDetail />
    </StyledDetails>
  )
}
