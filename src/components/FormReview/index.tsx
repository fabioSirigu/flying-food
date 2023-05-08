import { ChangeEvent, useState } from 'react'
import { addReviewOnProduct } from '../api'
import { ReviewDto } from '../api/types'
import { Button } from '../Button'
import { Input } from '../Input'
import { FooterWrapper } from '../Modal/styled'
import { Text } from '../Text'
import { StyledForm, TextAerea } from './styled'

type Props = {
  id: string
}
export const FormReview = ({ id }: Props) => {
  const [author, setAuthor] = useState('')
  const [body, setBody] = useState('')

  const handleUser = ({ target }: ChangeEvent<HTMLInputElement>) => {
    // 👇 Store the input value to local state
    setAuthor(target.value)
  }

  const handleBody = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    // 👇 Store the input value to local state
    setBody(target.value)
  }

  const createReview = () => {
    const review: ReviewDto = {
      date: new Date().toDateString(),
      author: author,
      text: body,
      productId: id
    }

    addReviewOnProduct(review)
  }
  return (
    <StyledForm>
      <Text>Name</Text>
      <Input onChange={handleUser} />
      <Text>Body</Text>
      <TextAerea onChange={handleBody} />
      <FooterWrapper>
        <Button
          padding="md"
          title="Send"
          color="secondary"
          colorText="text"
          onClick={createReview}
        />
      </FooterWrapper>
    </StyledForm>
  )
}
