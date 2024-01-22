import { HStack, VStack,Text, IconButton, Input, Textarea,Button } from "@chakra-ui/react";
import { useAtom,atom } from "jotai";
import { color_shema } from ".";
import { CheckIcon, CloseIcon, DeleteIcon, EditIcon,AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { title } from "process";

const notesData = atom([
])

export const addNotes = atom(
    []
)

export const Add_Notes = ({title,text,index}:{title:string,text:string,index:number})=>{
    const [listNotes,setListNote] = useAtom(notesData)
    const [isEdit,setIsEdit] = useState(true)
    const [titleVal,setTitleVal] = useState(title)
    const [TextVal,setTextVal] = useState(text)
    const [addList,setAddList] = useAtom(addNotes)
    function onSubmit(){
        var change_list = [...listNotes]
        change_list.push(
            {
                title:titleVal,
                text:TextVal
            }
        )
        setListNote([...change_list])
        change_list = [...addList]
        change_list.splice(index,1)
        setAddList([...change_list])
        setIsEdit(false)
    }
    function onClose(){
        var change_list = [...addList]
        change_list.splice(index,1)
        setAddList([...change_list])
    }

    return (
        <VStack padding={"15px"} mb={"10px"} bg={color_shema.card_black} shadow={"md"} borderRadius={"8px"} w={"95%"} alignItems={"start"}>
            <HStack justifyContent={"space-between"} w={"full"}>
                <Input placeholder={"Title Note"} hidden={!isEdit} w={"full"} variant={"outline"} borderColor={color_shema.blue} color={"gray.200"} value={titleVal} onChange={(e)=>{
                    setTitleVal(e.currentTarget.value)
                }} ></Input>
                <HStack>
                <IconButton aria-label="Setting" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} onClick={onSubmit} hidden={!isEdit} icon={<CheckIcon/>}></IconButton>
                <IconButton aria-label="Setting" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} onClick={onClose} hidden={!isEdit} icon={<CloseIcon/>}></IconButton>
                </HStack>
            </HStack>
            <Textarea borderColor={color_shema.blue} placeholder={"Description Note"} w={"full"} h={"250px"} resize={"none"} variant={"outline"} color={"white"} hidden={!isEdit} overflow={"hidden"} value={TextVal} onChange={(e)=>{
                setTextVal(e.currentTarget.value)
            }} ></Textarea>
            
        </VStack>
    )
}

export const Notes = ({title,text,index}:{title:string,text:string,index:number})=>{
    const [listNotes,setListNote] = useAtom(notesData)
    const [isEdit,setIsEdit] = useState(false)
    const [titleVal,setTitleVal] = useState(title)
    const [TextVal,setTextVal] = useState(text)

    function onSubmit(){
        var change_list = [...listNotes]
        change_list[index].text = TextVal
        change_list[index].title = titleVal
        setListNote([...change_list])
        setIsEdit(false)
    }

    function onDeleted(){
        var change_list = [...listNotes]
        change_list.splice(index,1)
        setListNote([...change_list])
        setIsEdit(false)
    } 

    return (
        <VStack padding={"15px"} bg={color_shema.card_black} shadow={"md"} borderRadius={"8px"} w={"95%"} alignItems={"start"}>
            <HStack justifyContent={"space-between"} w={"full"}>
                <Text color={"gray.50"} fontWeight={"400"} hidden={isEdit} >{title}</Text>
                <Input hidden={!isEdit} w={"full"} variant={"outline"} borderColor={color_shema.blue} color={"gray.200"} value={titleVal} onChange={(e)=>{
                    setTitleVal(e.currentTarget.value)
                }} ></Input>
                <HStack>
                <IconButton aria-label="Setting" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} onClick={()=>{setTextVal(text),setTitleVal(title);setIsEdit(!isEdit)}} hidden={isEdit} icon={<EditIcon/>}></IconButton>
                <IconButton aria-label="Setting" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} onClick={onSubmit} hidden={!isEdit} icon={<CheckIcon/>}></IconButton>
                <IconButton aria-label="Setting" hidden={isEdit} onClick={()=>{
                    var list_change = [...listNotes]
                    list_change.splice(index,1)
                    setListNote([...list_change])
                }} rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} icon={<DeleteIcon/>}></IconButton>
                <IconButton aria-label="Setting" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} onClick={()=>{setIsEdit(!isEdit)}} hidden={!isEdit} icon={<CloseIcon/>}></IconButton>
                </HStack>
            </HStack>
            
            <Text color={"gray.300"} opacity={"0.8"} hidden={isEdit} fontWeight={"300"}>{text}</Text>
            <Textarea borderColor={color_shema.blue} w={"full"} h={"250px"} resize={"none"} variant={"outline"} color={"white"} hidden={!isEdit} overflow={"hidden"} value={TextVal} onChange={(e)=>{
                setTextVal(e.currentTarget.value)
            }} ></Textarea>
            
        </VStack>
    )
}

export const ListNote = ()=>{
    const [listNotes,setListNote] = useAtom(notesData)
    var [addList,setAddList] = useAtom(addNotes)
    return (<>
        {listNotes.map(({title,text},index)=>{
            return (<Notes title={title} text={text} index={index} />)
        })}
        {addList.map((item,index)=>{
            return <Add_Notes title={""} text="" index={index}  />
        })}
        <Button hidden={addList.length > 0} bg={color_shema.card_black} color={"white"} size={"xl"} w={"95%"} p={"10px"} mb={"10px"} mx={"auto"} columnGap={"10px"} _hover={{color:"white",bg:color_shema.blue}} onClick={()=>{
            var change_list = [...addList]
            change_list.push("")
            setAddList(change_list)
        }} ><AddIcon/> Add New Note</Button>
    </>)
}