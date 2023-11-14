import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import LatestCard from '../cards/LatestCard'

const MostRecent = async () => {
    const res = await fetch(`https://news-app-9uaj.onrender.com/api/articles?populate=*&pagination[page]=1&pagination[pageSize]=5`)
    const data = await res.json()
  return (
    <Box my={"54px"}>
        <Text fontWeight={500} fontSize={"18px"}>Most Recent</Text>
        <Box h={"350px"} display={"flex"} >
            <Box w={"50%"} h={"100%"}>
            <Box mr={"20px"} h={"100%"}>
                <LatestCard id={data.data[0].id} image={data.data[0].attributes.Media.data && data.data[0].attributes.Media.data[0].attributes.url} big={true} headline={data.data[0].attributes.heading} type={data.data[0].attributes.category}/>
            </Box>
            </Box>
            <SimpleGrid minChildWidth={"40%"} spacing={5} width={"50%"}>
                {data.data.slice(1,5).map(item=>
                <LatestCard key={item.id} id={item.id} headline={item.attributes.heading} image={item.attributes.Media.data && item.attributes.Media.data[0].attributes.url} type={item.attributes.category}/>
                )}
            </SimpleGrid>
        </Box> 
    </Box>
  )
}

export default MostRecent


{/* <Box h={"350px"} display={"flex"} my={"54px"}>
<Box w={"50%"} h={"100%"}>
<Box mr={"20px"} h={"100%"}>
    <LatestCard id={data.data[0].id} image={data.data[0].attributes.Media.data && data.data[0].attributes.Media.data[0].attributes.url} big={true} headline={data.data[0].attributes.heading} type={data.data[0].attributes.category}/>
</Box>
</Box>
<SimpleGrid minChildWidth={"40%"} spacing={5} width={"50%"}>
    {data.data.slice(1,5).map(item=>
    <LatestCard key={item.id} id={item.id} headline={item.attributes.heading} image={item.attributes.Media.data && item.attributes.Media.data[0].attributes.url} type={item.attributes.category}/>
    )}
</SimpleGrid>
</Box>  */}