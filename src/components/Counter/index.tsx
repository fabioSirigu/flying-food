import { useState } from 'react'
import { IconButton } from '../Button'
import { Text } from '../Text'
import { StyledCounter } from './styled'

export const Counter = () => {
  const [counter, setCounter] = useState(0)
  function handleClickPlus() {
    setCounter(counter + 1)
  }

  function handleClickMinus() {
    counter > 0 ? setCounter(counter - 1) : setCounter(counter)
  }

  return (
    <StyledCounter>
      <IconButton
        rounded
        color="backgroundLight"
        iconName="plus"
        onClick={handleClickPlus}
      />
      <Text color="text" variant="h3">
        {counter}
      </Text>
      <IconButton
        rounded
        color="backgroundLight"
        iconName="minus"
        onClick={handleClickMinus}
      />
    </StyledCounter>
  )
}
