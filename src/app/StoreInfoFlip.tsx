'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

export default function StoreInfoFlip() {
  const [flipped, setFlipped] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setFlipped(f => !f), 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full h-full [perspective:1000px]">
      <div className={`absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
        <div className="absolute inset-0 [backface-visibility:hidden] flex flex-col items-center">
          <Image
            src="/images/mobile/mobile_mapinfo_open.png"
            alt="Store Info (Open)"
            width={300}
            height={400}
            className="object-cover rounded-sm"
          />
          <p className="text-gray-700 text-sm mt-2">Store Info (Open)</p>
        </div>
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center">
          <Image
            src="/images/mobile/mobile_mapinfo_closed.png"
            alt="Store Info (Closed)"
            width={300}
            height={400}
            className="object-cover rounded-sm"
          />
          <p className="text-gray-700 text-sm mt-2">Store Info (Closed)</p>
        </div>
      </div>
    </div>
  );
} 