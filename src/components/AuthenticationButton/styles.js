import styled from '@emotion/styled'

export const CompanyImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1.8rem;
`

export const ButtonContainer = styled.div`
  height: 3rem;
  font-family: Roboto, sans-serif;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  display: flex;
  flex-direction: row;
  flex-basis: fit-content;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  border-radius: 0.2rem;
  box-shadow: 0px 0.2rem 0.2rem;
  margin: 0.8rem;
  user-select: none;
  transition: all 0.25s;
  width: 13.5rem;

  &:focus {
    outline: 0.2rem solid #4285F4;
  }

  &:active {
    background-color: ${props => props.backgroundColorActive}
  }
`
