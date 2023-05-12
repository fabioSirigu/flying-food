import React, { memo, PropsWithChildren } from 'react'
import { IconButton } from '../Button'
import { Paper } from '../Paper'
import { Text } from '../Text'
import { MainWrapper, ModalBackground, ModalWrapper, TopWrapper } from './styled'

type Props = PropsWithChildren<{
  opened: boolean
  onClose: () => void
}>

export const Modal = memo(({ opened, onClose, children }: Props) => {
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
              onClick={onClose}
            />
          </TopWrapper>
          <MainWrapper>{children}</MainWrapper>
        </ModalWrapper>
      </ModalBackground>
    </Paper>
  )
})
