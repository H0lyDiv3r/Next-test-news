'use client'
import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useContext } from 'react'
import { SearchSort } from '../context/SearchSortProvider'

const Links = () => {
    const path = usePathname()
    const params = useSearchParams()
    const {page,handleSetPage} = useContext(SearchSort)
    const handlePageRest=()=>{
        handleSetPage(1)
    }
  return (
    <>
        <Box borderBottom={path === "/" ? "solid 3px white":"none"} px={"8px"}>
            <Link href={`/`} onClick={()=>handlePageRest()}>Home</Link>
        </Box>
        <Box borderBottom={path.startsWith("/news") ? "solid 3px white":"none"} px={"8px"}>
            <Link href={"/news"} onClick={()=>handlePageRest()}>News</Link>
        </Box>
        <Box borderBottom={path.startsWith("/sports") ? "solid 3px white":"none"} px={"8px"}>
            <Link href={"/sports"} onClick={()=>handlePageRest()}>Sports</Link>
        </Box>
        <Box borderBottom={path.startsWith("/business") ? "solid 3px white":"none"} px={"8px"}>
            <Link href={"/business"} onClick={()=>handlePageRest()}>Business</Link>
        </Box>
        <Box borderBottom={path.startsWith("/weather")? "solid 3px white":"none"} px={"8px"}>
            <Link href={"/weather"} onClick={()=>handlePageRest()}>Weather</Link>
        </Box>
    </>
  )
}

export default Links