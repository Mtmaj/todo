"use client"

import { Box, Center, HStack,Link, Heading,Text,Image,Input, VStack, InputGroup,InputRightElement, Button } from "@chakra-ui/react"
import CirSvg from "Images/login/cir" 
import Cir2Svg from "Images/login/cir2" 
import { useState } from "react"
import { ViewIcon,ViewOffIcon } from "@chakra-ui/icons"

export default function LoginPage(){
    const [show_password,setShowPassword] = useState(false)
    return (
        <HStack w={"full"} h={"full"}>
            <Box display={"flex"} h={"full"} alignItems={"center"} justifyContent={"center"} position={"relative"} w={"full"}>
                <Box display={"flex"} position={"absolute"} w={"full"} opacity={"0.5"} h={"full"} alignItems={"end"} justifyContent={"start"} >
                    <CirSvg/>
                </Box>
                <Center w={"full"} h={"full"} position={"absolute"} flexDirection={"column"} rowGap={"40px"}>
                    <Heading>Todo Web App</Heading>
                    <Text w={"500px"} fontWeight={"500"} textAlign={"center"}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perspiciatis numquam hic, ducimus reiciendis error et maxime mollitia </Text>
                    <Image w={"140px"}  src="/images/login/todo.png" />
                </Center>
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} position={"relative"} w={"full"} h={"full"}>
                <Box display={"flex"} position={"absolute"} w={"full"} opacity={"0.5"} h={"full"} alignItems={"start"} justifyContent={"end"} >
                    <Cir2Svg/>
                </Box>
                <Center zIndex={"10"} className="drop-shadow-xl" flexDirection={"column"} px={"20px"} rowGap={"15px"} border={"1px"} borderColor={"gray.100"} h={"fit-content"} py={"40px"} borderRadius={"5px"} bgColor={"white"} w={"70%"} >
                    <Heading size={"lg"} >User Sign Up</Heading>
                    <Link href="/login" display={"flex"}>Have Account? <Text color={"blue"}>Login</Text> </Link>
                    <VStack alignItems={"start"} w={"full"}>
                        <Text>Your Full Name : </Text>
                        <Input variant={"filled"} placeholder="Mr.Hossein Gholizade"></Input>
                    </VStack>
                    <VStack alignItems={"start"} w={"full"}>
                        <Text>Your Email : </Text>
                        <Input variant={"filled"} placeholder="exaple@email.com"></Input>
                    </VStack>
                    <VStack alignItems={"start"} w={"full"}>
                        <Text>Your Password : </Text>
                        <InputGroup>
                            <Input type={show_password ? 'text' : 'password'} variant={"filled"} placeholder="********"></Input>
                            <InputRightElement mr={"5px"}>
                                <Box onClick={()=>{setShowPassword(!show_password)}}>
                                    {show_password ? <ViewOffIcon/> : <ViewIcon/> }
                                </Box>
                            </InputRightElement>
                        </InputGroup>
                    </VStack>
                    <VStack alignItems={"start"} w={"full"}>
                        <Text>Your Re-Password : </Text>
                        <InputGroup>
                            <Input type={show_password ? 'text' : 'password'} variant={"filled"} placeholder="********"></Input>
                            <InputRightElement mr={"5px"}>
                                <Box onClick={()=>{setShowPassword(!show_password)}}>
                                    {show_password ? <ViewOffIcon/> : <ViewIcon/> }
                                </Box>
                            </InputRightElement>
                        </InputGroup>
                    </VStack>
                    <HStack></HStack>
                    <Button w={"full"} bg={"blue.400"} textColor={"white"}>SIGN UP</Button>
                    
                </Center>
            </Box>
        </HStack>
    )
}