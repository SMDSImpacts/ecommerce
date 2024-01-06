'use client'

import { SwiperComp, AdsCard1 } from "@/components";


const Home: React.FC = () => {
  return (
    <div className="p-6 container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 p-4">
        <SwiperComp />
        </div>
        <div className="col-span-1 bg-yellow-500 p-4">
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-1">
              <AdsCard1 />
              </div>
              <div className="col-span-4">
              <AdsCard1 />
              </div>             
            </div>
          </div>
        </div>
        <div className="co-span-1 bg-red-500 p-4">
          Column 4
        </div>
      </div>
      
    </div>
  );
};

export default Home;
