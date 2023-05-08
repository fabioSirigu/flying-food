import React, { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
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
          onClick={() => navigate('/cart')}
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
