import React, { PropsWithChildren } from 'react'

// import { Text } from '../Text'
import { StyledSidebar, SidebarProps } from './styled'

type Props = PropsWithChildren<Partial<SidebarProps>>

export const Sidebar = ({
  background,
  colorText = 'text',
  font,

  ...rest
}: Props) => {
  return <StyledSidebar />
}
