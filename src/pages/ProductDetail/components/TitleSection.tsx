import { Button } from '../../../components/Button'
import { Text } from '../../../components/Text'
import { TitleWrapper } from '../styled'

type Props = {
  onClick: () => void
}
export const TitleSection = ({ onClick }: Props) => {
  return (
    <TitleWrapper>
      <Text color="text" variant="h3">
        Review
      </Text>
      <Button
        color="background"
        colorText="text"
        title="Leave a Review"
        font="span"
        padding="lg"
        paddingRight
        border="1"
        iconName="right"
        iconBackground="secondary"
        onClick={() => onClick}
      />
    </TitleWrapper>
  )
}
