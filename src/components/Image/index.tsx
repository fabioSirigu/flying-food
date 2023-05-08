// import { Text } from '../Text'
import { StyledImage } from './styled'
import { PropsImage } from './styled'

type Props = {
  url?: string
}

export const Image = ({ url, rounded }: Props & PropsImage) => {
  return <StyledImage rounded={rounded} src={url} />
}
