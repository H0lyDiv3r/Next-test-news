import { Box, Text } from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import "../../components/styles/markdown.css"

const page = async ({params}) => {
  const res = await fetch(`https://news-app-9uaj.onrender.com/api/articles/${params.id}?populate=*`,{
    next:{
      revalidate:0
    }
  })
  const data = await res.json()

  console.log(data.data)
  return (
    <Box w={"70%"} margin={"auto"} className='markdown'>
        <ReactMarkdown components={ChakraUIRenderer()} children={data.data.attributes.body} skipHtml />
        <Box my={"40px"} fontWeight={500} color={"gray.700"}>
          <Text>
            {new Date(data.data.attributes.DatePublished).toDateString()}
          </Text>
          <Text>
            {data.data.attributes.journalist}
          </Text>
        </Box>
    </Box>
  )
}

export default page