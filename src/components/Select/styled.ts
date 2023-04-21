import styled from 'styled-components'

export type SelectProps = {
  option?: string
}

export const StyledSelect = styled.select<SelectProps>`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) =>
    `${theme.spacings['md'] / 2}rem ${theme.spacings['md'] * 2}rem`};
  border-radius: ${({ theme }) => theme.radii[3]}rem;
`
