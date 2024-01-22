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
import { color_shema } from "./DrawerComponents";


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
            <Heading size={"lg"} color={"gray.50"} fontWeight={"400"}>My Tasks</Heading>
            <HStack w={"full"} columnGap={"10px"}>
                <InputGroup variant={"filled"} bg={color_shema.card_black} rounded={"10px"} color={"gray.300"} _hover={{bg:color_shema.card_black}} border={color_shema.blue + " !important"}>
                    <Input placeholder="Search In Your Tasks" backgroundColor={color_shema.card_black} _hover={{bg:color_shema.card_black}}  _focus={{border:"1px",borderColor:color_shema.blue}}></Input>
                    <InputRightElement>
                        <SearchIcon color={color_shema.blue} />
                    </InputRightElement>
                </InputGroup>
                <Menu>
                    <MenuButton variant={"filled"} bg={color_shema.card_black} color={"gray.50"} fontWeight={"300"} _hover={{opacity:"1"}} opacity={"0.6"} as={Button} leftIcon={<MdFilterAlt />} minW={"fit-content"} rightIcon={<ChevronDownIcon />}>
                        Filter
                    </MenuButton>
                    <MenuList bg={color_shema.card_black} color={"gray.50"} border={"0px"}>
                        <MenuItem bg={color_shema.card_black} color={"gray.50"} opacity={"0.6"} _hover={{opacity:"1"}}>High</MenuItem>
                        <MenuItem bg={color_shema.card_black} color={"gray.50"} opacity={"0.6"} _hover={{opacity:"1"}} >Medium</MenuItem>
                        <MenuItem bg={color_shema.card_black} color={"gray.50"} opacity={"0.6"} _hover={{opacity:"1"}} >Low</MenuItem>
                        <MenuItem bg={color_shema.card_black} color={"gray.50"} opacity={"0.6"} _hover={{opacity:"1"}} >No Filter</MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton variant={"filled"} bg={color_shema.card_black} color={"gray.50"} fontWeight={"300"} _hover={{opacity:"1"}} opacity={"0.6"} as={Button} minW={"fit-content"} leftIcon={<MdSort />} rightIcon={<ChevronDownIcon />}>
                        Sort
                    </MenuButton>
                    <MenuList bg={color_shema.card_black} border={"0px"}>
                        <MenuItem bg={color_shema.card_black} color={"gray.50"} opacity={"0.6"} _hover={{opacity:"1"}} >Name</MenuItem>
                        <MenuItem bg={color_shema.card_black} color={"gray.50"} opacity={"0.6"} _hover={{opacity:"1"}} >Date</MenuItem>
                        <MenuItem bg={color_shema.card_black} color={"gray.50"} opacity={"0.6"} _hover={{opacity:"1"}} >Prority</MenuItem>
                        <MenuItem bg={color_shema.card_black} color={"gray.50"} opacity={"0.6"} _hover={{opacity:"1"}} >Added Time</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>

        </VStack>
    )
}