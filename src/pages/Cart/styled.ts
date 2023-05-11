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

export const FormCheckoutWrapper = styled.div``

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
