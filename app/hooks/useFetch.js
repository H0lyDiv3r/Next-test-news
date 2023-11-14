'use client'
import React, { useContext } from 'react'
import { SearchSort } from '../components/context/SearchSortProvider'

const useFetch =  (url,cache) => {
    const {page,pageSize} = useContext(SearchSort)
    fetch(`${url}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,cache)
    .then(res=>{
        console.log(res.json(),"response")
    })

}

export default useFetch