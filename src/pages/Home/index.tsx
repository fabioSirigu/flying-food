import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Text } from '../../components/Text'
import { StyledBoxTitle, StyledMain } from './styled'

export const Home = memo(() => {
  const navigate = useNavigate()

  const handlenavigate = useCallback(() => navigate('/catalog'), [navigate])

  return (
    <div className="App">
      <StyledMain>
        <StyledBoxTitle onClick={handlenavigate}>
          <Text weight="bold" variant="h1" color="text">
            Welcome To FlyingFood
          </Text>
        </StyledBoxTitle>
      </StyledMain>
    </div>
  )
})
