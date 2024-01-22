"use client"
import { AddIcon, CheckIcon, CloseIcon, DeleteIcon, EditIcon, SettingsIcon } from "@chakra-ui/icons"
import { HStack, VStack,Text,IconButton, Wrap, Avatar, Show, VisuallyHidden, Input } from "@chakra-ui/react"
import { atom, useAtom } from "jotai";
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

const selectDeletedCategory = atom([])

const newCategory = atom([])

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



