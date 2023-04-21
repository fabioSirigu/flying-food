// import React, { PropsWithChildren } from 'react'
import { FontVariant, ThemeColor, ThemeSpacing } from '../../style/theme'

import { Image } from '../Image'
import { Text } from '../Text'
import { Sidelink } from './Sidelink'
import { FooterSidebar, MainSidebar, StyledSidebar, TopSidebar } from './styled'

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
        <Text variant="h5" color={colorText}>
          Ciao User
        </Text>
      </TopSidebar>
      <MainSidebar>
        <Sidelink
          backgroundIcon="primaryDark"
          iconTitle="home"
          background="primary"
          text="Home"
        />
        <Sidelink iconTitle="search" text="Catalog" />
        <Sidelink iconTitle="check" text="Category" />
        <Sidelink iconTitle="map" text="Map" />
        <Sidelink iconTitle="truck" text="Delivery" />
        <Sidelink iconTitle="settings" text="Settings" />
      </MainSidebar>
      <FooterSidebar>
        <Image url="https://images.vexels.com/media/users/3/199964/isolated/preview/ae782cab8ae7e722febb5869c09574cc-happy-delivery-boy-character.png" />
      </FooterSidebar>
    </StyledSidebar>
  )
}
