import { Box, Card, CardHeader, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import Lorem from '../smapleText/Lorem'

const SpecificCard = ({id,attributes}) => {
  return (
    <Card borderRadius={"0px"} maxW={"270px"} border={"none"} boxShadow={"none"}>
        <Image src={attributes.Media.data && attributes.Media.data[0].attributes.url } width={"100%"} maxHeight={"200px"} minH={"150px"} overflow={"hidden"} fit={"cover"} bg={"gray.200"}/>
        <Text fontWeight={600} fontSize={"16px"}>{attributes.heading}</Text>
        <Box mt={"4px"} fontSize={"14px"} fontWeight={400} color={"gray.600"}>
            <Lorem/>
        </Box>
        <Box fontSize={"14px"} fontWeight={500} color={"gray.600"}>
          <Text>
              {new Date(attributes.DatePublished).toDateString()}
          </Text>
        </Box>
    </Card>
  )
}

export default SpecificCard