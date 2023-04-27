import React, { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

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

  return (
    <SidelinkWrapper backgroundIcon={backgroundIcon} onClick={() => navigate('/')}>
      <IconLink rounded outline padding="lg" iconName={iconTitle} />
      <DefaultLink
        outline
        padding="lg"
        colorText="text"
        font="h4"
        title={text || 'title'}
      />
    </SidelinkWrapper>
  )
}
