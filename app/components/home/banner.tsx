"use client"
import {Stack,Box,Button,Text,Heading,Container,VStack,HStack,Link,Image} from "@chakra-ui/react"
import BannerImage from "Images/home/banner.png"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { ArrowForwardIcon } from "@chakra-ui/icons"

export default function Banner(){
    return (
        <Box className="container" mx={"auto"} px={"100px"} display={"flex"} flexDirection={"row"} w={"full"} h={"full"} alignItems={"center"} justifyContent={"space-between"} >
            <Stack direction={"column"} rowGap={"30px"} w={"500px"} >
                <Heading lineHeight={"50px"}>Welcome To, <br></br> Todo Web App</Heading>
                <Text fontSize={"18px"} fontWeight={"500"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam explicabo ut quas dolorum aliquid esse veritatis eum dolorem nobis, commodi cum sit. Alias consequuntur aut vitae provident! Maxime, temporibus placeat!</Text>
                <HStack columnGap={"15px"}>
                    <Button variant={"solid"} bgColor={"blue.600"} className="group" display={"flex"} alignItems={"center"} columnGap={"5px"} _hover={{background:"blue.400"}} textColor={"white"}>
                        Getting Start <ArrowForwardIcon className="group-hover:ml-1 transition-all" />
                    </Button>
                    <Link href='/aboutus' display={"flex"} alignItems={"center"} fontSize={"16px"} isExternal>
                        Do you Like Read About Us? <ExternalLinkIcon mx='2px' />
                    </Link>
                </HStack>
            </Stack>
            <Image style={{scale:"1"}} w={"400px"} objectFit={"contain"} transform={"perspective(400px) rotateX(20deg) rotateZ(-20deg) "} _hover={{transform: "perspective(400px) rotateX(0deg) rotateZ(0deg);",scale:"2"}} className="transition-all hover:!scale-[1.5]"  src={"/images/home/banner.png"} alt="Todo Web App">

            </Image>
        </Box>
    )
}