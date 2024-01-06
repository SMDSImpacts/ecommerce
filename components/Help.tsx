import Link from "next/link";
import { ChevronDownIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

const Help = () => {
  return (
    <div className="flex transition-all ease-in-out duration-300 hover:bg-white hover:text-700 dropdown">
      <button className="flex gap-x-0.5 hover:text-red-700">
        <QuestionMarkCircleIcon className="h-6 w-6" />
        <p className="text-[12px] mt-1">Help</p>
        <ChevronDownIcon className="h-4 w-4 mt-2"/>        
      </button>           
      <div className="dropdown-content transition-all ease-in-out duration-700 text-[12px] font-medium">
        <a href='/FAQ'>FAQ</a>
        <a href='/ContactUs'>Contact Us</a>
        <a href='/Track'>Track My Order</a>
        <a href='/RetPol'>ShopOK return policy</a>
      </div>
    </div>
    )
};

export default Help;
