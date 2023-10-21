"use client"
import {useEffect, useState} from "react"
import Image from 'next/image'
import {NextUIProvider} from '@nextui-org/react'
import { TabList, Button, Table, Tag,  Widget, EmptyRowsForSkeletonTable} from "@web3uikit/core"
import {Tabs, Tab, Card, CardBody, CardHeader,  AvatarGroup, Avatar, Divider} from "@nextui-org/react"
import getContract from "./contract"
import Navbar from "./navbar"


export default function Home() {
  const [data, setdata] = useState([])
  useEffect(() => {
    getContract().then((res)=> {
      setdata(res)
      console.log(res)
    });
    
    // setdata(user)
  }, []);
  return (
    <div>
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
        <Table
        className="mt-2 p-1"
  columnsConfig="1fr 1fr 1fr 1fr 1fr 1fr "
  customLoadingContent={<div className="flex-col w-full h-auto"><EmptyRowsForSkeletonTable /><EmptyRowsForSkeletonTable /><EmptyRowsForSkeletonTable /></div>}
   data={
    data}
  //  [
  //   [
  //     <Avatar isRounded size={36} theme="image" image="./favicon.ico"/>,
  //     'Moralis Magi',
  //     7,
  //     '0x18...130e',
      
  //   ],
  //   [
  //     <Avatar fontSize={36} isRounded theme="image"/>,
  //     'My Cool Nft',
  //     6,
  //     '0x18...130e',
      
  //   ],
  //   [
  //     <Avatar fontSize={36} isRounded theme="image"/>,
  //     'Magi Cool Topen',
  //     5,
  //     '0x18...130e',
      
  //   ],
  //   [
  //     <Avatar fontSize={36} isRounded theme="image"/>,
  //     'My Marketplace',
  //     4,
  //     '0x18...130e',
      
  //   ],
    
  //   [
  //     <Avatar fontSize={36} isRounded theme="image"/>,
  //     'Ape Yacht',
  //     2,
  //     '0x18...130e',
      
  //   ],
   
   
  //   [
  //     <Avatar fontSize={36} isRounded theme="image"/>,
  //     'My Cool Nft',
  //     3,
  //     '0x18...130e',
     
  //   ],
  //   [
  //     <Avatar fontSize={36} isRounded theme="image"/>,
  //     'Magi Cool Topen',
  //     1,
  //     '0x18...130e',
      
  //   ]
  // ]}

  header={[
    <span>User</span>,
    <span>Price</span>,
    <span>Volume</span>,
    <span>Holder</span>,
    <span>Holding</span>,
    <span>Activity</span>
  ]}
  isColumnSortable={[
    false,
    true,
    true,
    true,
    true,
    true
  ]}
  isScrollableOnOverflow={true}
  //isLoading={}
  maxPages={3}
  onPageNumberChanged={function noRefCheck(){}}
  onRowClick={getContract}
  pageSize={6}
/>
        {/* </Tab>
        <Tab key="music" title="Music">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="videos" title="Videos">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>  
        </Tab>
      </Tabs> */}
    </div>  
//     <div className='w-100% border-2 border-white m-4 p-6'>
     
//     <div>
//     <TabList
//   defaultActiveKey={1}
//   // onChange={getContract}
//   tabStyle="bar"
// >
//   <Tab
//     tabKey={1}
//     tabName={<div style={{display: 'flex'}}>{' '}<span style={{paddingLeft: '4px'}}>trending{' '}</span></div>}
//   >
   
//   </Tab>
//   <Tab
//     tabKey={2}
//     tabName={<div style={{display: 'flex'}}><span style={{paddingLeft: '4px'}}>top{' '}</span></div>}
//   >
//     <Button
//       // icon={<SvgPlus fontSize={16} />}
//       onClick={function noRefCheck(){}}
//       text="Add New Alert"
//       theme="primary"
//       type="button"
//     />
//   </Tab>
// </TabList>
    
//     </div>
// </div>
  )
}
