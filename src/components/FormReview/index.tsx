import { ChangeEvent, memo, useCallback, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { productActions } from '../../features/products/reducer'
import { ReviewDto } from '../api/types'
import { Button } from '../Button'
import { Input } from '../Input'
import { FooterWrapper } from '../Modal/styled'
import { Text } from '../Text'
import { StyledForm, TextAerea } from './styled'

type Props = {
  id: string
}
export const FormReview = memo(({ id }: Props) => {
  const dispatch = useDispatch()
  const [author, setAuthor] = useState('')
  const [body, setBody] = useState('')

  const handleUser = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setAuthor(target.value)
  }

  const handleBody = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(target.value)
  }

  const review: ReviewDto = useMemo(
    () => ({
      date: new Date().toDateString(),
      author: author,
      text: body,
      productId: id
    }),
    [author, body, id]
  )

  const handleClick = useCallback(() => {
    dispatch(productActions.postReview(review))
  }, [dispatch, review])

  return (
    <StyledForm>
      <Text variant="h3" color="text">
        Name
      </Text>
      <Input placeholder="Your name..." onChange={handleUser} />
      <Text variant="h3" color="text">
        Body
      </Text>
      <TextAerea placeholder="Write a review..." onChange={handleBody} />
      <FooterWrapper>
        <Button
          padding="md"
          title="Send"
          color="secondary"
          colorText="text"
          onClick={handleClick}
        />
      </FooterWrapper>
    </StyledForm>
  )
})
