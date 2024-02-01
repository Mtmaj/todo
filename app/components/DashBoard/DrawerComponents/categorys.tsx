"use client"
import { AddIcon, CheckIcon, CloseIcon, DeleteIcon, EditIcon, SettingsIcon } from "@chakra-ui/icons"
import { HStack, VStack,Text,IconButton, Wrap, Avatar, Show, VisuallyHidden, Input, Button, useDisclosure } from "@chakra-ui/react"
import { atom, useAtom } from "jotai";
import Image from "next/image";
import { useState } from "react"
import { color_shema } from ".";
import {tasks_todo} from "../pannel"
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
  } from '@chakra-ui/react'
import React from "react";
export const categorys_data = atom([])

export const selectDeletedCategory = atom<string[]>([])

var updateCategorys = []

const newCategory = atom([])

const DeleteAlert = ({isOpen,cancelRef,onClose,submit}:{isOpen:any,cancelRef:any,onClose:any,submit:any})=>{
    return (
    <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay >
          <AlertDialogContent bg={color_shema.card_black}>
            <AlertDialogHeader fontSize='lg' fontWeight='400' color={"white"}>
              Delete Categorys
            </AlertDialogHeader>

            <AlertDialogBody color={"gray.200"} fontWeight={"300"}>
              Are you sure? You can't undo this action afterwards.This action Deleted Categorys and Removed All Children Task for this Category 
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={()=>{submit();onClose()}} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    )
}

// @ts-ignore
const AddInputComponent = ({index,isEdit,}:{index:number,isEdit:boolean})=>{
    const [listAdd,setListAdd] = useAtom(newCategory)
    return (
        <HStack background={"gray.600"} cursor={"pointer"} opacity={"0.5"} paddingX={"10px"} className="transition-all" color={"white"} py={"2px"} rounded={"full"}>
            <Input variant={"none"} p={"0px"} w={"min-content"} color={"white"} background={"transparent"} size={"sm"} value={listAdd[index]} onChange={(e)=>{
              var l_category:string[] = [...listAdd]
              l_category[index] = e.currentTarget.value
              setListAdd([...l_category])
            }} hidden={!isEdit}></Input>
            <IconButton className="!transition-all !duration-500 !delay-0" onClick={()=>{
                var l_category:any[] = [...listAdd]
                l_category.splice(index,1)
                setListAdd([...l_category])
            }} hidden={!isEdit} aria-label="Delete or Add" mr={"-6px"} p={"0px"} bg={"transparent"} size={"sm"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} rounded={"full"} icon={<CloseIcon />}></IconButton>
        </HStack>
    )
}

export const CtaegorysItem = ({text,categorysSelect,index,setCategorysSelect,is_select,isEdit}:{text:string,index:number,categorysSelect:any,setCategorysSelect:any,is_select:boolean,isEdit:any})=>{
    const [val,setVal] = useState(text)
    const [selectedDeleted,setSelectedDeleted] = useAtom(selectDeletedCategory)
    updateCategorys[index] = val 
    var is_deleted = (selectedDeleted.indexOf(text) != -1)
    const toggleDeleted = ()=>{
      var list_delete_select = [...selectedDeleted]
      if(!is_deleted){
        list_delete_select.push(text)
      }else{
        list_delete_select.splice(list_delete_select.indexOf(text),1)
      }
      setSelectedDeleted([...list_delete_select])
    }
    return (
          <HStack background={is_select && !isEdit? color_shema.blue: !is_deleted ? "gray.600":"red"} cursor={"pointer"} onClick={()=>{
              if(!isEdit){
                var categorys_select_list = [...categorysSelect];
                if(is_select){
                    categorys_select_list.splice(categorys_select_list.indexOf(text),1)
                }else{
                    categorys_select_list.push(text)
                }
              setCategorysSelect([...categorys_select_list])
              }
          }} opacity={is_select && !isEdit?"1" : "0.5"} paddingX={"10px"} className="transition-all" color={"white"} py={"2px"} rounded={"full"}>
              <Text fontWeight={"300"} hidden={isEdit} ># {text} <></></Text>
              <Input id={text+"1"} variant={"none"} p={"0px"} w={"min-content"} color={"white"} background={"transparent"} size={"sm"} value={val} onChange={(e)=>{
                setVal(e.currentTarget.value)
              }} hidden={!isEdit}></Input>
              <IconButton className="!transition-all !duration-500 !delay-0" onClick={toggleDeleted} hidden={!isEdit} aria-label="Delete or Add" mr={"-6px"} p={"0px"} bg={"transparent"} size={"sm"} _hover={{bg:is_deleted?"transparent" : color_shema.blue,color:"white"}} color={is_deleted?"white":color_shema.blue} borderRadius={"full"} rounded={"full"} icon={<CloseIcon className={ "transition-all !duration-500 delay-0 " +  (is_deleted? "rotate-45 text-white":"")}/>}></IconButton>
          </HStack>
      )
  }



  // @ts-ignore
