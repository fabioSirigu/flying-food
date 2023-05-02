// import { IconButton } from '../Button'
import { IconButton } from '../Button'
import { Paper } from '../Paper'
import { Text } from '../Text'
import { ModalBackground, ModalWrapper, TopWrapper } from './styled'

type Props = {
  opened: boolean
}
export const Modal = ({ opened }: Props) => {
  if (!opened) return null
  return (
    <Paper>
      <ModalBackground>
        <ModalWrapper>
          <TopWrapper>
            <Text variant="h4" color="text">
              Write a Review
            </Text>
            <IconButton
              color="background"
              iconName="close"
              rounded
              iconColor="textLight"
              onClick={() => console.log('cliccato')}
            />
          </TopWrapper>
        </ModalWrapper>
      </ModalBackground>
    </Paper>
  )
}
