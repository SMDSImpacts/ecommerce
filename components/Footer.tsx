import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="flex gap-7 ml-24 pb-6">
        {footerLinks.map((item) => (
          <div key={item.title} className="">
            <p className="text-[13px] font-bold text-gray-400 mt-6 mb-2">{item.title}</p>
            <div className="flex flex-col mx-1">
              {item.links.map((link) => (
                <Link href={link.url}
                  key={link.title}                  
                  className="text-gray-500 text-[13px] my-1 hover:text-white"
                >
                  {link.title}
                </Link>
              ))}
            </div>            
          </div>
        ))}        
      </div>
      <div>
        <p>Copyright &nbs;copy </p>
      </div>      
    </footer>
  )
};

export default Footer;
