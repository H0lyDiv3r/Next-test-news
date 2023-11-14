'use client'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function Logo() {
  return (
    <Box display={"flex"}>
        {Array.from("NotBBC").map(l=>
            <Text width={"50px"} height={"50px"} fontSize={"24px"} fontWeight={500} bg={"white"} color={"black"} margin={"4px"}>{l}</Text>
        )}
    </Box>
  )
}