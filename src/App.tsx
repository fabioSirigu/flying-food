import React from 'react'
import { Button } from './components/Button'
// import { IconButton } from './components/Button/IconButton'
import { Icon } from './components/Icon'
import { Text } from './components/Text'
import { theme } from './style/theme'

function App() {
  return (
    <div className="App">
      <Text color="primary">Ciao sono un testo</Text>
      <Text variant="h1">Ciao sono un testo</Text>

      <Button rounded radius={3} padding="lg" color="primary">
        <Icon color={theme.colors['text']} iconName="plus" />
      </Button>

      <Button radius={3} padding="lg" color="secondary" colorText="text" font="span">
        Order Now
      </Button>
    </div>
  )
}

export default App
