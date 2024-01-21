import { Box,Stack } from "@chakra-ui/react"
import Header from "Components/Header"
import Banner from "Components/home/banner"

export default function Home(){
    return (
        <Stack direction={"column"} w={"full"} h={"full"}>
            <Header/>
            <Banner />
        </Stack>
    )
}