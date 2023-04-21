import { IconButton } from '../Button'
import { Price } from '../Price'
import { Tag } from '../Tag'
import { FooterCardWrapper, FooterRightWrapper } from './styled'

export const FooterCard = () => {
  return (
    <FooterCardWrapper>
      <Price title="120" font="p" />
      <FooterRightWrapper>
        <Tag title="280g" font="h6" />
        <IconButton rounded iconName="plus" padding="lg" color="secondary" />
      </FooterRightWrapper>
    </FooterCardWrapper>
  )
}
