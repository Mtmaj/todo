"use client"
import { HStack, Heading, VStack,Input,InputGroup,InputRightElement, Button, Box, Grid, GridItem, Card, CardHeader, CardBody,Text, CardFooter, IconButton, useDisclosure } from "@chakra-ui/react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'

import { MdSort,MdFilterAlt } from "react-icons/md";
import { SearchIcon,ChevronDownIcon,EditIcon,DeleteIcon,CheckIcon, AddIcon } from "@chakra-ui/icons";
import { useState,useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function PanelComponent(){
    const priority_color = {
        "High" : "red",
        "Medium" : "gray.300",
        "Low" : "green"
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return (
        <VStack h={"full"} w={"full"} justifyContent={"start"} alignItems={"start"} p={"20px"} overflow={"hidden"} pb={"0px"} position={"relative"} rowGap={"20px"} >
            <Box position={"absolute"} display={"flex"} className="pointer-events-none" justifyContent={"end"} alignItems={"end"} zIndex={"10"} w={"full"} h="full" p={"40px"}>
                <IconButton aria-label="Add Task" onClick={onOpen} variant={"solid"} className="pointer-events-auto drop-shadow-xl shadow-xl" size={"lg"} bgColor={"blue.400"} color={"white"} _hover={{color:"black",backgroundColor:"gray.100"}} isRound={true} icon={<AddIcon />} ></IconButton>
            </Box>
            <Heading size={"lg"}>My Tasks</Heading>
            <HStack w={"full"} columnGap={"10px"}>
                <InputGroup variant={"filled"}>
                    <Input placeholder="Search In Your Tasks"></Input>
                    <InputRightElement>
                        <SearchIcon />
                    </InputRightElement>
                </InputGroup>
                <Menu>
                    <MenuButton variant={"outline"} as={Button} leftIcon={<MdFilterAlt />} minW={"fit-content"} rightIcon={<ChevronDownIcon />}>
                        Filter
                    </MenuButton>
                    <MenuList>
                        <MenuItem>High</MenuItem>
                        <MenuItem>Medium</MenuItem>
                        <MenuItem>Low</MenuItem>
                        <MenuItem>No Filter</MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton variant={"outline"} as={Button} minW={"fit-content"} leftIcon={<MdSort />} rightIcon={<ChevronDownIcon />}>
                        Sort
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Name</MenuItem>
                        <MenuItem>Date</MenuItem>
                        <MenuItem>Prority</MenuItem>
                        <MenuItem>Added Time</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>

            <HStack w={"full"} h={"full"} justifyContent={"start"} alignItems={"start"}>
                <VStack alignItems={"start"} h={"fit-content"} maxH={"100%"} w={"full"} overflowY={"scroll"} rounded={"20px"} shadow={"md"} border={"1px"} bg={"white"} borderColor={"gray.200"} px={"15px"} py={"10px"} >
                    <Text fontWeight={"900"} color={"#0083ff"} fontSize={"20px"}>Todo Task : </Text>
                    <VStack w={"full"}>
                        <VStack border={"1px"} w={"full"} alignItems={"start"} rounded={"15px"} borderColor={"gray.200"} shadow={"md"} p={"10px"} rowGap={"10px"}>
                            <Heading fontSize={"16px"}>Write Home Work</Heading>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, facilis consectetur laborum t</Text>
                            <HStack justifyContent={"space-between"}>
                                <Text background={"blue.50"} paddingX={"10px"} py={"2px"} rounded={"full"}># HomeWork</Text>
                            </HStack>
                        </VStack>
                        <VStack border={"1px"} w={"full"} alignItems={"start"} rounded={"15px"} borderColor={"gray.200"} shadow={"md"} p={"10px"} rowGap={"10px"}>
                            <Heading fontSize={"16px"}>Write Home Work</Heading>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, facilis consectetur laborum t</Text>
                            <HStack justifyContent={"space-between"}>
                                <Text background={"blue.50"} paddingX={"10px"} py={"2px"} rounded={"full"}># HomeWork</Text>
                            </HStack>
                        </VStack>
                        <VStack border={"1px"} w={"full"} alignItems={"start"} rounded={"15px"} borderColor={"gray.200"} shadow={"md"} p={"10px"} rowGap={"10px"}>
                            <Heading fontSize={"16px"}>Write Home Work</Heading>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, facilis consectetur laborum t</Text>
                            <HStack justifyContent={"space-between"}>
                                <Text background={"blue.50"} paddingX={"10px"} py={"2px"} rounded={"full"}># HomeWork</Text>
                            </HStack>
                        </VStack>
                        <VStack border={"1px"} w={"full"} alignItems={"start"} mb={"200px"} rounded={"15px"} borderColor={"gray.200"} shadow={"md"} p={"10px"} rowGap={"10px"}>
                            <Heading fontSize={"16px"}>Write Home Work</Heading>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, facilis consectetur laborum t</Text>
                            <HStack justifyContent={"space-between"}>
                                <Text background={"blue.50"} paddingX={"10px"} py={"2px"} rounded={"full"}># HomeWork</Text>
                            </HStack>
                        </VStack>
                    </VStack>
                </VStack>
                <VStack alignItems={"start"} h={"fit-content"} maxH={"100%"} w={"full"} overflowY={"scroll"} rounded={"20px"} shadow={"md"} bg={"#EEF5FF"}  px={"15px"} py={"10px"} >
                    <Text fontWeight={"900"} color={"#0083ff"} fontSize={"20px"}>Doing Task : </Text>
                    <VStack w={"full"}>
                        <VStack border={"1px"} w={"full"} alignItems={"start"} rounded={"15px"} borderColor={"gray.200"} shadow={"md"} p={"10px"} rowGap={"10px"}>
                            <Heading fontSize={"16px"}>Write Home Work</Heading>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, facilis consectetur laborum t</Text>
                            <HStack justifyContent={"space-between"}>
                                <Text background={"blue.50"} paddingX={"10px"} py={"2px"} rounded={"full"}># HomeWork</Text>
                            </HStack>
                        </VStack>
                        <VStack border={"1px"} w={"full"} alignItems={"start"} rounded={"15px"} borderColor={"gray.200"} shadow={"md"} p={"10px"} rowGap={"10px"}>
                            <Heading fontSize={"16px"}>Write Home Work</Heading>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, facilis consectetur laborum t</Text>
                            <HStack justifyContent={"space-between"}>
                                <Text background={"blue.50"} paddingX={"10px"} py={"2px"} rounded={"full"}># HomeWork</Text>
                            </HStack>
                        </VStack>
                        <VStack border={"1px"} w={"full"} alignItems={"start"} rounded={"15px"} borderColor={"gray.200"} shadow={"md"} p={"10px"} rowGap={"10px"}>
                            <Heading fontSize={"16px"}>Write Home Work</Heading>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, facilis consectetur laborum t</Text>
                            <HStack justifyContent={"space-between"}>
                                <Text background={"blue.50"} paddingX={"10px"} py={"2px"} rounded={"full"}># HomeWork</Text>
                            </HStack>
                        </VStack>
                        <VStack border={"1px"} w={"full"} alignItems={"start"} mb={"200px"} rounded={"15px"} borderColor={"gray.200"} shadow={"md"} p={"10px"} rowGap={"10px"}>
                            <Heading fontSize={"16px"}>Write Home Work</Heading>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, facilis consectetur laborum t</Text>
                            <HStack justifyContent={"space-between"}>
                                <Text background={"blue.50"} paddingX={"10px"} py={"2px"} rounded={"full"}># HomeWork</Text>
                            </HStack>
                        </VStack>
                    </VStack>
                </VStack>
                <VStack alignItems={"start"} h={"fit-content"} maxH={"100%"} w={"full"} overflowY={"scroll"} rounded={"20px"} shadow={"md"} border={"1px"} bg={"white"} borderColor={"gray.200"} px={"15px"} py={"10px"} >
                    <Text fontWeight={"900"} color={"#0083ff"} fontSize={"20px"}>Ended Task : </Text>
                    <VStack w={"full"}>
                        <VStack border={"1px"} w={"full"} alignItems={"start"} rounded={"15px"} borderColor={"gray.200"} shadow={"md"} p={"10px"} rowGap={"10px"}>
                            <Heading fontSize={"16px"}>Write Home Work</Heading>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, facilis consectetur laborum t</Text>
                            <HStack justifyContent={"space-between"}>
                                <Text background={"blue.50"} paddingX={"10px"} py={"2px"} rounded={"full"}># HomeWork</Text>
                            </HStack>
                        </VStack>
                        <VStack border={"1px"} w={"full"} alignItems={"start"} rounded={"15px"} borderColor={"gray.200"} shadow={"md"} p={"10px"} rowGap={"10px"}>
                            <Heading fontSize={"16px"}>Write Home Work</Heading>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, facilis consectetur laborum t</Text>
                            <HStack justifyContent={"space-between"}>
                                <Text background={"blue.50"} paddingX={"10px"} py={"2px"} rounded={"full"}># HomeWork</Text>
                            </HStack>
                        </VStack>
                        <VStack border={"1px"} w={"full"} alignItems={"start"} rounded={"15px"} borderColor={"gray.200"} shadow={"md"} p={"10px"} rowGap={"10px"}>
                            <Heading fontSize={"16px"}>Write Home Work</Heading>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, facilis consectetur laborum t</Text>
                            <HStack justifyContent={"space-between"}>
                                <Text background={"blue.50"} paddingX={"10px"} py={"2px"} rounded={"full"}># HomeWork</Text>
                            </HStack>
                        </VStack>
                        <VStack border={"1px"} w={"full"} alignItems={"start"} mb={"200px"} rounded={"15px"} borderColor={"gray.200"} shadow={"md"} p={"10px"} rowGap={"10px"}>
                            <Heading fontSize={"16px"}>Write Home Work</Heading>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, facilis consectetur laborum t</Text>
                            <HStack justifyContent={"space-between"}>
                                <Text background={"blue.50"} paddingX={"10px"} py={"2px"} rounded={"full"}># HomeWork</Text>
                            </HStack>
                        </VStack>
                    </VStack>
                </VStack>
            </HStack>

        </VStack>
    )
}