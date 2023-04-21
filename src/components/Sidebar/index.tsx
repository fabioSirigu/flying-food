// import React, { PropsWithChildren } from 'react'
import { FontVariant, ThemeColor, ThemeSpacing } from '../../style/theme'

import { Image } from '../Image'
import { Text } from '../Text'
import { Sidelink } from './Sidelink'
import { MainSidebar, StyledSidebar, TopSidebar } from './styled'

type Props = {
  url?: string
  title?: string
  background?: ThemeColor
  colorText?: ThemeColor
  radius?: number
  border?: string
  font?: FontVariant
  padding?: ThemeSpacing
}

export const Sidebar = ({
  background,
  colorText = 'text',
  url = 'text',
  title = 'Ciao User',
  font,

  ...rest
}: Props) => {
  return (
    <StyledSidebar>
      <TopSidebar>
        <Image url="https://assets.stickpng.com/images/585e4bc4cb11b227491c3395.png" />
        <Text text={title} color={colorText} />
      </TopSidebar>
      <MainSidebar>
        <Sidelink
          backgroundIcon="primaryDark"
          iconTitle="plus"
          background="primary"
          text="Home"
        />
        <Sidelink iconTitle="search" text="Catalog" />
        <Sidelink iconTitle="check" text="Category" />
        <Sidelink iconTitle="notice" text="Map" />
        <Sidelink iconTitle="notice" text="Delivery" />
        <Sidelink iconTitle="notice" text="Settings" />
      </MainSidebar>
    </StyledSidebar>
  )
}
