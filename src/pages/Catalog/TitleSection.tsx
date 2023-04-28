import React from 'react'
import { IconButton } from '../../components/Button'
import { Select } from '../../components/Select'
import { Text } from '../../components/Text'
import { TextWrapper, SelectIconWrapper, SelectWrapper, IconWrapper } from './styled'

export const TitleSection = () => {
  return (
    <>
      <TextWrapper>
        <Text variant="h2" color="text">
          Popular Dishes
        </Text>
      </TextWrapper>
      <SelectIconWrapper>
        <SelectWrapper>
          <Select />
          <Select />
          <Select />
        </SelectWrapper>
        <IconWrapper>
          <IconButton rounded iconName="bars" color="background" />
          <IconButton rounded iconName="grid" color="primary" />
        </IconWrapper>
      </SelectIconWrapper>
    </>
  )
}
