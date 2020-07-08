import styled from '@emotion/styled'
import { breakpoints, theme } from '~styles'

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: ${props => (props.isLarge ? theme.maxHeaderWith : theme.maxWidth)};
  position: relative;
  width: ${props => (props.isLarge ? '95%' : '90%')};

  @media ${breakpoints.smartphone} {
    padding: 0 30px;
    width: 100%;
  }
`

export default MainContainer
