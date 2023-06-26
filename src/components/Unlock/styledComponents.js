// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  background-image: linear-gradient(#161617, #0b0c1e, #3c2940);
  height: 100vh;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const LockImage = styled.img`
  height: 75px;
  width: 65px;
`

export const Heading = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  font-family: 'Roboto';
`

export const Button = styled.button`
  border: none;
  background-color: #06b6d4;
  color: #e2e8f0;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
`
