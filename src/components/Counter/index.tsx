import { memo } from 'react'
import { IconButton } from '../Button'
import { Text } from '../Text'
import { StyledCounter } from './styled'

type Props = {
  onClickPlus: () => void
  onClickMinus: () => void
  counter: number
}

const CounterComponent = ({ onClickPlus, onClickMinus, counter }: Props) => {
  return (
    <StyledCounter>
      <IconButton rounded color="backgroundLight" iconName="plus" onClick={onClickPlus} />
      <Text color="text" variant="h3">
        {counter}
      </Text>
      <IconButton
        rounded
        color="backgroundLight"
        iconName="minus"
        onClick={onClickMinus}
      />
    </StyledCounter>
  )
}

export const Counter = memo(CounterComponent)
