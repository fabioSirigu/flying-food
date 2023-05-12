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

const scale = keyframes`
  0% { scale: 1; cursor:pointer; letter-spacing:0.5rem;}
  50% { scale: 1.2; cursor:pointer; letter-spacing:0.75rem;}
  100% { scale: 1;cursor:pointer; letter-spacing:0.5rem;}`

export const StyledMain = styled.div`
  background: linear-gradient(300deg, #000000, #039292, #ffffff, #039292, #000000);
  background-size: 200% 200%;
  animation: ${gradient} 15s ease infinite;
  border-radius: 25px;
  height: calc(100vh - 150px);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledBoxTitle = styled.div`
  background: rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  border: 1px solid white;
  border-radius: 20px;
  animation: ${scale} 5s infinite ease-in;
`
