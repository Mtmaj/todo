"use client"
import { HStack,VStack,Text,Button,Link, Avatar,Box,Accordion,AccordionButton,AccordionItem,AccordionPanel,AccordionIcon, IconButton, Wrap } from "@chakra-ui/react"
import { AddIcon, SettingsIcon,EditIcon,DeleteIcon,CloseIcon } from "@chakra-ui/icons"
import PanelComponent from "@/app/components/DashBoard/pannel"
import DrawerComponent from "@/app/components/DashBoard/DrawerComponent"
import { color_shema } from "@/app/components/DashBoard/DrawerComponents"
export default function Dashboard(){
    return (
        <HStack w={"full"} h={"full"} overflow={"hidden"} columnGap={"0px"} bg={color_shema.black}>
            <DrawerComponent/>
            <Box h={"full"} w={"1px"} bg={"gray.600"}></Box>
            <PanelComponent />
        </HStack>
    )
}