import styled from 'styled-components'

export const StyledForm = styled.form`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  border: none;
  background: ${({ theme }) => theme.colors.background};
`
export const TextAerea = styled.textarea`
  color: ${({ theme }) => theme.colors.text};

  width: 100%;
  height: 120px;
  border: none;
  resize: none;
  background: ${({ theme }) => theme.colors.background};
`
