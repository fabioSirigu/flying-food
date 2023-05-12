import { memo } from 'react'
import { Select } from '../../components/Select'
import { Text } from '../../components/Text'
import { optionsMonths, optionsYears } from './mockDate'
import { ExpirationWrapper, StyledExpirationSelect } from './styled'

export const ExpirationForm = memo(() => {
  return (
    <ExpirationWrapper>
      <Text variant="h6" color="textLight">
        Expiration Date
      </Text>
      <StyledExpirationSelect>
        <Select options={optionsMonths} />
        <Select options={optionsYears} />
      </StyledExpirationSelect>
    </ExpirationWrapper>
  )
})
