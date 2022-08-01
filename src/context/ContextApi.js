import React,{createContext,useState,useContext} from 'react'

const AppContext = createContext();


export default function MyContext({children}) {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AppContext.Provider value={{ authenticated, setAuthenticated}}>    
        
        {children}
     
    </AppContext.Provider>
  )
}

export const useAuthContext = ()=>{

    return useContext(AppContext)

}