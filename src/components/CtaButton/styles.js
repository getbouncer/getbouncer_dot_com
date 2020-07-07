import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { theme } from '~styles'

export const Button = styled.button`
  background-color: ${props => (props.inverted ? '#fff' : theme.colors.blue)};
  border: 0;
  border-radius: 20px;
  color: ${props => (props.inverted ? theme.colors.blue : '#fff')};
  cursor: pointer;
  padding: 8px 18px;
`

export const ButtonLink = styled.a`
  background-color: ${props => (props.inverted ? '#fff' : theme.colors.blue)};
  border-radius: 20px;
  color: ${props => (props.inverted ? theme.colors.blue : '#fff')};
  padding: 8px 18px;
`

export const InternalLink = styled(Link)`
  background-color: ${props => (props.inverted ? '#fff' : theme.colors.blue)};
  border-radius: 20px;
  color: ${props => (props.inverted ? theme.colors.blue : '#fff')};
  padding: 8px 18px;
`
