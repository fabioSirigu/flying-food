import styled from 'styled-components'

export const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`
