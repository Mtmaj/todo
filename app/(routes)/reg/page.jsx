import { Button, Input } from "@chakra-ui/react";

export default function LoginPage(){
    const arrayRange = (start, stop, step) =>
        Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );
    return(
        <div className="w-full h-full relative flex justify-center items-center">
            <div className="w-full bg-black h-full absolute overflow-hidden flex items-start justify-center flex-col">
                {arrayRange(0,50,1).map((item)=>{
                    return (
                        <div className="w-full h-full flex items-start justify-center flex-row">
                            {arrayRange(0,200,1).map((item)=>{
                                return (<div className="border-gray-900 min-h-[20px] min-w-[20px] transition-all duration-[1200ms] hover:duration-[0ms] blur-effect hover:bg-[rgba(0,255,25,1)] hover:border-[rgba(0,255,25,1)] border-[1px]"></div>)
                            })}
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-col px-5 py-4 gap-y-1 items-start rounded z-[100] bg-gray-600 shadow-2xl drop-shadow-2xl justify-center">
                <span className="text-[rgba(0,255,25,1)] mb-[10px] text-[20px] font-extrabold w-full text-center ">Login User</span>
                <span className="text-[rgba(0,255,25,1)] text-[16px] ml-1">Email :</span>
                <Input variant={"filled"} width={"400px"} mb={"10px"} color={"rgba(0,255,25,1)"} borderColor={"rgba(0,255,25,1)"} className="hover:border-[rgba(0,255,25,1)] hover:bg-transparent border-[rgba(0,255,25,1)] border-[1px]" bgColor={"transparent"} placeholder="majidimohamad1387@gmail.com"></Input>
                <span className="text-[rgba(0,255,25,1)] text-[16px] ml-1">Password :</span>
                <Input type="password" variant={"filled"} width={"400px"} color={"rgba(0,255,25,1)"} borderColor={"rgba(0,255,25,1)"} className="hover:border-[rgba(0,255,25,1)] hover:bg-transparent border-[rgba(0,255,25,1)] border-[1px]" bgColor={"transparent"} placeholder="majidi1234@"></Input>
                <Button variant={"outline"} w={"full"} border={"rgba(0,255,25,1)"} className="mt-[20px] !border-[1px] !border-[rgba(0,255,25,1)] !outline-[rgba(0,255,25,1)] outline-1 !text-[rgba(0,255,25,1)] hover:!text-white hover:!bg-[rgba(0,255,25,1)]" >LOGIN</Button>
            </div>
        </div>
    )
}