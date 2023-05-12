import { memo, useCallback, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { FormReview } from '../../components/FormReview'
import { Modal } from '../../components/Modal/Modal'

import { CardDetail } from './components/CardDetail'

import { Recommended } from './components/Recommended'
import { Reviews } from './components/Reviews'

import { RowButton, StyledDetails } from './styled'

export const ProductDetail = memo(() => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  const toggleModal = useCallback(() => {
    setShowModal((state) => !state)
  }, [setShowModal])

  const handleNavigate = useCallback(() => {
    navigate('/catalog')
  }, [navigate])

  return (
    <>
      <Modal opened={showModal} onClose={toggleModal}>
        <FormReview id={id!} />
      </Modal>
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
            onClick={handleNavigate}
          />
        </RowButton>
        <CardDetail />
        <Reviews onClick={toggleModal} productId={id!} />
        <Recommended />
      </StyledDetails>
    </>
  )
})
