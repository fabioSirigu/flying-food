import styled from 'styled-components'

export const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 380px;
  padding: 1rem 1.4rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.radii[2]}rem;
`
