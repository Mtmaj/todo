import { HStack,VStack,Text,Button,Link, Avatar,Box,Accordion,AccordionButton,AccordionItem,AccordionPanel,AccordionIcon, IconButton, Wrap } from "@chakra-ui/react"
import { AddIcon, SettingsIcon,EditIcon,DeleteIcon,CloseIcon } from "@chakra-ui/icons"
import { Categorys, Notes, Profile, TimeAndDateAndDailyText, color_shema} from "./DrawerComponents"

export default function DrawerComponent(){
    return (
        <VStack minW={"320px"} w={"320px"} height={"full"} alignItems={"center"} bg={color_shema.black} px={"auto"} overflowY={"scroll"}>
                <Profile />
                <TimeAndDateAndDailyText />
                <Categorys />
                <Notes />
                <Notes />
                <Notes />
                <Notes />
                <Button size={"xl"} w={"95%"} p={"10px"} mb={"10px"} mx={"auto"} columnGap={"10px"} _hover={{color:"white",bg:color_shema.blue}}><AddIcon/> Add New Note</Button>
            </VStack>
    )
}

