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

export const StyledReview = styled.div`
  margin-bottom: 3rem;
`

export const CardsContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
`
export const TitleWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RaccomandedWrapper = styled.div`
  margin-top: 1rem;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`
export const LeftCard = styled.div`
  width: 60%;
`

export const RightCard = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const MainText = styled.div`
  flex-grow: 1;
`

export const Title = styled(TitleWrapper)`
  width: 500px;
  gap: 1rem;
  padding: 1rem 1.2rem;
`
