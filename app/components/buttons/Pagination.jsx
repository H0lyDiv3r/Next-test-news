'use client'
import { Box, Button, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { SearchSort } from '../context/SearchSortProvider'
import Link from 'next/link'

const Pagination = ({length}) => {
  const {page, handleSetPage} = useContext(SearchSort)
  return (
    <Box display={"flex"} justifyContent={"center"} my={"50px"}>
        <Box display={"flex"} fontWeight={500} width={"200px"} justifyContent={"space-between"}>
            {/* <Button onClick={()=>handleSetPage(page-1)} isDisabled={page <= 1 }>
                prev
            </Button> */}


            <Text color={page<=1 ? "gray.400":"gray.800"}>
                {page <=1 ? "prev":<Link onClick={()=>handleSetPage(page-1)} href={`?page=${page-1}`} >prev</Link>}
            </Text>

            <Text>
                {page}
            </Text>
            {/* <Button onClick={()=>handleSetPage(page+1)} isDisabled={page >= length}>
                next
            </Button> */}
            <Text color={page >= length ? "gray.400":"gray.800"}>
                {page >= length ? "next":<Link onClick={()=>handleSetPage(page+1)} href={`?page=${page+1}`}>next</Link>}
            </Text>
        </Box>
    </Box>
  )
}

export default Pagination
