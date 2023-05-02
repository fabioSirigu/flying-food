import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../components/Button'

import { CardDetail } from './components/CardDetail'

import { Recommended } from './components/Recommended'
import { Reviews } from './components/Reviews'

import { RowButton, StyledDetails } from './styled'

export const ProductDetail = (props: any) => {
  const params = useParams()
  const id = params.id!
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(!showModal)
  }
  return (
    <>
      <StyledDetails>
        <RowButton>
          <Button
            border="1"
            font="h5"
            outline
            padding="lg"
            title="Return To Catalog"
            paddingRight
            iconName="right"
            colorText="text"
            onClick={() => navigate('/catalog')}
          />
        </RowButton>
        <CardDetail />
        <Reviews onClick={openModal} productId={id} />
        <Recommended />
      </StyledDetails>
    </>
  )
}
