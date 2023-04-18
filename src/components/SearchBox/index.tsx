import React, { PropsWithChildren } from 'react'
import { Icon } from '../Icon'
import { Input } from '../Input'
import { SearchBoxProps, StyledSearchBox } from './styled'

type Props = PropsWithChildren<Partial<SearchBoxProps>>

export const SearchBox = ({
  background,
  colorText = 'text',
  placeholder,

  ...rest
}: Props) => {
  return (
    <StyledSearchBox background={background}>
      <Input placeholder={placeholder} colorText="text" />
      <Icon iconName="search" color={colorText} />
    </StyledSearchBox>
  )
}
