"use client"
import { HStack,Textarea, Heading, VStack,Input,InputGroup,InputRightElement, Button, Box, Grid, GridItem, Card, CardHeader, CardBody,Text, CardFooter, IconButton, useDisclosure } from "@chakra-ui/react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'

import { MdSort,MdFilterAlt } from "react-icons/md";
import {CloseIcon, SearchIcon,ChevronDownIcon,EditIcon,DeleteIcon,CheckIcon, AddIcon, ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { useState,useRef, useEffect, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { color_shema } from "./DrawerComponents";
import { atom, useAtom } from "jotai";
import {categorys_data} from "./DrawerComponents/categorys"
import dateFormat, { masks } from "dateformat";
import { v4 as uuidv4 } from 'uuid';

export const tasks_todo = atom(
    []
);


//[
//     {
//         id : "0",
//         name : "Tasks", 
//         data : [
//             {
//                 id : "1",
//                 title : "Write HomeWork",
//                 descriptions : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugit pariatur beatae praesentium aut iste! Et, quaerat? Voluptatum laborum culpa autem cupiditate, animi, esse hic dignissimos sapiente nulla neque illum!",
//                 category : "School",
//                 priority : "High",
//                 date : "1/25/2024 11:41 PM" 
//             },
//             {
//                 id : "2",
//                 title : "Programming",
//                 descriptions : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugit pariatur beatae praesentium aut iste! Et, quaerat? Voluptatum laborum culpa autem cupiditate, animi, esse hic dignissimos sapiente nulla neque illum!",
//                 category : "Work",
//                 priority : "Medium" ,
//                 date : "1/25/2024 11:41 PM"
//             },
//             {
//                 id : "3",
//                 title : "Play Game",
//                 descriptions : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugit pariatur beatae praesentium aut iste! Et, quaerat? Voluptatum laborum culpa autem cupiditate, animi, esse hic dignissimos sapiente nulla neque illum!",
//                 category : "School",
//                 priority : "Low",
//                 date : "1/25/2024 11:41 PM"
//             },
//             {
//                 id : "4",
//                 title : "Create Web",
//                 descriptions : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugit pariatur beatae praesentium aut iste! Et, quaerat? Voluptatum laborum culpa autem cupiditate, animi, esse hic dignissimos sapiente nulla neque illum!",
//                 category : "Home",
//                 priority : "High",
//                 date : "1/25/2024 11:41 PM"
//             }
//         ],
//     },
//     {
//         id : "1",
//         name : "Doing Tasks", 
//         data : [],
//     },
//     {
//         id : "2",
//         name : "Finished", 
//         data : [],
//     }
// ]
const doing_task = atom([]);




const ItemsTask = ({isRun,title,descriptions,category,priority,date,item,tabID})=>{
    const priority_color = {
        "High" : "red",
        "Medium" : "gray",
        "Low" : "green"
    }
    const [column_ref,set_column_ref] = useState("0fr")
    const [isRunned,setIsRunned] = useState(isRun)
    const [tasksTodo,setTasksTodo] = useAtom(tasks_todo)
    const [doingTask,setDoingTask] = useAtom(doing_task)
    const [categorys,SetCategorys] = useAtom(categorys_data)
    const [titleVal,setTitleVal] = useState(title)
    const [desVal,setDesVal] = useState(descriptions)
    const [isEdit,setIsEdit] = useState(false)
    const [categoryVal,setCategoryVal] = useState(category)
    const [priorityVal,setPriorityVal] = useState(category)

    const index_tab = tasksTodo.findIndex((item)=>item.id == tabID)
    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
    const rean = async ()=>{
        await sleep(100)
        set_column_ref("1fr")
        setIsRunned(false)
    }
    useEffect( ()=> {
        
        if(isRunned){
            rean()
        }
        
    })
    const ToNext = async ()=>{
        set_column_ref("0fr")
        var task_list = [...tasksTodo]
        var index_next = index_tab + 1
        var next_list = task_list[index_next].data
        var dt = [item,...next_list]
        task_list[index_next].data = [...dt]
        setTasksTodo([...task_list])
        await sleep(500)
        var tt = [...task_list[index_tab].data]
        var index_remove =  tt.findIndex((i)=>i.id == item.id)
        tt.splice(index_remove,1)
        task_list[index_tab].data = [...tt]
        setTasksTodo([...task_list])
    }
    
    const ToPrev = async ()=>{
        set_column_ref("0fr")
        var task_list = [...tasksTodo]
        var last_list = task_list[index_tab - 1].data
        var dt = [item,...last_list]
        task_list[index_tab - 1].data = [...dt]
        setTasksTodo([...task_list])
        await sleep(500)
        var tt = [...task_list[index_tab].data]
        var index_remove =  tt.findIndex((i)=>i.id == item.id)
        tt.splice(index_remove,1)
        task_list[index_tab].data = [...tt]
        setTasksTodo([...task_list])
    }

    const DeleteTask = async ()=>{
        set_column_ref("0fr")
        await sleep(500)
        var task_list = [...tasksTodo]
        var tt = [...task_list[index_tab].data]
        var index_remove =  tt.findIndex((i)=>i.id == item.id)
        tt.splice(index_remove,1)
        task_list[index_tab].data = [...tt]
        setTasksTodo([...task_list])
    }

    const SubmitEdit = ()=>{
        var task_list = [...tasksTodo]
        var index_item = task_list[index_tab].data.findIndex((item)=>item.id == item.id)
        task_list[index_tab].data[index_item].title = titleVal
        task_list[index_tab].data[index_item].descriptions = desVal
        task_list[index_tab].data[index_item].category = categoryVal
        task_list[index_tab].data[index_item].priority = priorityVal
        setTasksTodo(task_list)
        setIsEdit(false)
    }
    var category_len = categorys.length
    console.log("___________________________________",category_len)
    return (
    <div className="w-full"  className={" " + ("duration-[500ms] transition-al")} style={{"display":"grid","gridTemplateRows":column_ref,"width":"100%"}} >
        <VStack width={"full"} mb={column_ref == "1fr"?"5px":"0px"} borderLeft={"3px "+priority_color[isEdit?priorityVal: priority]+" solid"} border={column_ref == "0fr"? "!border-[2px_transparent_solid]" : ""} overflow={"hidden"}  className="transition-all group task-blur duration-[500ms]" w={"full"} bg={color_shema.black}  justify={"start"} px={"15px"} py={column_ref == "1fr"?"15px":"0px"} alignItems={"start"} rounded={"8px"} >
            <HStack justifyContent={"space-between"} alignItems={"center"} w={"100%"} >
                <Text hidden={isEdit} color={"gray.200"} fontSize={"15px"} fontWeight={"500"}>{title}</Text>
                <Input placeholder="Please Enter Title for Task ..." hidden={!isEdit} w={"full"} variant={"outline"} borderColor={color_shema.blue} color={"gray.200"} value={titleVal} onChange={(e)=>{
                    setTitleVal(e.currentTarget.value)
                }} ></Input>
                <HStack className="group-hover:opacity-[1] transition-all opacity-0" hidden={isEdit}>
                    <IconButton aria-label="Edit" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} onClick={()=>{setTitleVal(title);setDesVal(descriptions);setCategoryVal(category);setPriorityVal(priority);setIsEdit(true)}} icon={<EditIcon/>} ></IconButton>
                    <IconButton aria-label="Delete" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} onClick={DeleteTask} icon={<DeleteIcon/>}></IconButton>
                </HStack>
                <HStack hidden={!isEdit}>
                    <IconButton aria-label="Submit" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} onClick={SubmitEdit} icon={<CheckIcon/>} ></IconButton>
                    <IconButton aria-label="Discard" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} onClick={()=>{setIsEdit(false)}} icon={<CloseIcon/>}></IconButton>
                </HStack>
            </HStack>
            <Text w={"full"} hidden={isEdit} mt={"-2px"} ml={"5px"} color={"gray.300"} fontSize={"14px"} textOverflow={"clip"}>{descriptions}</Text>
            <Textarea placeholder="Please Enter Description For Task ..." borderColor={color_shema.blue} w={"full"} h={"200px"} resize={"none"} variant={"outline"} color={"white"} hidden={!isEdit} overflow={"hidden"} value={desVal} onChange={(e)=>{
                setDesVal(e.currentTarget.value)
            }} ></Textarea>
            <HStack hidden={isEdit} alignItems={"center"} mt={"5px"} mb={"-5px"} fontSize={"14px"} justifyContent={"space-between"} w={"full"}>
                <HStack>
                    <Text color={"gray.300"} borderColor={color_shema.blue}  _hover={{bg:color_shema.blue}} cursor={"pointer"} className="transition-all" borderWidth={"1px"} px={"10px"} py={"3px"} rounded={"full"}># {category}</Text>
                    <Text color={"gray.500"}>{date}</Text>
                </HStack>

                <HStack hidden={isEdit} className="group-hover:opacity-[1] transition-all opacity-0">
                    <IconButton hidden={index_tab > 0?false:true} onClick={ToPrev} icon={<ArrowBackIcon    />} color={"gray.300"} borderColor={color_shema.blue} size={"sm"}  borderWidth={"1px"} _hover={{bg:color_shema.blue}} className="transition-all" bg={"transparent"} rounded={"full"} ></IconButton>
                    <IconButton hidden={index_tab < tasksTodo.length-1?false:true} onClick={ToNext} icon={<ArrowForwardIcon />} color={"gray.300"} borderColor={color_shema.blue} size={"sm"}  borderWidth={"1px"} _hover={{bg:color_shema.blue}} className="transition-all" bg={"transparent"} rounded={"full"} ></IconButton>
                </HStack>
                
            </HStack>
            <HStack hidden={!isEdit}>
                <Menu>
                    <MenuButton rounded={"full"} _active={{bg:color_shema.card_black}} borderColor={color_shema.blue} borderWidth={"1px"} variant={"outline"} bg={color_shema.card_black} color={"gray.50"} fontWeight={"300"} _hover={{opacity:"1",bg:color_shema.card_black}} opacity={"0.6"} as={Button} minW={"fit-content"} rightIcon={<ChevronDownIcon />}>
                        {categoryVal}
                    </MenuButton>
                    <MenuList bg={color_shema.card_black} border={"0px"}>
                        {categorys.length == 0?console.log("hello")
                            (<MenuItem bg={color_shema.card_black} color={"gray.50"} opacity={"0.6"} _hover={{opacity:"1"}}>Please Add Category From Dashbord</MenuItem>)
                        : (categorys.map((item,index)=>{
                            return <MenuItem bg={color_shema.card_black} key={uuidv4()} color={"gray.50"} opacity={"0.6"} _hover={{opacity:"1"}} onClick={()=>{setCategoryVal(item)}} >{item}</MenuItem>
                        }))}
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton rounded={"full"} _active={{bg:color_shema.card_black}} borderColor={color_shema.blue} borderWidth={"1px"} variant={"outline"} bg={color_shema.card_black} color={"gray.50"} fontWeight={"300"} _hover={{opacity:"1",bg:color_shema.card_black}} opacity={"0.6"} as={Button} minW={"fit-content"} rightIcon={<ChevronDownIcon />}>
                        {priorityVal}
                    </MenuButton>
                    <MenuList bg={color_shema.card_black} border={"0px"}>
                        <MenuItem bg={color_shema.card_black} color={"gray.50"} opacity={"0.6"} _hover={{opacity:"1"}} onClick={()=>{setPriorityVal("High")}} >High</MenuItem>
                        <MenuItem bg={color_shema.card_black} color={"gray.50"} opacity={"0.6"} _hover={{opacity:"1"}} onClick={()=>{setPriorityVal("Medium")}} >Medium</MenuItem>
                        <MenuItem bg={color_shema.card_black} color={"gray.50"} opacity={"0.6"} _hover={{opacity:"1"}} onClick={()=>{setPriorityVal("Low")}} >Low</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </VStack>
    </div>)
}


