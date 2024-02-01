"use client"
import { HStack,VStack,Text,Button,Link, Avatar,Box,Accordion,AccordionButton,AccordionItem,AccordionPanel,AccordionIcon, IconButton, Wrap } from "@chakra-ui/react"
import { AddIcon, SettingsIcon,EditIcon,DeleteIcon,CloseIcon } from "@chakra-ui/icons"
import { Profile, TimeAndDateAndDailyText, color_shema} from "./DrawerComponents"
import { Categorys } from "./DrawerComponents/categorys"
import { ListNote } from "./DrawerComponents/notes"
import { atom, useAtom } from "jotai"
import { useEffect, useState } from "react"

export const drawerIsOpen = atom(false)

export default function DrawerComponent(){
    const [isOpen,setIsOpen] = useAtom(drawerIsOpen)
    const [screenSize,SetScreenSize] = useState({width:"0px",height:"0px"})
    useEffect(()=>{
        if(screenSize.width == "0px"){
            SetScreenSize({width:window.innerWidth + "px",height:window.innerHeight + "px"})
        }
        window.addEventListener("resize",()=>{
            if(screenSize.width != window.innerWidth){
            SetScreenSize(
                {
                    width:window.innerWidth ,
                    height:window.innerHeight
                }
            )
            }
        })
    })
    return (
        <div className={"md:w-[320px] md:min-w-[320px] md:border-r-0  overflow-hidden h-full duration-[1000ms] transition-all z-[1000] " + (isOpen?"w-full min-w-full ":"min-w-0 w-0 ")}>
            <VStack minW={{md:"320px",base:screenSize.width}} w={{md:"320px",base:screenSize.width}} overflowX={"hidden"} flexDirection={"column"} height={"full"} alignItems={"center"} bg={color_shema.black} px={"auto"} overflowY={"scroll"}>
                <Profile />
                <TimeAndDateAndDailyText />
                <Categorys />
                <ListNote />
            </VStack>
        </div>
        
    )
}