export const Categorys = ()=>{
      const [categorysSelect,setCategorysSelect] = useState([])
      const [categoryData,setCtaegoryData] = useAtom(categorys_data)
      const [categoryDeleted,setCategoryDeleted] = useAtom(selectDeletedCategory)
      const [isEdit,setIsEdit] = useState(false)
      const [listAdd,setListAdd] = useAtom(newCategory)
      const [todoTask,setTodoTask] = useAtom(tasks_todo)
      const { isOpen, onOpen, onClose } = useDisclosure()
      const cancelRef = React.useRef()
      updateCategorys = []
      const SubmitAction = ()=>{
        var list_category = [...categoryData]
        var categorys_select_list = [...categorysSelect]
        var tasks_list = [...todoTask]
        categoryDeleted.map((item,index)=>{
          tasks_list.map((tabs,index)=>{
            while(tabs.data.findIndex((i)=>i.category == item) > -1){
              tabs.data.splice(tabs.data.findIndex((i)=>i.category == item),1)
            }
          })
        })
        
        categoryDeleted.map((item,index)=>{
            list_category[list_category.indexOf(item)] = ""
            var indexS = categorys_select_list.indexOf(item)
            if(indexS != -1){
                categorys_select_list.splice(indexS,1)
            }
        })
        updateCategorys.map((item,index)=>{
            if(list_category[index] != ""){
              if(item != list_category[index]){
                tasks_list.map((tabs,index)=>{
                  while(tabs.data.findIndex((i)=>i.category == list_category[index]) > -1){
                    tabs.data[tabs.data.findIndex((i)=>i.category == list_category[index])].category = item
                  }
                })
              }
              list_category[index] = item
            }
        })
        setTodoTask([...tasks_list])
        var list_category_temp = []
        list_category.map((item)=>{
            if(item != ""){
                list_category_temp.push(item)
            }
        })
        list_category = [...list_category_temp]
        listAdd.map((item)=>{
            if(item != ""){
                if(list_category.indexOf(item) == -1){
                    var elementCount = {}
                    listAdd.forEach(element => {
                        elementCount[element] = (elementCount[element] || 0) + 1;
                    });
                    if(elementCount[item] == 1){
                        list_category.push(item)
                    }
                }
            }
        })
        
        setListAdd([])
        setCategoryDeleted([])
        setCategorysSelect([...categorys_select_list])
        setCtaegoryData([...list_category])
        setIsEdit(false)
      }
      const SubmitChanges = ()=>{
        if(categoryDeleted.length > 0){
            onOpen()
        }else{
            SubmitAction()
        }
      }
      const DiscardChanges = ()=>{
        setListAdd([])
        setCategoryDeleted([])
        setIsEdit(false)
      }

      
      return (
          <VStack padding={"15px"} background={"#EEF5FF"} borderRadius={"7px"} w={"95%"} alignItems={"start"} bg={color_shema.card_black}>
              <HStack justifyContent={"space-between"} w={"full"}>
                  <Text color={"gray.50"} fontWeight={"400"}>My Categorys</Text>
                  <HStack>
                      <IconButton hidden={isEdit} display={isEdit?"hidden":""} aria-label="Edit" onClick={()=>{setIsEdit(true)}} mr={"-6px"} rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} icon={<EditIcon/>}></IconButton>
                      <IconButton hidden={!isEdit} onClickCapture={SubmitChanges} display={isEdit?"hidden":""} aria-label="Check" mr={"-6px"} rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={"green"} borderRadius={"full"} icon={<CheckIcon/>}></IconButton>
                      <IconButton hidden={!isEdit} onClickCapture={DiscardChanges} display={isEdit?"hidden":""} aria-label="Close"  mr={"-6px"} rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={"red"} borderRadius={"full"} icon={<CloseIcon fontSize={"12px"}/>}></IconButton>
                  </HStack>
              </HStack>
              <Wrap p={"3px"}>
                  
                  {!isEdit && categoryData.length == 0? <Text color={"gray.400"} marginBottom={"20px"} >You don't have category ,Please Add Your Category</Text> : categoryData.map((item:string,index:number)=>{
                      updateCategorys.push(item)
                      return (<CtaegorysItem key={item} text={item} index={index} isEdit={isEdit} categorysSelect={categorysSelect} setCategorysSelect={setCategorysSelect} is_select={categorysSelect.indexOf(item) != -1}/>)
                  })}
                  {isEdit?
                   listAdd.map((item,index)=>{
                        return (
                            <AddInputComponent index={index} isEdit={isEdit} />
                        )
                   }) 
                  :
                  <></>}
                  <IconButton aria-label="Add Category" icon={<AddIcon/>} size={"sm"} rounded={"full"} background={"gray.200"} opacity={"0.5"} _hover={{opacity:"1",color:"white",background:color_shema.blue}} onClick={
                    ()=>{
                        if(!isEdit){
                            setIsEdit(true)
                        }
                        var l_change = [...listAdd]
                        l_change.push("")
                        setListAdd([...l_change])
                    }
                  } > </IconButton>
              </Wrap>
              <DeleteAlert cancelRef={cancelRef} isOpen={isOpen} onClose={onClose} submit={SubmitAction}  />
          </VStack>
      )
  }