import { memo } from 'react'
import { StyledImage } from './styled'
import { PropsImage } from './styled'

type Props = {
  url?: string
}

const ImageComponent = ({ url, rounded }: Props & PropsImage) => {
  return <StyledImage rounded={rounded} src={url} />
}

export const Image = memo(ImageComponent)
