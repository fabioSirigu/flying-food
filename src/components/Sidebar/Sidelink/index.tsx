import React, { memo, PropsWithChildren, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { NameIcon } from '../../Icon/config'

import { DefaultLink, IconLink, SidelinkProps, SidelinkWrapper } from './styled'

type Props = PropsWithChildren<Partial<SidelinkProps>>
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
  { name: 'Orders', url: '/orders', icon: 'bag' }
]

export const Sidelink = memo(
  ({ text, iconTitle, background, backgroundIcon, children }: Props) => {
    const navigate = useNavigate()
    const handleNavigate = useCallback(({ url }: NavLink) => navigate(url), [navigate])

    return (
      <>
        {navLinks.map((link) => (
          <SidelinkWrapper
            key={link.name}
            backgroundIcon={backgroundIcon}
            onClick={() => handleNavigate(link)}
          >
            <IconLink
              onClick={() => console.log('link')}
              rounded
              padding="lg"
              color="backgroundLight"
              iconName={link.icon}
            />
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
)
