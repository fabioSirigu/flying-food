import styled, { css } from 'styled-components'

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
        `
      : null}
`