const AddTaskComponent = ({column_ref,set_column_ref,index_tab})=>{
    const priority_color = {
        "High" : "red",
        "Medium" : "gray",
        "Low" : "green"
    }
    const [isRunned,setIsRunned] = useState(true)
    const [tasksTodo,setTasksTodo] = useAtom(tasks_todo)
    const [categorys,SetCategorys] = useAtom(categorys_data)
    const [titleVal,setTitleVal] = useState("")
    const [desVal,setDesVal] = useState("")
    const [categoryVal,setCategoryVal] = useState("Set Category")
    const [priorityVal,setPriorityVal] = useState("Low")
    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
    function Discard(){
        setTitleVal("")
        setDesVal("")
        setCategoryVal("Set Ctaegory")
        setPriorityVal("Low")
        set_column_ref("0fr")
    }
    function Submit(){
        var list_task = [...tasksTodo]
        const now = new Date();
        list_task[index_tab].data = [
            {
                id : uuidv4(),
                title : titleVal,
                descriptions : desVal,
                category : categoryVal,
                priority : priorityVal,
                date : dateFormat(now,"m/dd/yyyy h:MM TT")
            }
        ,...list_task[index_tab].data]
        setTasksTodo([...list_task])
        set_column_ref("0fr")
        setTitleVal("")
        setDesVal("")
        setCategoryVal("Set Ctaegory")
        setPriorityVal("Low")
        set_column_ref("0fr")
    }
    return (
        <div className="w-full" className={" " + ("duration-[500ms] transition-al")} style={{"display":"grid","gridTemplateRows":column_ref}} >
            <VStack  mb={column_ref == "1fr"?"5px":"0px"}  borderLeft={"3px "+priority_color[priorityVal]+" solid"} border={column_ref == "0fr"? "!border-[2px_transparent_solid]" : ""} overflow={"hidden"}  className="transition-all group task-blur duration-[500ms]" w={"full"} bg={color_shema.black}  justify={"start"} px={"15px"} py={column_ref == "1fr"?"15px":"0px"} alignItems={"start"} rounded={"8px"} >
                <HStack justifyContent={"space-between"} alignItems={"center"} w={"100%"} >
                    <Input placeholder="Please Enter Title for Task ..." w={"full"} variant={"outline"} borderColor={color_shema.blue} color={"gray.200"} value={titleVal} onChange={(e)=>{
                        setTitleVal(e.currentTarget.value)
                    }} ></Input>
                    <HStack>
                        <IconButton aria-label="Submit" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} onClick={Submit} icon={<CheckIcon/>} ></IconButton>
                        <IconButton aria-label="Discard" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} onClick={Discard} icon={<CloseIcon/>}></IconButton>
                    </HStack>
                </HStack>
                <Textarea placeholder="Please Enter Description For Task ..." borderColor={color_shema.blue} w={"full"} h={"200px"} resize={"none"} variant={"outline"} color={"white"} overflow={"hidden"} value={desVal} onChange={(e)=>{
                    setDesVal(e.currentTarget.value)
                }} ></Textarea>
                <HStack>
                    <Menu>
                        <MenuButton rounded={"full"} _active={{bg:color_shema.card_black}} borderColor={color_shema.blue} borderWidth={"1px"} variant={"outline"} bg={color_shema.card_black} color={"gray.50"} fontWeight={"300"} _hover={{opacity:"1",bg:color_shema.card_black}} opacity={"0.6"} as={Button} minW={"fit-content"} rightIcon={<ChevronDownIcon />}>
                            {categoryVal}
                        </MenuButton>
                        <MenuList bg={color_shema.card_black} border={"0px"}>
                        {categorys.length == 0?
                            (<MenuItem bg={color_shema.card_black} color={"gray.50"} opacity={"0.6"} _hover={{opacity:"1"}}>Please Add Category From Dashbord</MenuItem>)
                        : (categorys.map((item,index)=>{
                            return <MenuItem bg={color_shema.card_black} key={uuidv4()} color={"gray.50"} opacity={"0.6"} _hover={{opacity:"1"}} onClick={()=>{setCategoryVal(item)}} >{item}</MenuItem>
                        }))}
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton rounded={"full"} _active={{bg:color_shema.card_black}} borderColor={color_shema.blue} borderWidth={"1px"} variant={"outline"} bg={color_shema.card_black} color={"gray.50"} fontWeight={"300"} _hover={{opacity:"1",bg:color_shema.card_black}} opacity={"0.6"} as={Button} minW={"fit-content"} rightIcon={<ChevronDownIcon />}>
                            {priorityVal}
                        </MenuButton>
                        <MenuList bg={color_shema.card_black} border={"0px"}>
                            <MenuItem bg={color_shema.card_black} color={"gray.50"} opacity={"0.6"} _hover={{opacity:"1"}} onClick={()=>{setPriorityVal("High")}} >High</MenuItem>
                            <MenuItem bg={color_shema.card_black} color={"gray.50"} opacity={"0.6"} _hover={{opacity:"1"}} onClick={()=>{setPriorityVal("Medium")}} >Medium</MenuItem>
                            <MenuItem bg={color_shema.card_black} color={"gray.50"} opacity={"0.6"} _hover={{opacity:"1"}} onClick={()=>{setPriorityVal("Low")}} >Low</MenuItem>
                        </MenuList>
                    </Menu>
                </HStack>
            </VStack>
        </div>
    )

}


