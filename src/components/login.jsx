import React, { useState, useEffect } from 'react'
import 'firebaseui/dist/firebaseui.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

function Login () {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const provider = new GoogleAuthProvider()
  const auth = getAuth()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // Redirect to main page
        // ...
      }
    })
  }, [auth])

  const handleLogin = () => {
    setLoading(true)
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        // eslint-disable-next-line no-unused-vars
        const user = result.user
        // ...
      }).catch((error) => {
        // Handle Errors here.
        setError(error.message)
        setLoading(false)
      })
  }
  return (
    <div>
      {loading
        ? (
          <div>Loading...</div>
          )
        : (
          <button onClick={handleLogin}>Login with Google</button>
          )}
      {error && (
        <div>Error: {error}</div>
      )}
    </div>
  )
}

export default Login
