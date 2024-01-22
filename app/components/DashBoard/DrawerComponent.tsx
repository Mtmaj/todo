"use client"
import { HStack,VStack,Text,Button,Link, Avatar,Box,Accordion,AccordionButton,AccordionItem,AccordionPanel,AccordionIcon, IconButton, Wrap } from "@chakra-ui/react"
import { AddIcon, SettingsIcon,EditIcon,DeleteIcon,CloseIcon } from "@chakra-ui/icons"
import { Profile, TimeAndDateAndDailyText, color_shema} from "./DrawerComponents"
import { Categorys } from "./DrawerComponents/categorys"
import { ListNote } from "./DrawerComponents/notes"
export default function DrawerComponent(){
    return (
        <VStack minW={"320px"} w={"320px"} height={"full"} alignItems={"center"} bg={color_shema.black} px={"auto"} overflowY={"scroll"}>
                <Profile />
                <TimeAndDateAndDailyText />
                <Categorys />
                <ListNote />
            </VStack>
    )
}

