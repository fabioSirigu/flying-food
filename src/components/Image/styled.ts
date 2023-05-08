import styled, { css } from 'styled-components'
// import { ThemeColor, FontVariant, ThemeSpacing } from '../../style/theme'
export type PropsImage = {
  rounded?: boolean
}

export const StyledImage = styled.img<PropsImage>`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
  ${({ rounded }) =>
    rounded
      ? css`
          border-radius: 50%;
          object-fit: cover;
        `
      : null}
`
