import styled from 'styled-components'
import { Button } from '../../components/Button'

export type StyledPropsButton = {
  stock: number
  disabled: boolean
}
export const StyledDetails = styled.div`
  padding: 2rem;
  position: relative;
`

export const RowButton = styled.div`
  width: 800px;
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
  align-items: center;
  gap: 0.8rem;
`

export const StyledButton = styled(Button)<StyledPropsButton>`
  width: 200px;
  padding: 1rem;
  opacity: ${({ stock }) => (stock === 0 ? 0.5 : 1)};
`

export const StyledReview = styled.div`
  margin-bottom: 3rem;
`

export const CardsContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
`
export const TitleWrapper = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RaccomandedWrapper = styled.div`
  margin-top: 1rem;
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`

export const Title = styled(TitleWrapper)`
  width: 500px;
  gap: 1rem;
  padding: 1rem 1.2rem;
`
export const OutOfStock = styled.div`
  font-style: underline;
`
