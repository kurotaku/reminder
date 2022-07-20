import React from 'react'
import { useMatch } from 'react-router-dom'
import AppRoutes from './AppRoutes'

export const StoreUlid = React.createContext()

const Main = () => {
  const match = useMatch("/:store_ulid/*")
  
  return (
    <StoreUlid.Provider value={match.params.store_ulid} >
      <AppRoutes />
    </StoreUlid.Provider>
  )
}

export default Main
