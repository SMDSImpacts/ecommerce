'use client'

import Link from "next/link";
import { useState, useEffect, Fragment } from "react"; 
import * as Realm from "realm-web";
import { Menus } from "..";
import { menuBarLinks } from "@/constants";

const MenuBar: React.FC = () => {  
  const ShopOK = "Shop'OK Fashion"
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const app = new Realm.App({id: "smds_ecommerce-gkrwu"});
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const allItems = await user.functions.GetAllCollections();
        console.log(allItems)
        setItems(() => allItems);        
      } catch (error) {
        console.log("failed to log in", error);
      }
    })();
  },[])


  return (
    <>
      <nav>
        <div className="flex">
          <section>
            <div className="flex text-[12px]">
              {items.map((item:any) => (
                <Menus key={item._id} MenuItem={item.MenuItem} SubMenu={item.SubMenu} itemUrl={item.itemUrl} />                
              ))}
            </div>
          </section>          
        </div>
      </nav>
    </>
  );
};

export default MenuBar;