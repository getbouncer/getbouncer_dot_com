import styled from '@emotion/styled'
import { theme } from '~styles'

export const EntryField = styled.input`
  height: 50px;
  width: 100%;
  border: 0px solid transparent;
  border-bottom: 5px solid ${theme.colors.blue};
  color: ${theme.colors.blue};
  margin-bottom: 25px;
`

export const Button = styled.button`
  background-color: ${theme.colors.blue};
  border: 0;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  padding: 8px 18px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const SwitchOption = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  padding: 8px 18px;
`

export const VerticalSplitter = styled.div`
  height: 25px;
`
