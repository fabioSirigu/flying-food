import { memo } from 'react'
import { Image } from '../../components/Image'
import { Text } from '../../components/Text'
import { StyledMain } from './styled'

export const Home = memo(() => {
  return (
    <div className="App">
      <StyledMain>
        <Text weight="bold" variant="h1" color="text">
          Welcome To FlyingFood
        </Text>
      </StyledMain>
    </div>
  )
})
