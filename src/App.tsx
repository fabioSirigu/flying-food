import React from 'react'
import { Button, IconButton } from './components/Button'

import { Text } from './components/Text'

function App() {
  return (
    <div className="App">
      <Text color="primary" text="Ciao sono un testo" />
      <Text variant="h1" text="Ciao sono un testo" />

      <Button
        radius={3}
        padding="lg"
        color="secondary"
        colorText="background"
        font="span"
        title="Order Now"
      />

      <Button
        outline
        border="1"
        radius={3}
        padding="lg"
        color="primary"
        colorText="background"
        font="span"
        title="Ordered"
        iconName="right"
      />

      <IconButton
        rounded
        padding="lg"
        color="primary"
        iconName="plus"
        iconColor="textLight"
      />

      <Button
        review
        border="1"
        radius={3}
        padding="lg"
        color="secondaryDark"
        colorText="text"
        font="span"
        title="Leave a Review"
        iconName="right"
      />
    </div>
  )
}

export default App
