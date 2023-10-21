"use client"
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider,Tabs,Tab, Link, Image, User, Avatar,AvatarGroup, Chip, Accordion,Button, AccordionItem} from "@nextui-org/react";
import profile_cover_img from '/public/images/profile-cover-img.png';//profile-cover-img.png
import { FiAlignJustify, FiHome, FiSearch, FiAirplay, FiSidebar} from "react-icons/fi";
import { BsWallet2 } from "react-icons/bs";
import { RiNftFill } from "react-icons/ri";
import Dashboard from "./dashboard";
import Chart from "./chart"

import NextImage from 'next/image';



export default function App() {
  return (
    <div className="grid justify-items-center bg-indigo-500">
    <Card className="  w-5/6 sm:w-400px  mt-2">
      <CardHeader className=" flex flex-col pt-5 p-x-2">
        
        <NextImage
            className='avatar-img w-100 h-30  rounded-md'
             src={profile_cover_img}
            alt='image'
          />
       
        <div className="w-full flex-col gap-2  mt-2">
        
    <div className="flex justify-between p-2">
    <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
        <Button
          className={false ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={false ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {false ? "Unfollow" : "Follow"}
        </Button>
        </div>
        <div className="px-3 py-1 text-small text-default-400">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
        </p>
        <span className="pt-2">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </div>
      <div className="flex gap-3 justify-start p-2">
        <div className="">
        <AvatarGroup
        size="sm"
      isBordered
      max={3}
      total={10}
      renderCount={(count) => (
        <p className="font-semibold text-default-400 text-small mx-1"> +{count} followers</p>
      )}
    >
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
    </AvatarGroup>
        </div>
      </div>

          {/* <div className=" w-1/3 mt-1 h-400px ">
          <User   
      name="Junior Garcia"
      description={(
        <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
          @jrgarciadev
        </Link>
      )}
      avatarProps={{
        src: "https://avatars.githubusercontent.com/u/30373425?v=4"
      }}
      // className="w-full h-full"
    />
    </div>
    <div className="w-2/3 h-300px mt-1 ">
      {/* hello */}
    {/* <Card className=" w-full">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card> 
     </div> */} 
        </div>
        {/* <Divider className="my-1"/> */}
        <Accordion variant="multiple">
      <AccordionItem key="1" aria-label="Accordion 1" title={
            <div className="flex items-center space-x-2">
              <BsWallet2 size={25}/>
              <span>DappWallet</span>
            </div>
          }>
      
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 1" title={
            <div className="flex items-center space-x-2">
              <RiNftFill size={25}/>
              <span>NFT info</span>
            </div>
          }>
      
      </AccordionItem>
    </Accordion>
       
        <Divider className="my-2" />
      {/* <div className=" w-full flex h-5 items-start space-x-4 text-small">
        <div>DASHBOARD</div>
        <Divider orientation="vertical" />
        <div>POST</div>
        <Divider orientation="vertical" />
        <div>NFTS</div>
        <Divider orientation="vertical" />
        <div>PHOTOS</div>
      </div> */}
      <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="primary" variant="light">
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2">
              <FiAirplay/>
              <span>Dashboard</span>
            </div>
          }
        >
        {/* <Divider className=" w-full my-1"/> */}
        <Dashboard/>
        </Tab>
        <Tab
          key="music"
          title={
            <div className="flex items-center space-x-2">
              <FiSidebar/>
              <span>Post</span>
            </div>
            
          }
        />
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <RiNftFill/>
              <span>NFTs</span>
            </div>
           
          }
        />
      </Tabs>
      </div> 
      </CardHeader>
      <Divider className="py-2"/>
      <CardBody>
      
   
      </CardBody>
      <Divider/>
      <CardFooter className="w-full">
        <Chart />
      </CardFooter>
    </Card>
    </div>
  );
}
