import React, { createContext, useState, useContext, useEffect } from 'react'
import auth from '@react-native-firebase/auth';

const AuthContext = createContext();


export default function AuthContextProvider({ children }) {
  // Set an initializing state whilst Firebase connects
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        setUser(user)
        setIsAuthenticated(true)
      } else {
        console.log("user isn't signedin")
        setIsAuthenticated(false)
      }
    })

  }, []);


  return (
    <AuthContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated }}>

      {children}

    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {

  return useContext(AuthContext)

}