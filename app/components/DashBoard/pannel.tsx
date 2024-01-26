"use client"
import { HStack, Heading, VStack,Input,InputGroup,InputRightElement, Button, Box, Grid, GridItem, Card, CardHeader, CardBody,Text, CardFooter, IconButton, useDisclosure } from "@chakra-ui/react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'

import { MdSort,MdFilterAlt } from "react-icons/md";
import { SearchIcon,ChevronDownIcon,EditIcon,DeleteIcon,CheckIcon, AddIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useState,useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { color_shema } from "./DrawerComponents";
import { atom, useAtom } from "jotai";


const tasks_todo = atom(
    [
        {
            id : "1",
            title : "Write HomeWork",
            descriptions : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugit pariatur beatae praesentium aut iste! Et, quaerat? Voluptatum laborum culpa autem cupiditate, animi, esse hic dignissimos sapiente nulla neque illum!",
            category : "School",
            priority : "High",
            date : "1/25/2024 11:41" 
        },
        {
            id : "2",
            title : "Programming",
            descriptions : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugit pariatur beatae praesentium aut iste! Et, quaerat? Voluptatum laborum culpa autem cupiditate, animi, esse hic dignissimos sapiente nulla neque illum!",
            category : "Work",
            priority : "Medium" ,
            date : "1/25/2024 11:41"
        },
        {
            id : "3",
            title : "Play Game",
            descriptions : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugit pariatur beatae praesentium aut iste! Et, quaerat? Voluptatum laborum culpa autem cupiditate, animi, esse hic dignissimos sapiente nulla neque illum!",
            category : "School",
            priority : "Low",
            date : "1/25/2024 11:41"
        },
        {
            id : "4",
            title : "Create Web",
            descriptions : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugit pariatur beatae praesentium aut iste! Et, quaerat? Voluptatum laborum culpa autem cupiditate, animi, esse hic dignissimos sapiente nulla neque illum!",
            category : "Home",
            priority : "High",
            date : "1/25/2024 11:41"
        }
    ]
);

const doing_task = atom([]);




const ItemsTask = ({isRun,title,descriptions,category,priority,date,item})=>{
    const priority_color = {
        "High" : "red",
        "Medium" : "gray",
        "Low" : "green"
    }
    const [column_ref,set_column_ref] = useState("1fr")
    const [isRunned,setIsRunned] = useState(isRun)
    const [tasksTodo,setTasksTodo] = useAtom(tasks_todo)
    const [doingTask,setDoingTask] = useAtom(doing_task)
    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
    const rean = async ()=>{
        set_column_ref("1fr")
        setIsRunned(false)
    }
    useEffect( ()=> {
        
        if(isRunned){
            rean()
        }
    })
    const ToDoing = async ()=>{
        set_column_ref("0fr")
        var dt = [item,...doingTask]
        setDoingTask([...dt])
        await sleep(500)
        
        var tt = [...tasksTodo]
        var index_remove =  tt.findIndex((i)=>i.id == item.id)
        tt.splice(index_remove,1)
        setTasksTodo([...tt])
        set_column_ref("1fr")
    }
    return (
    <div className="w-full" className={" " + (column_ref == "1fr"?"duration-0 delay-0 transition-all":"duration-[600ms] ")} style={{"display":"grid","gridTemplateRows":column_ref}} >
        <VStack borderLeft={"2px "+priority_color[priority]+" solid"} border={column_ref == "0fr"? "!border-transparent" : ""} overflow={"hidden"}  className="transition-all task-blur duration-[500ms]" w={"full"} bg={color_shema.black}  justify={"start"} px={"15px"} py={column_ref == "1fr"?"15px":"0px"} alignItems={"start"} rounded={"8px"} >
            <HStack justifyContent={"space-between"} alignItems={"center"} w={"100%"} >
                <Text color={"gray.200"} fontSize={"15px"} fontWeight={"500"}>{title}</Text>
                <HStack>
                    <IconButton aria-label="Setting" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} icon={<EditIcon/>} ></IconButton>
                    <IconButton aria-label="Setting" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} onClick={()=>{set_column_ref("0fr")}} icon={<DeleteIcon/>}></IconButton>
                </HStack>
            </HStack>
            <Text mt={"-2px"} ml={"5px"} color={"gray.300"} fontSize={"14px"} textOverflow={"clip"}>{descriptions}</Text>
            <HStack alignItems={"center"} mt={"5px"} mb={"-5px"} fontSize={"14px"} justifyContent={"space-between"} w={"full"}>
                <HStack>
                    <Text color={"gray.300"} borderColor={color_shema.blue}  _hover={{bg:color_shema.blue}} cursor={"pointer"} className="transition-all" borderWidth={"1px"} px={"10px"} py={"3px"} rounded={"full"}># {category}</Text>
                    <Text color={"gray.500"}>{date}</Text>
                </HStack>
               
                <IconButton onClick={ToDoing} icon={<ArrowForwardIcon />} color={"gray.300"} borderColor={color_shema.blue} size={"sm"}  borderWidth={"1px"} _hover={{bg:color_shema.blue}} className="transition-all" bg={"transparent"} rounded={"full"} ></IconButton>
            </HStack>
        </VStack>
    </div>)
}

export default function PanelComponent(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [tasksTodo,setTasksTodo] = useAtom(tasks_todo)
    const [doingTask,setDoingTask] = useAtom(doing_task)
    var mTaskTodo = [...tasksTodo]
    useEffect(()=>{
        let maxY = window.scrollMaxY;

        window.scrollTo(0, maxY);
    })
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
            <HStack w={"full"} h={"full"} justifyContent={"start"} alignItems={"start"}>
                <VStack style={{maxHeight:"80%"}} w={"400px"} className="card-blur-blue" rowGap={"10px"} rounded={"8px"} px={"10px"} alignItems={"start"} bg={color_shema.card_black} h={"fit-content"}>
                    <Text color={"gray.100"} fontWeight={"400"} mt={"15px"} fontSize={"17px"}>Tasks</Text>
                    <VStack w={"full"} h={"fit-content"} maxHeight={"100%"} overflowY={"scroll"}  rowGap={"10px"} mb={"10px"} >
                        {mTaskTodo.map((item)=>{
                            return <ItemsTask item={item} title={item.title} descriptions={item.descriptions} date={item.date} category={item.category} priority={item.priority} isRun={true}  />
                        })}
                        
                    </VStack>
                </VStack>
                <VStack style={{maxHeight:"80%"}} w={"400px"} className="card-blur-blue" rowGap={"10px"} rounded={"8px"} px={"10px"} alignItems={"start"} bg={color_shema.card_black} h={"fit-content"}>
                    <Text color={"gray.100"} fontWeight={"400"} mt={"15px"} fontSize={"17px"}>Doing Task</Text>
                    <VStack  flexDirection={"column"} w={"full"} h={"fit-content"} maxHeight={"100%"} overflowY={"scroll"}  rowGap={"10px"} mb={"10px"} >
                        {doingTask.map((item)=>{
                            return <ItemsTask item={item} title={item.title} descriptions={item.descriptions} date={item.date} category={item.category} priority={item.priority} isRun={true}  />
                        })}
                    </VStack>
                </VStack>
            </HStack>
        </VStack>
    )
}