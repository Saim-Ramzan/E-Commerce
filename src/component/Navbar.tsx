"use client";
import React, { Suspense, useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/component/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { NextRequest } from "next/server";
import { Button } from "./ui/moving-border";
import { clearCookie, getCookie } from "@/lib/cookies";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "@/lib/firebase";
import CustomButton from "./common/CustomButton";

interface UserData{
  name: string;
  email: string;
  uid: string
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [userData, setUserData] = useState({});

  const getToken = async () => {
    const token = await getCookie("token");
    setUserToken(token  as string)
    console.log("token",token)
    setIsAuthenticated(token !== undefined);
  }

  const getUserData = async () => {
    try {
      const docRef = collection(db, userToken);
      const querySnapshot = await getDocs(docRef);
  
      const userData: UserData[] = [];
      querySnapshot.forEach((doc) => {
        console.log("doc",doc)
        userData.push(doc.data() as UserData);
      });
  
      setUserData(userData); 
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  console.log("userData",userData)
  console.log("userToken",userToken)
  

  useEffect(() => {
    getToken()
    getUserData()
  },[])

  
  const handleLogout = async () => {
    await clearCookie("token")
  }
  return (
    <>
    {isAuthenticated ?
    <Suspense fallback={<p>Profile</p>}>
    <Stack direction={"row"} alignItems={"center"} spacing={2} className="absolute z-30 top-10  right-5">
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    <Link  href="/login" onClick={handleLogout}>
      <CustomButton Color="white" bgColor="green" handleClick={handleLogout} name="Logout"/>
      </Link> 
    </Stack>
    </Suspense>
    : ''}
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Shop">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink  href="/shop">Shop</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
            ></MenuItem>
        </Link>  
      </Menu> 
    </div>
    </>

  );
}

export default Navbar;
