'use client'

import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useContext } from 'react'
import { SearchSort } from '../context/SearchSortProvider'
import { usePathname } from 'next/navigation'

const Home = () => {
    const {handleSetPage} =useContext(SearchSort)
    const path = usePathname()
    const handlePageRest=()=>{
        handleSetPage(1)
    }
  return (
    <Box>
        <Link href={`/`} onClick={()=>handlePageRest()}>NotBBC</Link>
    </Box>
  )
}

export default Home
