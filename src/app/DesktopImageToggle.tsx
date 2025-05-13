"use client"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export default function DesktopImageToggle() {
  const [showMap, setShowMap] = useState(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-cycle every 6 seconds
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setShowMap((prev) => !prev), 6000)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [showMap])

  return (
    <div className="w-full max-w-3xl flex flex-col items-center">
      <div className="relative w-full aspect-video bg-black overflow-hidden">
        <Image
          src="/images/desktop_map.png"
          alt="Desktop Map View"
          width={600}
          height={338}
          className={`object-contain absolute inset-0 w-full h-full transition-opacity duration-500 ${showMap ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        />
        <Image
          src="/images/desktop_mapinfo.png"
          alt="Desktop Map Info Panel"
          width={600}
          height={338}
          className={`object-contain absolute inset-0 w-full h-full transition-opacity duration-500 ${showMap ? 'opacity-0 z-0' : 'opacity-100 z-10'}`}
        />
      </div>
    </div>
  )
} 