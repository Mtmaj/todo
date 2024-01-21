"use client"
import { AddIcon, CheckIcon, CloseIcon, DeleteIcon, EditIcon, SettingsIcon } from "@chakra-ui/icons"
import { HStack, VStack,Text,IconButton, Wrap, Avatar, Show, VisuallyHidden, Input } from "@chakra-ui/react"
import Image from "next/image";
import { useState } from "react"


var categorys_data:string[] = [
    "School",
    "Work",
    "HomeWork",
    "Home",
    "Game",
    "Programming"
]

import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock">
        <div
          className="hour_hand"
          style={{
            transform: `rotateZ(${this.state.time.getHours() * 30}deg)`
          }}
        />
        <div
          className="min_hand"
          style={{
            transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`
          }}
        />
        <div
          className="sec_hand"
          style={{
            transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)`
          }}
        />
        <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
      </div>
    );
  }
}


export const color_shema = {
    blue : "#1570EF",
    black : "#090909",
    card_black : "#181818"
}

export const TimeAndDateAndDailyText = ()=>{
    return (
        <HStack w={"95%"} rounded={"7px"} p={"5px"}  background={color_shema.card_black}>
            <VStack minW={"80px"} w={"80px"} h={"80px"} justifyContent={"space-around"} className="timegradient" rounded={"5px"} alignItems={"center"}>
                <Clock />
                <img className="w-full h-full object-cover rounded" src={"https://marvel-b1-cdn.bc0a.com/f00000000293000/www.rockhall.com/sites/default/files/styles/c33_quote_desktop_1920_1080/public/2019-11/Quote_JohnLennon.jpg?h=4362216e&itok=MhUwmlaf"}></img>
            </VStack>
            <VStack alignItems={"start"}>
                <Text fontFamily={"cursive"} fontWeight={"600"} color={"white"} fontSize={"15px"} >Daily Text For You : </Text>
                <Text fontFamily={"cursive"} opacity={"0.9"} fontWeight={"600"} color={"gray.100"} fontSize={"13px"} marginTop={"-2"}>Life is what happens when you’re busy making other plans.</Text>
            </VStack>
        </HStack>
    )
}

export const Profile = ()=>{
    return (
        <HStack width={"95%"}  borderRadius={"7px"} padding={"10px"} bg={color_shema.card_black} justifyContent={"space-between"} marginTop={"15px"}> 
            <HStack>
                <Avatar src="https://cdn.drawception.com/images/avatars/647493-B9E.png" rounded={"10px"} ></Avatar>
                <Text fontSize={"17px"} color={"gray.50"} fontWeight={"bold"} >Mr.Mmmdi</Text>
            </HStack>
            <IconButton aria-label="Setting" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} icon={<SettingsIcon/>}></IconButton>
        </HStack>
    )
}

export const Notes = ()=>{
    return (
        <VStack padding={"15px"} mb={"10px"} bg={color_shema.card_black} shadow={"md"} borderRadius={"8px"} w={"95%"} alignItems={"start"}>
            <HStack justifyContent={"space-between"} w={"full"}>
                <Text color={"gray.50"} fontWeight={"400"}>My Note 1</Text>
                <HStack>
                <IconButton aria-label="Setting" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} icon={<EditIcon/>}></IconButton>
                <IconButton aria-label="Setting" rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} icon={<DeleteIcon/>}></IconButton>
                </HStack>
            </HStack>
            
            <Text color={"gray.300"} opacity={"0.8"} fontWeight={"300"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eaque dignissimos magnam eos itaque voluptatem error voluptas suscipit ipsa, expedita ad dicta! Doloremque maxime ullam reprehenderit dolorem. Tempora, expedita dolore!</Text>
            
        </VStack>
    )
}

const CtaegorysItem = ({text,categorysSelect,setCategorysSelect,is_select,isEdit}:{text:string,categorysSelect:any,setCategorysSelect:any,is_select:boolean,isEdit:any})=>{
  const [val,setVal] = useState(text)  
  return (
        <HStack background={is_select && !isEdit? color_shema.blue:"gray.600"} cursor={"pointer"} onClick={()=>{
            var categorys_select_list = [...categorysSelect];
            if(is_select){
                categorys_select_list.splice(categorys_select_list.indexOf(text),1)
            }else{
                categorys_select_list.push(text)
            }
            setCategorysSelect([...categorys_select_list])
        }} opacity={is_select && !isEdit?"1" : "0.5"} paddingX={"10px"} className="transition-all" color={"white"} py={"2px"} rounded={"full"}>
            <Text fontWeight={"300"} hidden={isEdit} ># {text} <></></Text>
            <Input id={text+"1"} variant={"none"} p={"0px"} w={"min-content"} color={"white"} background={"transparent"} size={"sm"} value={val} onChange={(e)=>{
              setVal(e.currentTarget.value)
            }} hidden={!isEdit}></Input>
            <IconButton hidden={!isEdit} aria-label="Delete" mr={"-6px"} p={"0px"} bg={"transparent"} size={"sm"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} rounded={"full"} icon={<CloseIcon/>}></IconButton>
        </HStack>
    )
}
// @ts-ignore
export const Categorys = ()=>{
    const [categorysSelect,setCategorysSelect] = useState([])
    const [isEdit,setIsEdit] = useState(false)
    return (
        <VStack padding={"15px"} background={"#EEF5FF"} borderRadius={"7px"} w={"95%"} alignItems={"start"} bg={color_shema.card_black}>
            <HStack justifyContent={"space-between"} w={"full"}>
                <Text color={"gray.50"} fontWeight={"400"}>My Categorys</Text>
                <HStack>
                    <IconButton hidden={isEdit} display={isEdit?"hidden":""} aria-label="Edit" onClick={()=>{setIsEdit(true)}} mr={"-6px"} rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={color_shema.blue} borderRadius={"full"} icon={<EditIcon/>}></IconButton>
                    <IconButton hidden={!isEdit} display={isEdit?"hidden":""} aria-label="Check" onClick={()=>{setIsEdit(false)}} mr={"-6px"} rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={"green"} borderRadius={"full"} icon={<CheckIcon/>}></IconButton>
                    <IconButton hidden={!isEdit} display={isEdit?"hidden":""} aria-label="Close" onClick={()=>{setIsEdit(false)}} mr={"-6px"} rounded={"10px"} p={"0px"} bg={"transparent"} _hover={{bg:color_shema.blue,color:"white"}} color={"red"} borderRadius={"full"} icon={<CloseIcon fontSize={"12px"}/>}></IconButton>
                </HStack>
            </HStack>
            <Wrap p={"3px"}>
                
                {categorys_data.map((item:string)=>{
                    return (<CtaegorysItem text={item} isEdit={isEdit} categorysSelect={categorysSelect} setCategorysSelect={setCategorysSelect} is_select={categorysSelect.indexOf(item) != -1}/>)
                })}
                <IconButton aria-label="Add Category" icon={<AddIcon/>} size={"sm"} rounded={"full"} background={"gray.200"} opacity={"0.5"} _hover={{opacity:"1",color:"white",background:color_shema.blue}} > </IconButton>
            </Wrap>
            
        </VStack>
    )
}
