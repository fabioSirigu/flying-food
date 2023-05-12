import styled, { keyframes } from 'styled-components'

const gradient = keyframes`
  0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
`

export const StyledMain = styled.div`
  background: linear-gradient(300deg, #ffffff, #039292, #000000);
  background-size: 180% 180%;
  animation: ${gradient} 10s ease infinite;
  border-radius: 25px;
  height: calc(100vh - 150px);
  display: flex;
  justify-content: center;
  align-items: center;
`
