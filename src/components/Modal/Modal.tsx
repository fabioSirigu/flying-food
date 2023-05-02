import { Paper } from '../Paper'

type Props = {
  opened: boolean
}
export const Modal = ({ opened }: Props) => {
  if (!opened) return null
  return <Paper />
}
