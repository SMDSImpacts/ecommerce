'use client'

import Link from "next/link";
import { useState, useEffect } from 'react'
import MenuList from "../MenuList";
import { useRouter } from "next/navigation";

interface MenusProps {    
    SubMenu: any;
    MenuItem: any;
    itemUrl: string;
}

const Menus: React.FC<MenusProps> = ({ MenuItem, SubMenu}) => {

    const router = useRouter();    

  return (
    <>    
    <div className="flex transition-all ease-in-out duration-300 hover:bg-white dropdown hover:text-black z-20">
      <div className="flex hover:text-black/70  px-6 py-3">        
        {MenuItem.map((menu:any) => (
            <button key={menu._id} onClick={() => router.push(`http://localhost:3000/${menu.itemUrl}`)}>
                {menu.item}
            </button>
        ))}                
      </div>           
      <div className="dropdown-content transition-all ease-in-out duration-700 text-[12px] font-medium flex left-1/3 transform -translate-x-1/2 px-4 w-96 z-20 relative" >
        <div className="relative">
        {SubMenu.map((sub:any) => (
            <>
            <div key={sub} className="flex relative">
                <MenuList title1={sub.title1}  title2={sub.title2} url2={sub.url2} title3={sub.title3} url3={sub.url3} title4={sub.title4} url4={sub.url4} SubMenuTitle={sub.SubMenuTitle} />                
            </div>
            
            </>
        ))}        
        </div>        
      </div>
    </div>
    </>
  );
};

export default Menus;
