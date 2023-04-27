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

/* export const BackgroundPattern = styled.div`
  position: absolute;
  width: 40%;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  right: 0;
  top: 0;
  z-index: -1;
` */
