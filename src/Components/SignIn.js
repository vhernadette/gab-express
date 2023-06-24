import React, { useContext } from 'react'
import styled from 'styled-components'
import { stylesContext } from '../ContextProviders/StylesProvider'

const StyledSignIn = styled.div`
  width: 100%;
  min-height: calc(100vh-70px);
  background-color: ${props => {return props.backgroundColor}};
`

function SignIn() {
  const styles = useContext(stylesContext);

  return (
    <StyledSignIn backgroundColor={styles.secondaryColor}></StyledSignIn>
  )
}

export default SignIn