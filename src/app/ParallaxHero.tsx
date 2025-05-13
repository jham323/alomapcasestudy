'use client'

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
import { ChevronDown, Download } from 'lucide-react';

export default function ParallaxHero() {
  return (
    <ParallaxProvider>
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Parallax speed={-20} className="absolute inset-0 z-0">
          <Image
            src="/images/AloStoreList.png"
            alt="Alo Yoga Store List Parallax"
            fill
            style={{ objectFit: 'cover', opacity: 0.25 }}
            priority
          />
        </Parallax>
        <div className="absolute inset-0 bg-[#f7f7f7] z-0">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#000000" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
              Alo Yoga Interactive Store Locator
            </h1>
            <p className="text-xl md:text-2xl text-white opacity-80 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
              Transforming a static list into a dynamic, map-based experience for discovering Alo Yoga retail locations.
            </p>
            <div className="flex justify-center gap-4 animate-fade-in-delay-2">
              <a
                href="#overview"
                className="px-6 py-3 bg-black text-white rounded-sm hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                Explore Case Study <ChevronDown className="h-4 w-4" />
              </a>
              <a
                href="#download"
                className="px-6 py-3 border border-black rounded-sm hover:bg-white hover:text-black transition-colors flex items-center gap-2"
              >
                Download PDF <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>
    </ParallaxProvider>
  );
} 