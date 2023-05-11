import React, { PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectCart } from '../../features/cart/selectors'
import { IconButton } from '../Button'
import { CurrencySelect } from '../CurrencySelect'
import { SearchBox } from '../SearchBox'
import { StyledNavbar, NavbarProps, IconWrapper, CartQty } from './styled'

type Props = PropsWithChildren<Partial<NavbarProps>>

export const Navbar = ({
  background,
  colorText = 'text',
  font,

  ...rest
}: Props) => {
  const navigate = useNavigate()

  const cartQty = useSelector(selectCart).length

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
        <CartQty>{cartQty}</CartQty>

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
