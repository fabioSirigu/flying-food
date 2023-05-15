import { memo } from 'react'
import { ReviewDto } from '../api/types'
import { Text } from '../Text'
import { ReviewCard } from './styled'

type Props = {
  review?: ReviewDto
  author: string
  date: string
  body: string
}
export const Review = memo(({ date, author, body }: Props) => {
  const str = date
  const newDate = new Date(str!)

  return (
    <ReviewCard>
      <Text color="text"> {author}</Text>
      <Text color="primary" variant="p">
        {newDate.toLocaleString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </Text>
      <Text color="textLight" variant="p">
        {body.length > 120 ? `${body.slice(0, 120)}...` : body}
      </Text>
    </ReviewCard>
  )
})
