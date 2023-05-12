import { memo } from 'react'
import { Text } from '../../components/Text'

export const Home = memo(() => {
  return (
    <div className="App">
      <Text variant="h1" color="text">
        Welcome To Flying Food
      </Text>
    </div>
  )
})
