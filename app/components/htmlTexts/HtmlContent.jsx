

import { Box } from '@chakra-ui/react'
import React from 'react'
import Markdown from 'react-markdown'

const HtmlContent = ({content}) => {
  return (
    <Box>
      <Markdown>
          {content}
      </Markdown>
    </Box>
  )
}

export default HtmlContent