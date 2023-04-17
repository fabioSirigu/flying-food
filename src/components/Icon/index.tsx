// import { PropsWithChildren } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeColor } from '../../style/theme'
// import { ThemeColor } from '../../style/theme'
import { NameIcon } from './config'
import { icons } from './config'

type Props = {
  iconName: NameIcon
  color: ThemeColor
}
export const Icon = ({ iconName, color }: Props) => {
  return <FontAwesomeIcon icon={icons[iconName]} color={color} />
}
