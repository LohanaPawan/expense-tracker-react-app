import React, {useReducer, createContext} from 'react'
import AppReducer from './AppReducer'
// initial state
const initialState = {
    transactions : [
        {id:1, text: 'grossery', amount: -100},
        {id:2, text: 'salary', amount: 400},
        {id:3, text: 'flower', amount: -50},
        {id:4, text: 'camera', amount: 200}
    ]
}

// context
export const GlobalContext = createContext(initialState)

// provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction (id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction (obj){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: obj
        })
    }

    return(<GlobalContext.Provider 
    value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}
    >
        {children}
    </GlobalContext.Provider>)
}