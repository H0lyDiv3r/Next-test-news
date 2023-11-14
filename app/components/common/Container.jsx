import { Box } from '@chakra-ui/react'
import React from 'react'

const Container = ({children}) => {
  return (
    <Box m={"12px"}>
        {children}
    </Box>
  )
}

export default Container