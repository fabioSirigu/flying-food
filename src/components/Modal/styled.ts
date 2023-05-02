import styled from 'styled-components'

export const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalWrapper = styled.div`
  width: 500px;
  height: 250px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  padding: 1rem;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
