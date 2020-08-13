import React from 'react'
import { navigate } from '@reach/router'
import firebase from 'gatsby-plugin-firebase'

const AccessContainer = () => {
  const [loadedState, setLoadedState] = React.useState(null)

  React.useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user && user.emailVerified && loadedState !== 'private') {
          setLoadedState('private')
        } else {
          setLoadedState('forbidden')
        }
      })
  }, [])

  if (loadedState && loadedState !== 'private') {
    navigate('/login')
  }

  return (<></>)
}

export default AccessContainer
