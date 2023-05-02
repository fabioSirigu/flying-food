import React, { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import { NameIcon } from '../../Icon/config'

import { DefaultLink, IconLink, SidelinkProps, SidelinkWrapper } from './styled'

type Props = PropsWithChildren<Partial<SidelinkProps>>

export const Sidelink = ({
  text,
  iconTitle,
  background,
  backgroundIcon,
  children,
  ...rest
}: Props) => {
  const navigate = useNavigate()
  type NavLink = {
    name: string
    url: string
    icon: NameIcon
  }
  const navLinks: NavLink[] = [
    { name: 'Home', url: '/', icon: 'home' },
    { name: 'Catalog', url: '/catalog', icon: 'search' },
    { name: 'Category', url: '/category', icon: 'check' },
    { name: 'Map', url: '/map', icon: 'map' },
    { name: 'Delivery', url: '/delivery', icon: 'truck' },
    { name: 'Settings', url: '/settings', icon: 'settings' }
  ]

  return (
    <>
      {navLinks.map((link) => (
        <SidelinkWrapper
          key={link.name}
          backgroundIcon={backgroundIcon}
          onClick={() => navigate(`${link.url}`)}
        >
          <IconLink rounded padding="lg" color="backgroundLight" iconName={link.icon} />
          <DefaultLink
            outline
            padding="lg"
            colorText="text"
            font="h4"
            title={link.name}
          />
        </SidelinkWrapper>
      ))}
    </>
  )
}
