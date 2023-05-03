import React, { PropsWithChildren } from 'react'
import { IconButton } from '../Button'
import { CurrencySelect } from '../CurrencySelect'
import { SearchBox } from '../SearchBox'
// import { Text } from '../Text'
import { StyledNavbar, NavbarProps, IconWrapper } from './styled'

type Props = PropsWithChildren<Partial<NavbarProps>>

export const Navbar = ({
  background,
  colorText = 'text',
  font,

  ...rest
}: Props) => {
  return (
    <StyledNavbar>
      <SearchBox
        placeholder="Search..."
        colorText={colorText}
        background="backgroundDark"
      />

      <IconWrapper>
        <CurrencySelect />
        <IconButton
          onClick={() => console.log('notice')}
          rounded
          padding="md"
          radius={1}
          color="backgroundLight"
          iconName="notice"
        />
        <IconButton
          onClick={() => console.log('bag')}
          rounded
          padding="md"
          radius={1}
          color="backgroundLight"
          iconName="bag"
        />
        <IconButton
          onClick={() => console.log('logout')}
          rounded
          padding="md"
          radius={1}
          color="primary"
          iconName="logout"
        />
      </IconWrapper>
    </StyledNavbar>
  )
}
