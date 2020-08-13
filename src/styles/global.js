import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import { theme } from '~styles'

export const BackgroundContainer = styled(BackgroundImage)`
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 177px) !important;
  padding-bottom: 100px;
`

export const Button = styled.button`
  border: 0;
  border-radius: 20px;
  padding: 8px 18px;
  background-color: ${theme.colors.blue};
  color: #fff;
  cursor: pointer;
`

export const TextButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  padding: 8px 18px;
`

export const CenteredColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const CenteredRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const CenteredDialog = styled.div`
  background-color: white;
  border-radius: 25px;
  position: absolute;
  left: 50%;
  top: 50%;
  max-width: 500px;
  width: 100%;
  transform: translate(-50%, -50%);
`

export const Input = styled.input`
  border: 0px solid transparent;
  border-bottom: 5px solid ${theme.colors.blue};
  color: ${theme.colors.blue};
  height: 50px;
  width: 100%;
  margin-bottom: 25px;
`

export const VerticalSplitter = styled.div`
  height: 20px;
`

export const HorizontalSplitter = styled.div`
  width: 20px;
`
