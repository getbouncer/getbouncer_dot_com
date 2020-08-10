import styled from '@emotion/styled'

export const AuthenticationContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  width: 100%;
  background-color: white;
  border-radius: 25px;
`

export const ErrorContainer = styled.div`
  text-align: center;
`

export const transitionStyles = {
  entering: {
    opacity: 0,
    transition: '0.2s all',
  },
  entered: {
    opacity: 1,
    transition: '0.2s all',
  },
  exiting: {
    opacity: 0,
    transition: '0.2s all',
  },
  exited: {
    opacity: 0,
    transition: '0.2s all',
  },
}
