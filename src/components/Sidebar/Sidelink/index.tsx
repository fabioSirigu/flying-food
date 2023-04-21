import React, { PropsWithChildren } from 'react'
import { DefaultButton } from '../../Button/DefaultButton'
// import { DefaultButton } from '../../Button/DefaultButton'
import { IconButton } from '../../Button/IconButton'

import { SidelinkProps, SidelinkWrapper } from './styled'

type Props = PropsWithChildren<Partial<SidelinkProps>>

export const Sidelink = ({
  text,
  iconTitle,
  background,
  backgroundIcon,
  children,
  ...rest
}: Props) => {
  return (
    <SidelinkWrapper backgroundIcon={backgroundIcon} background={background}>
      <IconButton
        rounded
        padding="lg"
        iconName={iconTitle || 'plus'}
        color={backgroundIcon || 'background'}
      />
      <DefaultButton
        padding="lg"
        color={background || 'background'}
        font="h4"
        title={text || 'title'}
      />
    </SidelinkWrapper>
  )
}
