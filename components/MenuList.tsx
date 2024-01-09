
import Link from 'next/link';
import { useState } from 'react';
import { AllCategoriesLinks } from '@/constants';
import { SubItems } from '.';

interface MenuListProps {        
    title1: string;    
    title2: string;
    url2: string;
    title3: string;
    url3: string;
    title4: string;
    url4: string;
    SubMenuTitle: string; 
}
 
const MenuList: React.FC<MenuListProps> = ({SubMenuTitle, title1, title2, title3, title4}) => { 
     
  return (
    <>
    <div>
    <Link href="/" className='mt-3 flex ml-8'>
      {SubMenuTitle}      
    </Link>
    </div>
    
    <div className='flex flex-col mb-2'>
      <div>
        <Link href='/' >
        {title1}
        </Link>      
      </div>
      <div>
        <Link href='/' >
        {title2}
        </Link>      
      </div>
      <div>
        <Link href='/' >
        {title3}
        </Link>      
      </div>
      <div>
        <Link href='/' >
        {title4}
        </Link>      
      </div>
         
    </div>
    </>
  );
}

export default MenuList;