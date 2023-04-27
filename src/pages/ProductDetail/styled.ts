import styled from 'styled-components'
import { Button } from '../../components/Button'

export const StyledDetails = styled.div`
  padding: 2rem;
  position: relative;
`

export const RowButton = styled.div`
  display: flex;
  justify-content: end;
`

export const DetailCard = styled.div`
  display: flex;
  gap: 1rem;
`

export const TextWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ImageWrapper = styled.div`
  width: 400px;
`
export const PriceWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const StyledButton = styled(Button)`
  width: 200px;
  padding: 1rem;
`

export const StyledReview = styled.div``

export const CardsContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
`

export const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
  padding: 1rem 1.4rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.radii[2]}rem;
`
