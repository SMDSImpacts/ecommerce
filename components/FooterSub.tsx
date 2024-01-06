import { EnvelopeIcon, PhoneIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { EmailSend } from ".";

const shopok = "Shop'OK";
const FooterSub = () => {
  return (
    <div className="flex bg-gray-900 text-white">
      <div className="flex ml-24 my-3 gap-6">
        <div className="flex">
          <div>
            <button className=" rounded-full mr-2 bg-zinc-400  p-2 mt-1">
              <EnvelopeIcon className="h-4 w-4 z-20 fill-gray-500" />
            </button>            
          </div>
          <div>
            <p className="text-[13px] text-gray-300 hover:text-white">EMAIL SUPPORT</p>
            <Link href="/" className="text-[13px]">help@{shopok}.com</Link>
          </div>
        </div>
        <div className="flex">
          <div>
            <button className=" rounded-full mr-2 bg-zinc-400  p-2 mt-1">
              <PhoneIcon className="h-4 w-4 z-20 fill-gray-500" />
            </button>            
          </div>
          <div>
            <p className="text-[13px] text-gray-300 hover:text-white">PHONE SUPPORT</p>
            <Link href="/" className="text-[13px]">09029919596</Link>
          </div>
        </div>
        <div className="flex">
          <div>
            <button className=" rounded-full mr-2 bg-zinc-400  p-2 mt-1">
              <DevicePhoneMobileIcon className="h-4 w-4 z-20 fill-gray-500" />
            </button>            
          </div>
          <div>
            <p className="text-[13px] text-gray-300 hover:text-white">WHATSAPP</p>
            <Link href="/" className="text-[13px]">08173209771</Link>
          </div>
        </div>
      </div>
      <div className="ml-24 mt-2 gap-6">
      <div className="flex gap-6">          
          <div className="">
            <p className="text-[13px] text-gray-300 hover:text-white">GET LATEST DEALS</p>
            <Link href="/" className="text-[13px]">Our best promotions sent to your inbox</Link>
          </div>
          <div className="mt-1">
            <EmailSend />
          </div>
        </div>
      </div>
    </div>
  )
};

export default FooterSub;
