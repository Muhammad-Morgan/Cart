import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'
import cartItems from './Data'
const AppContext = React.createContext()
const url = 'https://course-api.com/react-useReducer-cart-project'
const defaultstate = {
  cart: cartItems,
  amount: 0,
  price: 0,
  isloading: false,
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultstate)
  //Functions

  const clearAll = () => {
    dispatch({ type: 'CLEAR-ALL' })
  }
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE-ITEM', payload: id })
  }
  const incCounter = (id) => {
    dispatch({ type: 'INC', payload: id })
  }
  const decCounter = (id) => {
    dispatch({ type: 'DEC', payload: id })
  }
  const fetchData = async () => {
    dispatch({ type: 'LOADING-START' })
    const response = await fetch(url)
    const myData = await response.json()
    dispatch({ type: 'LOADING-END', payload: myData })
  }
  useEffect(() => {
    fetchData()
  }, [])
  useEffect(() => {
    dispatch({ type: 'UPDATE' })
  }, [state.cart])
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearAll,
        removeItem,
        incCounter,
        decCounter
      }}
    >
      {children}
    </AppContext.Provider>
  )

}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppProvider, AppContext }