const ListTasksItem = ({listTask,name,id,index})=>{
    const [column_ref,set_column_ref] = useState("0fr")
    const [isEdit,setIsEdit] = useState(false)
    const [taskTodo,setTaskTodo] = useAtom(tasks_todo)
    const [inputVal,setInputVal] = useState(name)
    function Deleted_Tab(){
        var tasks_list = [...taskTodo]
        tasks_list.splice(tasks_list.findIndex((item)=>item.id == id),1)
        setTaskTodo([...tasks_list])
    }

    function SubmitEdit(){
        var tasks_list = [...taskTodo]
        if(name != inputVal){
            tasks_list[tasks_list.findIndex((item)=>item.id == id)].name = inputVal
        }
        console.log(tasks_list)
        setIsEdit(false)
        setTaskTodo([...tasks_list])
    }

    return (
        <VStack  style={{maxHeight:"98%"}} w={"400px"} minW={"400px"} className="card-blur-blue" rounded={"8px"} px={"10px"} alignItems={"start"} bg={color_shema.card_black} h={"fit-content"}>
            <HStack mt={"15px"} alignItems={"center"} w={"full"} justifyContent={"space-between"}>
                <Text hidden={isEdit} color={"gray.100"} fontWeight={"400"} fontSize={"17px"}>{name}</Text>
                <Input placeholder="Please Enter Tabs Name ..." hidden={!isEdit} w={"full"} variant={"outline"} borderColor={color_shema.blue} color={"gray.200"} value={inputVal} onChange={(e)=>{
                    setInputVal(e.currentTarget.value)
                }} ></Input>
                <HStack hidden={isEdit}>
                    <IconButton aria-label="Add" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} onClick={()=>{set_column_ref("1fr")}} opacity={column_ref == "0fr"?"1":"0"} icon={<AddIcon/>} ></IconButton>
                    <IconButton aria-label="Edit" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} onClick={()=>{setInputVal(name);setIsEdit(true)}} icon={<EditIcon/>} ></IconButton>
                    <IconButton aria-label="Delete" onClick={Deleted_Tab} rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} icon={<DeleteIcon />} ></IconButton>
                </HStack> 
                <HStack hidden={!isEdit}>
                    <IconButton aria-label="Setting" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} onClick={SubmitEdit} icon={<CheckIcon/>}></IconButton>
                    <IconButton aria-label="Setting" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} onClick={()=>{setIsEdit(false)}} icon={<CloseIcon/>}></IconButton>
                </HStack>
            </HStack>
            <VStack gap={"0px"} flexDirection={"column"} w={"full"} h={"fit-content"} maxHeight={"100%"} overflowY={"scroll"} mb={"10px"} >
                <AddTaskComponent index_tab={index} column_ref={column_ref} set_column_ref={set_column_ref} />
                {listTask.map((item,index)=>{
                    return <ItemsTask tabID={id} key={item.id} item={item} title={item.title} descriptions={item.descriptions} date={item.date} category={item.category} priority={item.priority} isRun={true}  />
                })}
            </VStack>
        </VStack>
    )
}

