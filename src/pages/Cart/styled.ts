import styled from 'styled-components'

export const WrapperCart = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
`

export const MainWrapper = styled.div`
  margin-top: 1rem;
  height: 100%;
  display: flex;
  gap: 1rem;
`
export const ListCartWrapper = styled.div`
  overflow-y: scroll;
  height: calc(100% - 120px);
`

export const FormCheckoutWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 0 1rem;
`
export const PaymentCards = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  gap: 1rem;
`

export const SingleCardCheckbox = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.textLight};
  border-radius: ${({ theme }) => theme.radii[2]}rem;

  display: flex;
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`
export const FooterFormWrapper = styled.div`
  display: flex;
  column-gap: 1rem;
`

export const StyledExpirationSelect = styled.div`
  display: flex;
  gap: 1rem;
`
export const ExpirationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const StyledCvv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
`

export const NoProductWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

export const StyledTotal = styled.div`
  width: 600px;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.backgroundLight};
`
