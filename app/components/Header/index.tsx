import {Box,Text,Stack,Link,Grid,GridItem, Button} from "@chakra-ui/react"

export default function Header(){
    return (
        <Grid templateColumns={"repeat(3, 1fr)"} alignItems={"center"} px={"40px"} py="20px" >
            <GridItem w={"100%"} alignItems={"center"}>
                <Text fontWeight={"800"} w={"full"} justifyContent={"start"} fontSize={"20px"}>Todo Web App</Text>
            </GridItem>
            <GridItem w={"100%"} display={"flex"} columnGap={"40px"} justifyContent={"center"} alignItems={"center"}>
               <Link fontWeight={"bold"} href="/">Home</Link>
               <Link href="/dashboard">Dashboard</Link>
               <Link href="/aboutus">About Us</Link>
            </GridItem>
            <GridItem display={"flex"} alignItems={"center"} columnGap={"20px"} justifyContent={"end"} >
                <Link href="/signup" fontWeight={"bold"}>Sign Up</Link>
                <Link href="/login">
                    <Button variant={"outline"} >Login</Button>
                </Link>
            </GridItem>
        </Grid>
    )
}