const TaskPannel = ()=>{
    const [tasksTodo,setTasksTodo] = useAtom(tasks_todo)
    return (
        <HStack w={"full"} h={"full"} overflowX={"scroll"} justifyContent={"start"} alignItems={"start"}>
            {tasksTodo.map((item,index)=>{
                return <ListTasksItem index={index} id={item.id} key={item.id} listTask={item.data} name={item.name} />
            })}
        </HStack>
    )
}

export default function PanelComponent(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [tasksTodo,setTasksTodo] = useAtom(tasks_todo)
    useEffect(()=>{
        let maxY = window.scrollMaxY;

        window.scrollTo(0, maxY);
    })
    const btnRef = useRef()

    function addTab(){
        var task_list = [...tasksTodo]
        task_list.push({
            name : "Untitled",
            id : uuidv4(),
            data : []
        })
        setTasksTodo([...task_list])
    }

    return (
        <VStack h={"full"} w={"full"} justifyContent={"start"} alignItems={"start"} p={"20px"} overflow={"hidden"} pb={"0px"} position={"relative"} rowGap={"20px"} >
            <Box position={"absolute"} display={"flex"} className="pointer-events-none" justifyContent={"end"} alignItems={"end"} zIndex={"10"} w={"full"} h="full" p={"40px"}>
                <IconButton aria-label="Add Task" onClick={addTab} variant={"solid"} className="pointer-events-auto drop-shadow-xl shadow-xl" size={"lg"} bgColor={"blue.400"} color={"white"} _hover={{color:"black",backgroundColor:"gray.100"}} isRound={true} icon={<AddIcon />} ></IconButton>
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
            <TaskPannel />
        </VStack>
    )
}