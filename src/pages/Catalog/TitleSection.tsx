import React, { memo } from 'react'
import { IconButton } from '../../components/Button'
import { Select } from '../../components/Select'
import { Text } from '../../components/Text'
import { TextWrapper, SelectIconWrapper, SelectWrapper, IconWrapper } from './styled'

const options = [
  { value: 'sushi', label: 'Sushi' },
  { value: 'burger', label: 'Burger' },
  { value: 'pizza', label: 'Pizza' }
]

export const TitleSection = memo(() => {
  return (
    <>
      <TextWrapper>
        <Text variant="h2" color="text">
          Popular Dishes
        </Text>
      </TextWrapper>
      <SelectIconWrapper>
        <SelectWrapper>
          <Select options={options} />
          <Select options={options} />
          <Select options={options} />
        </SelectWrapper>
        <IconWrapper>
          <IconButton
            rounded
            iconName="bars"
            color="background"
            onClick={() => console.log('clicked')}
          />
          <IconButton
            rounded
            iconName="grid"
            color="primary"
            onClick={() => console.log('clicked')}
          />
        </IconWrapper>
      </SelectIconWrapper>
    </>
  )
})
