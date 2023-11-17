import { Box, Text,Image, Divider} from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import "../../components/styles/markdown.css"

const page = async ({params}) => {
  const res = await fetch(`https://news-app-9uaj.onrender.com/api/articles/${params.id}?populate=*`,{
    cache:"no-cache"
  })
  const data = await res.json()
  console.log(data.data.attributes.Media.data[0].attributes.url)
  return (
    <Box w={"70%"} margin={"auto"} className='markdown'>
        <Text fontSize={"24px"} my={"24px"}>
            {data.data.attributes.heading}
        </Text>

        <Image src={data.data.attributes.Media.data && data.data.attributes.Media.data[0].attributes.url} width={"100%"}
        height={"400px"} overflow={"hidden"} fit={"cover"} bg={"gray.100"}/>
        <Divider/>
        {/* <ReactMarkdown components={ChakraUIRenderer()} children={data.data.attributes.body} skipHtml /> */}
        <Text>{data.data.attributes.body}</Text>
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