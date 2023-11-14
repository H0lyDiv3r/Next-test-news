'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

const ChakraProviderGlobal = ({children}) => {
  return (
    <CacheProvider>
        <ChakraProvider>
            {children}
        </ChakraProvider>
    </CacheProvider>
  )
}

export default ChakraProviderGlobal