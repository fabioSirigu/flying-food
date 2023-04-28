import { useNavigate } from 'react-router-dom'
import { DefaultButton } from '../../components/Button/DefaultButton'
import { Text } from '../../components/Text'
import { StyledText } from './styled'

export const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="App notFound">
      <StyledText>
        <Text variant="h1" color="primary">
          Error, not found!
        </Text>
        <DefaultButton
          padding="md"
          color="secondary"
          colorText="text"
          title="Back Catalog"
          onClick={() => navigate('/catalog')}
        />
      </StyledText>
    </div>
  )
}
