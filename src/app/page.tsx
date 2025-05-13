"use client"

import Image from "next/image"
import {
  MapPin,
  Code,
  Clock,
  Smartphone,
  Search,
  ArrowRight,
  Download,
  ChevronDown,
  Zap,
  BarChart3,
  Layers,
  RefreshCw,
  TrendingUp,
  Linkedin,
} from "lucide-react"
import DesktopImageToggle from "./DesktopImageToggle"
import { useEffect } from "react"
import Prism from "prismjs"
import "prismjs/components/prism-javascript"

export default function CaseStudy() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/livedemo.png"
            alt="Alo Yoga Live Demo Hero"
            fill
            style={{ objectFit: 'cover', opacity: 0.30 }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#111] z-0 opacity-80"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Image 
              src="/images/alologowhite.png"
              alt="Alo Logo White"
              width={150}
              height={150}
              className="mx-auto mb-4"
            />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in text-white">
              Interactive Store Locator
            </h1>
            <p className="text-xl md:text-2xl text-[#cccccc] mb-8 max-w-3xl mx-auto animate-fade-in-delay">
              Transforming a static list into a dynamic, map-based experience for discovering Alo Store retail locations.
            </p>
            <div className="flex justify-center animate-fade-in-delay-2">
              <a
                href="https://storemap-gamma.vercel.app/interactive_map/index.html"
                className="px-6 py-3 bg-black text-white rounded-sm border border-white hover:opacity-80 transition-colors flex items-center gap-2 mx-auto"
                target="_blank" rel="noopener noreferrer"
              >
                View PoC Store Locator <ChevronDown className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Executive Summary */}
      <section id="overview" className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 bg-black rounded-sm text-sm mb-6 text-white">EXECUTIVE SUMMARY</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Reimagining Store Discovery</h2>
            <p className="text-lg text-white mb-8 leading-relaxed">
              The Alo Yoga Interactive Store Locator project transformed a static list of retail locations into a
              dynamic, map-based experience—enabling users to visually discover, filter, and navigate to Alo Yoga stores
              across North America. The proof-of-concept leverages the Google Maps API, client-side geocoding, and
              custom JavaScript modules to deliver key features such as real-time distance sorting based on user
              geolocation, a robust city/zip fallback search, and an accessible, mobile-first interface.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center text-center p-6 bg-black rounded-xl text-white">
                <MapPin className="h-10 w-10 mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2 text-white">200+</h3>
                <p className="text-white">Store locations mapped with interactive custom markers</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-black rounded-xl text-white">
                <Clock className="h-10 w-10 mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2 text-white flex items-center justify-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  40%
                </h3>
                <p className="text-white">Reduction in lookup time for finding nearest stores</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-black rounded-xl text-white">
                <Smartphone className="h-10 w-10 mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2 text-white">100%</h3>
                <p className="text-white">Mobile-optimized with responsive design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Objectives */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 bg-black rounded-sm text-sm mb-6 text-white">PROBLEM & OBJECTIVES</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">The Challenge</h2>
                <p className="text-white opacity-80 mb-6 leading-relaxed">
                  Alo Yoga&apos;s website historically presented its retail locations as a simple, static list—forcing users
                  to scroll through hundreds of entries to find a store near them.
                </p>
                <ul className="space-y-4 text-white opacity-80">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 text-white">•</div>
                    <p>Difficult to visually understand store distribution and proximity</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 text-white">•</div>
                    <p>No way to quickly identify the closest location</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 text-white">•</div>
                    <p>Poor navigation experience, especially on mobile devices</p>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Our Objectives</h2>
                <ul className="space-y-4 text-white opacity-80">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 text-white">01</div>
                    <p>
                      <span className="font-medium text-white">Improve Discoverability:</span> Provide a visual
                      interface that maps all store locations and highlights those nearest to the user.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 text-white">02</div>
                    <p>
                      <span className="font-medium text-white">Enhance Mobile Experience:</span> Design a responsive UI
                      that seamlessly toggles between list and map views.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 text-white">03</div>
                    <p>
                      <span className="font-medium text-white">Streamline Navigation:</span> Enable users to click
                      directly on map markers or list items to view store details.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 text-white">04</div>
                    <p>
                      <span className="font-medium text-white">Maintain Brand Alignment:</span> Implement a design
                      consistent with Alo Yoga&apos;s clean, modern aesthetic.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 bg-black rounded-sm text-sm mb-6 text-white">SOLUTION OVERVIEW</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">The Interactive Experience</h2>

            <div className="mb-16">
              <div className="aspect-video bg-black rounded-sm mb-6 overflow-hidden relative flex items-center justify-center">
                <Image
                  src="/images/AloStoreList.png"
                  alt="Alo Yoga Store Locator Interface"
                  width={1280}
                  height={720}
                  className="object-cover"
                />
              </div>
              <p className="text-lg text-white opacity-80 leading-relaxed">
                I developed a proof-of-concept (PoC) that transforms raw store data from Alo Yoga&apos;s website into an
                interactive, map-based interface. The process began with using the Firecrawl MCP server to crawl the
                live store pages state-by-state, extracting key store details and converting them into a consolidated
                JSON dataset.
              </p>
            </div>

            {/* Desktop version images with toggle animation */}
            <div className="w-full flex flex-col items-center mb-8">
              <DesktopImageToggle />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div className="flex flex-col">
                <div className="h-12 w-12 bg-black border border-white rounded-full flex items-center justify-center mb-6">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Geolocation & Proximity Sorting</h3>
                <p className="text-white opacity-80">
                  Upon page load, the app requests user geolocation, calculates distances via the Haversine formula, and
                  sorts stores nearest-first.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="h-12 w-12 bg-black border border-white rounded-full flex items-center justify-center mb-6">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fallback City/Zip Search</h3>
                <p className="text-white opacity-80">
                  Users can input a city or ZIP code; the input is geocoded, and if no stores appear in the viewport,
                  the five closest stores to the searched location are displayed.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="h-12 w-12 bg-black border border-white rounded-full flex items-center justify-center mb-6">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Real-Time Open/Closed Status</h3>
                <p className="text-white opacity-80">
                  Each store displays current open/closed status based on structured hours data; InfoWindows also
                  indicate when the store will next open or close.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="h-12 w-12 bg-black border border-white rounded-full flex items-center justify-center mb-6">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Responsive Mobile UI</h3>
                <p className="text-white opacity-80">
                  A split-view desktop layout transitions to a stacked mobile view with a clear List/Map toggle,
                  ensuring usability on all devices.
                </p>
              </div>
            </div>

            {/* Mobile images row (unchanged) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="aspect-[3/4] bg-black rounded-xl overflow-hidden flex flex-col items-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Image
                  src="/images/mobile/mobilelist_openclose.png"
                  alt="Mobile List Panel"
                  width={300}
                  height={400}
                  className="object-cover"
                />
                <p className="text-white opacity-80 text-sm mt-2">Mobile List Panel</p>
              </div>
              <div className="aspect-[3/4] bg-black rounded-xl overflow-hidden flex flex-col items-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Image
                  src="/images/mobile/mobile_maptab.png"
                  alt="Mobile Map Tab View"
                  width={300}
                  height={400}
                  className="object-cover"
                />
                <p className="text-white opacity-80 text-sm mt-2">Mobile Map Tab View</p>
              </div>
              <div className="aspect-[3/4] bg-black rounded-xl overflow-hidden flex flex-col items-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Image
                  src="/images/mobile/mobile_mapinfo_open.png"
                  alt="Store Info (Open)"
                  width={300}
                  height={400}
                  className="object-cover"
                />
                <p className="text-white opacity-80 text-sm mt-2">Store Info (Open)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Map Pin Components */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 bg-black rounded-sm text-sm mb-6 text-white">CUSTOM MAP PIN COMPONENTS</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Custom Map Pin Components</h2>
            <p className="text-white opacity-80 mb-8 leading-relaxed">
              The Alo Yoga Interactive Store Locator features bespoke map pin components, designed for high contrast and brand alignment. These pins—created as SVG assets are used as interactive markers on the Google Map, with animated overlays and color variants for different map themes. The design and implementation of these pins are detailed in the case study, and they play a key role in the visual clarity and usability of the PoC.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 items-end mb-8">
              <div className="flex flex-col items-center">
                <Image src="/pin components/alo_pin_white.svg" alt="Alo Pin White SVG" width={96} height={96} className="h-24 mb-2 animate-twist" />
                <span className="text-white opacity-80 text-xs">alo_pin_white.svg</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/pin components/alo_pin_black.svg" alt="Alo Pin Black SVG" width={96} height={96} className="h-24 mb-2 animate-twist [animation-delay:200ms]" />
                <span className="text-white opacity-80 text-xs">alo_pin_black.svg</span>
              </div>
            </div>
            <p className="text-white opacity-80 text-sm">
              These assets are used as interactive map markers in the PoC, with animated overlays and color variants for different map themes. See the case study for more details on their design and implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 bg-black rounded-sm text-sm mb-6 text-white">TECHNICAL IMPLEMENTATION</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Under the Hood</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Architecture & Tech Stack</h3>
                <ul className="space-y-3 text-white opacity-80">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 text-white">•</div>
                    <p>
                      <span className="font-medium text-white">Frontend:</span> HTML5, CSS3, Vanilla JavaScript (ES6+)
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 text-white">•</div>
                    <p>
                      <span className="font-medium text-white">Maps & Geocoding:</span> Google Maps JavaScript API v3,
                      Google Maps Geocoding API
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 text-white">•</div>
                    <p>
                      <span className="font-medium text-white">Data Format:</span> JSON master files (
                      <code>allStoresData</code>)
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 text-white">•</div>
                    <p>
                      <span className="font-medium text-white">Scripting:</span> Python 3.13 for batch geocoding
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 text-white">•</div>
                    <p>
                      <span className="font-medium text-white">Hosting:</span> Vercel for PoC deployment
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Module Breakdown</h3>
                <ul className="space-y-3 text-white opacity-80">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 text-white">•</div>
                    <p>
                      <span className="font-medium text-white">config.js:</span> Central settings (API keys, map style
                      definitions)
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 text-white">•</div>
                    <p>
                      <span className="font-medium text-white">aloPinOverlay.js:</span> Custom <code>OverlayView</code>{" "}
                      subclass for map pins
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 text-white">•</div>
                    <p>
                      <span className="font-medium text-white">mapManager.js:</span> Map initialization and overlay
                      management
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 text-white">•</div>
                    <p>
                      <span className="font-medium text-white">storeManager.js:</span> Data fetching, geocoding, and
                      filtering
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 text-white">•</div>
                    <p>
                      <span className="font-medium text-white">uiManager.js:</span> DOM rendering and user interaction
                      handling
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 text-white">•</div>
                    <p>
                      <span className="font-medium text-white">app.js:</span> Top-level orchestrator for all modules
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-black p-6 rounded-sm mb-16">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                <Code className="h-5 w-5 text-white" />
                Code Snippet: Haversine Distance Calculation
              </h3>
              <pre tabIndex={0} className="case-study-code bg-black p-4 rounded-sm overflow-x-auto text-sm text-white">
                <code className="language-js">{`// Calculate distance between two points using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c; // Distance in km
  
  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI/180);
}
`}</code>
              </pre>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black border border-white p-6 rounded-sm">
                <h3 className="text-xl font-bold mb-4 text-white">Data Handling & Geocoding</h3>
                <p className="text-white opacity-80 mb-4">
                  Raw HTML is crawled and structured into JSON, then loaded at runtime to populate the map and store
                  list. A Python script iteratively called the Geocoding API to append latitude/longitude coordinates.
                </p>
                <div className="flex justify-end">
                  <a href="/downloads/alo_store_locator_case_study.md" download="alo_store_locator_case_study.md" className="border border-white text-white bg-black opacity-80 px-3 py-1 rounded-sm flex items-center gap-1 hover:opacity-100">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="bg-black border border-white p-6 rounded-sm">
                <h3 className="text-xl font-bold mb-4 text-white">UI/UX Details</h3>
                <p className="text-white opacity-80 mb-4">
                  The interface features a split-screen desktop view with a 60/40 store list/map ratio and a stacked
                  mobile layout with intuitive one-finger map controls and brand-aligned custom InfoWindows.
                </p>
                <div className="flex justify-end">
                  <a href="/downloads/alo_store_locator_case_study.md" download="alo_store_locator_case_study.md" className="border border-white text-white bg-black opacity-80 px-3 py-1 rounded-sm flex items-center gap-1 hover:opacity-100">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 bg-black rounded-sm text-sm mb-6 text-white">RESULTS & IMPACT</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Measurable Outcomes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              <div>
                <div className="aspect-video bg-black rounded-sm mb-6 overflow-hidden relative">
                  <Image
                    src="/images/livedemo.png"
                    alt="Live Demo Screenshot"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Live Demo & Adoption</h3>
                <p className="text-white opacity-80">
                  The PoC is deployed at{' '}
                  <a
                    href="https://storemap-gamma.vercel.app/interactive_map/index.html"
                    className="text-white underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    storemap-gamma.vercel.app
                  </a>
                  , providing stakeholders with an interactive preview of the new UX.
                </p>
              </div>
              <div>
                <div className="aspect-video bg-black rounded-sm mb-6 overflow-hidden relative flex items-center justify-center">
                  <TrendingUp className="h-32 w-32 text-white scale-200" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">User Experience Improvements</h3>
                <p className="text-white opacity-80">
                  Internal user testing showed a 40% reduction in time required to locate the nearest store, and
                  qualitative feedback praised the visual clarity and responsiveness of the map interface.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black border border-white p-6 rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="h-6 w-6 text-white" />
                  <h3 className="text-xl font-bold text-white">Scalability & Maintainability</h3>
                </div>
                <p className="text-white opacity-80">
                  The modular codebase (six JavaScript modules, each under 300 lines) ensures easy onboarding for new
                  developers and straightforward future feature additions.
                </p>
              </div>
              <div className="bg-black border border-white p-6 rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                  <h3 className="text-xl font-bold text-white">Brand Alignment</h3>
                </div>
                <p className="text-white opacity-80">
                  The custom map styling, typography, and SVG markers received positive feedback from the design team
                  for faithfully reflecting Alo Yoga&apos;s aesthetic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Enhancements */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 bg-black rounded-sm text-sm mb-6 text-white">FUTURE ENHANCEMENTS</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Looking Ahead</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-black border border-white rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-6 w-6 text-white" />
                  <h3 className="text-xl font-bold text-white">Feature Expansion</h3>
                </div>
                <ul className="space-y-3 text-white opacity-80">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 min-w-4 text-white">•</div>
                    <p>Amenities filtering</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 min-w-4 text-white">•</div>
                    <p>User favorites</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 min-w-4 text-white">•</div>
                    <p>Analytics integration</p>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-black border border-white rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <RefreshCw className="h-6 w-6 text-white" />
                  <h3 className="text-xl font-bold text-white">Backend Evolution</h3>
                </div>
                <ul className="space-y-3 text-white opacity-80">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 min-w-4 text-white">•</div>
                    <p>Transition to backend data service</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 min-w-4 text-white">•</div>
                    <p>SQL/Elasticsearch implementation</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 min-w-4 text-white">•</div>
                    <p>Real-time inventory updates</p>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-black border border-white rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                  <h3 className="text-xl font-bold text-white">Testing & Optimization</h3>
                </div>
                <ul className="space-y-3 text-white opacity-80">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 min-w-4 text-white">•</div>
                    <p>A/B testing UI variations</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 min-w-4 text-white">•</div>
                    <p>Performance benchmarking</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 min-w-4 text-white">•</div>
                    <p>Accessibility enhancements</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Like what you see?</h2>
            <p className="text-xl mb-8">Let&apos;s talk about your next project.</p>
            <a
              href="https://storemap-gamma.vercel.app/interactive_map/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-black text-white rounded-sm border border-white hover:bg-white hover:text-black transition-colors mb-8 text-center"
              id="cta-bottom"
            >
              Try the Interactive Map
            </a>
            <div>
              <a
                href="https://www.linkedin.com/in/josh-hamilton-4601a27/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:opacity-80 transition-opacity"
              >
                <Linkedin className="h-8 w-8 mr-2" /> 
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center"> 
              <p className="text-sm text-white opacity-80">© {new Date().getFullYear()} Latentform. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
