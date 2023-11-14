'use client'
import React, { createContext, useReducer } from 'react'

export const SearchSort = createContext()
const initialState = {
    page:1,
    pageSize:3
}

const setPage = "SET_PAGE"

const reducer = (state,action)=>{
    if(action.type === setPage){
        return {...state,page:action.payload.page}
    }
    return state
}

const SearchSortProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)

    const handleSetPage = (value)=>{
        dispatch({
            type:setPage,
            payload:{
                page:Math.abs(value)
            }
        })
    }
    const vals = {...state,handleSetPage}


  return (
    <SearchSort.Provider value={vals}>
        {children}
    </SearchSort.Provider>
  )
}

export default SearchSortProvider