import styled from 'styled-components'

export const StyledForm = styled.div`
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => theme.spacings.md}rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  border: none;
  background: ${({ theme }) => theme.colors.backgroundLight};
`
export const TextAerea = styled.textarea`
  color: ${({ theme }) => theme.colors.textLight};
  width: 100%;
  height: 120px;
  border: none;
  resize: none;
  background: ${({ theme }) => theme.colors.backgroundLight};
  :focus {
    outline: none;
  }
`
