// import { Icon } from '../../../components/Icon'
import { Icon } from '../../../components/Icon'
import { Text } from '../../../components/Text'
import { ThemeColor } from '../../../style/theme'
import { IconRating, StyledRating } from '../styled'

type Props = {
  rating: number
  color?: ThemeColor
  stars?: number
}

export const Rating = ({ rating, color = 'primary', stars = 5 }: Props) => {
  const getIcon = (index: number) => {
    if (index + 1 <= rating) return 'fullStar'
    if (index + 0.5 <= rating) return 'halfStar'
    return 'emptyStar'
  }
  return (
    <StyledRating>
      <Text color="text" variant="h4">
        Rating
      </Text>
      <IconRating>
        {Array.from({ length: stars }).map((_, index) => (
          <Icon iconName={getIcon(index)} color={color} key={index} />
        ))}
      </IconRating>
    </StyledRating>
  )
}
