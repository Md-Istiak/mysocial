"use client"
import thriftyABI from "./thriftyABI.json"
import {Contract, JsonRpcProvider} from "ethers"
import Butt from "./button"

import {Avatar} from "@web3uikit/core"
import {Button, ButtonGroup, Dropdown, DropdownMenu, DropdownTrigger, User} from "@nextui-org/react";
 const getcontract = async()=>{
  var customHttpProvider = new JsonRpcProvider(
    "https://api.avax-test.network/ext/C/rpc"
  );
  const users = [];
console.log(customHttpProvider)
  const thriftyNFT = new Contract("0x3F8B0De07Fe45212Ec0ab98E81B604e4b3D2E93b", thriftyABI, customHttpProvider);
  console.log(thriftyNFT);
const numAccount = Number(await thriftyNFT.accountCount());
for (let index = 0; index < numAccount; index++) {
  const user = [];
  const account = await thriftyNFT.TBAbytokenId(index);
  const slicedAddress = account.slice(0, 4) + "..." + account.slice(-4);
  const uri =  await thriftyNFT.tokenURI(index);
  const status = await thriftyNFT.nfts(account);
  const userId = await thriftyNFT.userByTokenId(index);
  
  user.push( <User   
    name="Jane Doe"
    description="Product Designer"
    avatarProps={{
      src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
    }}
  />);
  user.push(Number(status[0].toString()/(10**18)).toFixed(4))
  // user.push(slicedAddress)
  user.push(Number(status[1].toString()/(10**18)).toFixed(4)) 
  user.push("")
  user.push("")
  user.push(
    <Butt />
  )
  
  users.push(user)
}
return users
}
export default getcontract;