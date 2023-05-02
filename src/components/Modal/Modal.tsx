// import { IconButton } from '../Button'
import { Paper } from '../Paper'
// import { Text } from '../Text'

type Props = {
  opened: boolean
}
export const Modal = ({ opened }: Props) => {
  if (!opened) return null
  return <Paper />
}
