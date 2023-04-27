import { ReviewDto } from '../../components/api/types'
import { Text } from '../../components/Text'
import { ReviewCard } from './styled'

type Props = {
  review?: ReviewDto
}
export const Review = ({ review }: Props) => {
  const str = review?.date
  const date = new Date(str!)
  console.log(date)
  return (
    <ReviewCard>
      <Text color="text"> {review?.author}</Text>
      <Text color="primary" variant="p">
        {date.toLocaleString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </Text>
      <Text color="textLight" variant="p">
        {review?.text}
      </Text>
    </ReviewCard>
  )
}
