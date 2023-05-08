import { IconButton } from '../Button'
import { Counter } from '../Counter'
import { Icon } from '../Icon'
import { Image } from '../Image'
import { Paper } from '../Paper'
import { Price } from '../Price'
import { Tag } from '../Tag'
import { Text } from '../Text'
import { CardWrapper, ImageWrapper, TextWrapper } from './styled'

export const CartCard = () => {
  return (
    <Paper>
      <CardWrapper>
        <ImageWrapper>
          <Image rounded url="https://picsum.photos/200/300" />
        </ImageWrapper>
        <TextWrapper>
          <Text color="text">Nome Prodotto</Text>
          <Tag />
        </TextWrapper>
        <Counter
          counter={0}
          onClickMinus={() => console.log()}
          onClickPlus={() => console.log()}
        />
        <Text color="text" variant="h2">
          $48
        </Text>
        <IconButton
          rounded
          color="primary"
          iconColor="text"
          iconName="close"
          onClick={() => console.log('xxx')}
        />
      </CardWrapper>
    </Paper>
  )
}
