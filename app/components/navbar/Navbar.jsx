import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import Logo from '../logo/Logo'
import Links from './Links'

const Navbar = () => {
    const logo = ["N","o","t","B","B","C"]
  return (
    <Box bg={"gray.900"} color={"white"} display={"flex"} justifyContent={"space-between"} padding={"12px"} px={"100px"}>
        <Box>
            <Text>NotBBC</Text>
        </Box>
        <Box width={"30%"} display={"flex"} justifyContent={"space-between"}>
            <Links/>
        </Box>
    </Box>
  )
}

export default Navbar