import { Box, Card, CardHeader, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import Lorem from '../smapleText/Lorem'

const DefaultCard = ({id,attributes}) => {
  const getColor = (category)=>{
      if(category.toLowerCase() === "regular news"){
        return "red"
      }
      if(category.toLowerCase() === "sports"){
        return "yellow"
      }
      if(category.toLowerCase() === "business"){
        return "green"
      }else{
        return "blue"
      }
  }
  // console.log(attributes.Media.data && attributes.Media.data[0].attributes.url )
  return (
    <Card borderRadius={"0px"} maxW={"400px"} border={"none"} boxShadow={"none"}>
        <Image src={attributes.Media.data && attributes.Media.data[0].attributes.url } width={"100%"} height={"200px"} overflow={"hidden"} fit={"cover"} bg={"gray.200"}/>
        <Text fontWeight={600} fontSize={"20px"}>{attributes.heading}</Text>
        <Box mt={"12px"} fontSize={"16px"} fontWeight={400} color={"gray.600"}>
            <Lorem/>
        </Box>
        <Spacer/>
        <Box borderLeft={"solid 4px gray"} px={"12px"} fontWeight={500} color={"gray.600"} my={"18px"} borderColor={getColor(attributes.category)}>
            <Text>{attributes.category}</Text>
        </Box>
    </Card>
  )
}

export default DefaultCard