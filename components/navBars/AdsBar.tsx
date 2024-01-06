import Image from "next/image";
import Link from "next/link";

const AdsBar = () => {
  return (
  <nav className="flex pt-1 border border-sky-200 p-4 bg-gray-300">
    <div className="flex flex-1 justify-between">
      <Link
        href="/" className="hover:cursor-pointer mt-2"
      >
        <Image src="vercel.svg" alt="logo" width={70} height={50} />
      </Link>
    </div>
  </nav>
  );
};

export default AdsBar;
