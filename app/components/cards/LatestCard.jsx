import { Box, Text } from "@chakra-ui/react"
import Lorem from "../smapleText/Lorem"
import { categories } from "@/app/utils/data"
import Link from "next/link"


const LatestCard = ({big,image,headline,type,id})=>{
    const color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    return(
        <Box bgImage={image} h={"100%"} fontSize={"18px"} fontWeight={500} color={"white"} bgPosition={"top"} bgSize={"cover"}>
            <Link href={`/${categories[type]}/${id}`}>
                <Box bg={"rgba(0,0,0,0.7)"} height={"100%"}  backdropFilter={"blur(1.5px)"} padding={"10px"} display={"flex"} flexDirection={"column"} justifyContent={"flex-end"}>
                    <Text my={"12px"}>{headline}</Text>
                    {big && 
                    
                        <Lorem fontWeight={400} fontSize={"14px"} my={"12px"}/>
                    }
                    <Text borderLeft={`solid 3px ${color}`} px={"14px"} fontSize={"16px"} my={"12px"}>{type}</Text>
                </Box>
            </Link>
        </Box>
    )
}

export default LatestCard