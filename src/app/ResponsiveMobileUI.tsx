'use client'

import Image from "next/image";
import StoreInfoFlip from "./StoreInfoFlip";

export default function ResponsiveMobileUI() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="aspect-[3/4] bg-black rounded-sm overflow-hidden relative flex flex-col items-center">
        <Image
          src="/images/mobile/mobilelist_openclose.png"
          alt="Mobile List View"
          width={300}
          height={400}
          className="object-cover"
        />
        <p className="text-white opacity-80 text-sm mt-2">Mobile List View</p>
      </div>
      <div className="aspect-[3/4] bg-black rounded-sm overflow-hidden relative flex flex-col items-center">
        <Image
          src="/images/mobile/mobile_maptab.png"
          alt="Mobile Map Tab View"
          width={300}
          height={400}
          className="object-cover"
        />
        <p className="text-white opacity-80 text-sm mt-2">Mobile Map Tab View</p>
      </div>
      <div className="aspect-[3/4] bg-black rounded-sm overflow-hidden relative flex flex-col items-center">
        <Image
          src="/images/mobile/mobile_mapinfo.png"
          alt="Store Detail View"
          width={300}
          height={400}
          className="object-cover"
        />
        <p className="text-white opacity-80 text-sm mt-2">Store Detail View</p>
      </div>
      <div className="aspect-[3/4] bg-black rounded-sm overflow-hidden relative flex flex-col items-center">
        <StoreInfoFlip />
      </div>
    </div>
  );
} 