import React from 'react'
import { Button, IconButton } from '../../components/Button'
import { Input } from '../../components/Input'
import { SearchBox } from '../../components/SearchBox'
import { Tag } from '../../components/Tag'
import { Text } from '../../components/Text'

export function Home() {
  return (
    <div className="App">
      <Text color="primary" text="Ciao sono un testo" />
      <Text variant="h1" text="Ciao sono un testo" />

      <Button
        radius={3}
        padding="lg"
        color="secondary"
        colorText="background"
        font="p"
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
        colorText="text"
        iconName="plus"
        iconColor="text"
      />

      <Button
        border="2"
        radius={3}
        padding="lg"
        color="secondaryDark"
        colorText="text"
        font="span"
        title="Leave a Review"
        iconName="right"
        iconBackground="secondary"
      />

      <Input background="background" placeholder="Search..." />

      <SearchBox background="background" placeholder="Search..." colorText="text" />

      <Tag title="280g" />
    </div>
  )
}
