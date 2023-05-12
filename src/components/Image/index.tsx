import { memo } from 'react'
import { StyledImage } from './styled'
import { PropsImage } from './styled'

type Props = {
  url?: string
}

export const Image = memo(({ url, rounded }: Props & PropsImage) => {
  return <StyledImage rounded={rounded} src={url} />
})
