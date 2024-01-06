import Image from "next/image";
import Link from "next/link";
import StoreLocator from "@/app/StoreLocator/page";
import { Help, Login, SearchBar, Cart } from "..";


const Nav = () => {

  const shopOK = "Shop'OK"
  
  return (
    <nav>
      <div className="flex items-center justify-between pr-32">
        <Link className="flex" href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={30}
            height={30}
          />        
          <h1 className="font-bold text-3xl font-sans">{shopOK}</h1>
        </Link>
        <div className="hover:bg-white transition-all duration-500 ease-in-out">
        <Link href="/StoreLocator" className="hover:bg-white">
          <p className="hover:text-red-700 cursor-pointer h-12 pt-3 px-2 text-sm transition-all ease-in-out">
            StoreLocator
          </p>
        </Link>
        </div>
        <div className="hover:bg-white transition-all duration-500 ease-in-out">
        <Link href="/SellOnShopOK" className="hover:bg-white">
          <p className="hover:text-red-700 cursor-pointer h-12 pt-3 px-2 text-sm">
            Sell on {shopOK}
          </p>
        </Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="hover:bg-white transition-all duration-500 ease-in-out p-2">
          <Help />
        </div>       
        <div className="hover:bg-white transition-all duration-500 ease-in-out p-2">
        <Login />
        </div>
        <Cart />
      </div>
    </nav>
  );
};

export default Nav;
