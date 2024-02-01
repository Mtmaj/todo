"use client"
import { HStack,VStack,Text,Button,Link, Avatar,Box,Accordion,AccordionButton,AccordionItem,AccordionPanel,AccordionIcon, IconButton, Wrap } from "@chakra-ui/react"
import { AddIcon, SettingsIcon,EditIcon,DeleteIcon,CloseIcon } from "@chakra-ui/icons"
import PanelComponent from "@/app/components/DashBoard/pannel"
import DrawerComponent, { drawerIsOpen } from "@/app/components/DashBoard/DrawerComponent"
import { color_shema } from "@/app/components/DashBoard/DrawerComponents"
import { useAtom } from "jotai"
export default function Dashboard(){
    const [isOpen,setIsOpen] = useAtom(drawerIsOpen)
    return (
        <div className="w-full h-full overflow-hidden">
        <HStack w={"full"} h={"full"} overflow={"hidden"} columnGap={"0px"} bg={color_shema.black}>
            <div className="flex overflow-hidden flex-row h-full md:static md:min-w-[321px] absolute">
                <DrawerComponent/>
                <Box className="transition-all duration-1000 z-10" h={"full"} w={{base: isOpen? "1px" : "0px",md:"1px"}} bg={"gray.600"}></Box>
            </div>
            
            <PanelComponent />
            <style global jsx>{`
        html,
        body {
          overflow: hidden;
        }
`}</style>
        </HStack>
        </div>
        
    )
}