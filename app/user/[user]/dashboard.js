import React from "react";
import {Tabs, Tab, Chip, Card, CardHeader, CardFooter, AvatarGroup, CardBody, Image, Button, Avatar, Divider} from "@nextui-org/react";
import {FiCheckCircle, FiShield, FiZap} from "react-icons/fi";


export default function App() {
  return (
    <div className="flex w-full flex-col">
      <Tabs 
        aria-label="Options" 
        color="primary" 
        variant="underlined"
        classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#22d3ee]",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-[#06b6d4]"
        }}
      >
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2">
              <FiCheckCircle/>
              <span>Basic</span>
            </div>
          }
        >
        <div className="w-full static justify-between flex   ">
    <div className="w-1/3 flex gap-5 ">
          {/* <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" /> */}
          <div className="w-full flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-bold leading-none underline  decoration-1 text-sky-500">PRICE</h4>
            <h4 className="text-small font-bold leading-none  decoration-1 text-sky-500">0.0000068 avax</h4>
            <h5 className="text-small tracking-tight text-default-400">Token ID: 1</h5>
            <Chip color="secondary">ERC-1155</Chip>
          </div>
        </div>
        <div className=" w-2/3 flex justify-end  gap-1  pr-0.5" >
       <div>
        <Button
          className={false ? "bg-transparent text-foreground gorw border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={false ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          Trade 
        </Button></div>
        
        <div>
        <Button
          className={false ? "bg-transparent grow text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={false ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          Subscribe 
        </Button></div>
        <div>
        <Button
          className={false ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={false ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          Upgrade 
        </Button></div>
        </div>
        </div>
        
        <div className="w-full gap-2 grid grid-cols-12 grid-rows-2 px-8 mt-2">
   
    <Card className="col-span-12 sm:col-span-4 h-[100px]">
    <CardHeader className="">
      <h4 className="text-small font-bold leading-none  decoration-1 text-sky-500">Holdings</h4>
      </CardHeader>
      <AvatarGroup
      className="p-2"
        size="sm"
      isBordered
      max={3}
      total={10}
      renderCount={(count) => (
        <p className="font-semibold text-default-400 text-small mx-1"> + {count} other Holdings</p>
      )}
    >
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
    </AvatarGroup>
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[100px]">
    <CardHeader className="">
      <h4 className="text-small font-bold leading-none  decoration-1 text-sky-500">Holders</h4>
      </CardHeader>
      <AvatarGroup
        className="p-2"
        size="sm"
      isBordered
      max={3}
      total={10}
      renderCount={(count) => (
        <p className="font-semibold text-default-400 text-small mx-1"> + {count} other Holders</p>
      )}
    >
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
    </AvatarGroup>
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[100px]">
      <CardHeader className="">
      <h4 className="text-small font-bold leading-none  decoration-1 text-sky-500">Buy/Sell </h4>
      </CardHeader>
      <Divider className="my-1 px-1"/>
      <CardBody>
      <p className="font-bold text-default-400 text-small mx-1">+50 / -8</p>
      </CardBody>
      
    </Card>
    
    
  </div>
        </Tab>
        <Tab
          key="music"
          title={
            <div className="flex items-center space-x-2">
              <FiShield/>
              <span>Premium</span>
            </div>
          }
        />
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <FiZap/>
              <span>Ultra</span>
            </div>
          }
        />
      </Tabs>
    </div>  
  );
}
