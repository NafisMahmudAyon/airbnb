'use client'
import { Globe, Menu, Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LogoIcon } from "./icon";
import { cn } from "./utils/cn";

export default function Header() {
  const [activeNav, setActiveNav] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number } | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [dates, setDates] = useState({ checkIn: "", checkOut: "" });
  const [isOpenCheckIn, setIsOpenCheckIn] = useState(false);

  // Scroll shrink effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-[linear-gradient(180deg,#ffffff_39.9%,#f8f8f8_100%)] shadow-sm z-[51] transition-all">
      <div
        className={`hidden md:flex items-center justify-center px-6 relative min-h-20 ${scrolled ? "py-2" : "pt-2 pb-10 "
          }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 text-[#FF385C] absolute left-6 top-6">
          <LogoIcon />
        </div>

        {/* Search Bar */}
        <div
          className={`flex gap-3 items-center justify-center transition-all duration-300 max-w-[850px] w-full ${scrolled ? "" : "flex-col"
            }`}
        >
          {scrolled ? (
            <div className="relative grid grid-cols-[1.5fr_1fr_1.5fr] border border-border transition-all duration-300 max-w-[850px] rounded-full bg-white shadow-lg overflow-hidden px-2 h-11.5">
              <div className="text-sm text-text font-medium flex items-center pl-2">
                <Image src={activeNav === 0 ? "/home.avif" : activeNav === 1 ? "/experience.avif" : "/service.avif"} alt="Home" width={240} height={216} className="w-9 h-9" />
                Anywhere</div>
              <div className="text-sm text-text font-medium flex items-center relative z-30 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:w-[1px] after:h-8 after:bg-gray-300 pl-4">Anytime</div>
              <div className="flex items-center relative z-30 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:w-[1px] after:h-8 after:bg-gray-300 pl-4">
                <span className="text-sm text-text font-medium">Add guests</span>
                <button className="bg-[#FF385C] text-white p-2 rounded-full ml-2">
                  <Search size={18} />
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Nav above bar */}
              <div>
                <div className={cn("flex items-center gap-3 pb-2 transition-all duration-300", scrolled ? "hidden" : "")}> <span className={cn("flex items-center text-sm border-b-3 border-transparent cursor-pointer group", activeNav === 0 ? " border-text font-semibold text-text" : "text-text-muted")} onClick={() => { setActiveNav(0) }}> <Image src="/home.avif" alt="Home" width={240} height={216} className={cn("w-18 h-18", activeNav !== 0 ? "group-hover:scale-110 transition-all duration-300" : "")} /> Homes </span> <span className={cn("flex items-center text-sm border-b-3 border-transparent cursor-pointer group", activeNav === 1 ? " border-text font-semibold text-text" : "text-text-muted")} onClick={() => { setActiveNav(1) }}> <Image src="/experience.avif" alt="Experience" width={240} height={216} className={cn("w-18 h-18", activeNav !== 1 ? "group-hover:scale-110 transition-all duration-300" : "")} /> Experiences</span> <span className={cn("flex items-center text-sm border-b-3 border-transparent cursor-pointer group", activeNav === 2 ? " border-text font-semibold text-text" : "text-text-muted")} onClick={() => { setActiveNav(2) }}> <Image src="/service.avif" alt="Service" width={240} height={216} className={cn("w-18 h-18", activeNav !== 2 ? "group-hover:scale-110 transition-all duration-300" : "")} /> Services</span>
                </div>
              </div>

              {/* Search box with hover background */}
              <div
                className={cn(
                  "relative grid grid-cols-[1.5fr_1fr_1fr_1.5fr] border border-border transition-all duration-300 max-w-[850px] rounded-full bg-white shadow-lg overflow-hidden",
                  scrolled ? "px-4 py-2" : "w-full"
                )}
              >
                {/* Sliding background */}
                {indicatorStyle && (
                  <span
                    className="absolute top-0 left-0 h-full bg-gray-200 rounded-full transition-all duration-300 ease-in-out z-10"
                    style={{
                      left: indicatorStyle.left,
                      width: indicatorStyle.width,
                    }}
                  />
                )}

                {/* Where */}
                <div
                  ref={(el) => (itemsRef.current[0] = el)}
                  onMouseEnter={() => {
                    const el = itemsRef.current[0];
                    if (el) setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth });
                  }}
                  onMouseLeave={() => setIndicatorStyle(null)}
                  className="flex flex-col cursor-pointer justify-center px-3 py-2 relative z-30 pl-7"
                >
                  <span className="text-[12px] text-text font-medium">Where</span>
                  <span className="text-sm text-text-muted">Search destinations</span>
                </div>

                {/* Check in */}
                <div
                  ref={(el) => (itemsRef.current[1] = el)}
                  onMouseEnter={() => {
                    const el = itemsRef.current[1];
                    if (el) setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth });
                  }}
                  onMouseLeave={() => setIndicatorStyle(null)}
                    className="flex flex-col cursor-pointer pl-8 justify-center px-3 py-2 relative z-30 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:w-[1px] after:h-8 after:bg-gray-300"
                >
                  <span className="text-[12px] text-text font-medium">Check in</span> <span className="text-sm text-text-muted">Add dates</span>
                </div>

                {/* Check out */}
                <div
                  ref={(el) => (itemsRef.current[2] = el)}
                  onMouseEnter={() => {
                    const el = itemsRef.current[2];
                    if (el) setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth });
                  }}
                  onMouseLeave={() => setIndicatorStyle(null)}
                  className="flex flex-col cursor-pointer pl-8 justify-center px-3 py-2 relative z-30 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:w-[1px] after:h-8 after:bg-gray-300"
                >
                  <span className="text-[12px] text-text font-medium">Check out</span>
                  <span className="text-sm text-text-muted">Add dates</span>
                </div>

                {/* Who */}
                <div
                  ref={(el) => (itemsRef.current[3] = el)}
                  onMouseEnter={() => {
                    const el = itemsRef.current[3];
                    if (el) setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth });
                  }}
                  onMouseLeave={() => setIndicatorStyle(null)}
                  className="flex items-center cursor-pointer pl-7 justify-between py-2 relative z-30 pr-2 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:w-[1px] after:h-8 after:bg-gray-300"
                >
                  <span>
                    <span className="text-[12px] text-text font-medium">Who</span>
                    <span className="flex items-center text-sm text-text-muted">Add guests</span>
                  </span>
                  <button className="bg-[#FF385C] text-white aspect-square h-full flex items-center justify-center rounded-full ml-2">
                    <Search size={18} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Side Icons */}
        <div className="absolute right-6 top-6 flex items-center gap-4">
          <button className="p-3 bg-[#F2F2F2] hover:bg-[#EBEBEB] rounded-full transition-all duration-300"><Globe size={18} /></button>
          <button className="p-3 bg-[#F2F2F2] hover:bg-[#EBEBEB] rounded-full transition-all duration-300"><Menu size={18} /></button>
        </div>
      </div>
      <div className="md:hidden grid gap-1">
        <div className="flex items-center gap-2 justify-center py-4 text-sm font-medium mx-8 bg-white rounded-full border border-border/50 shadow-lg my-3">
          <Search size={14} /> Start your search
        </div>
        <div className={cn("flex items-center gap-3 transition-all duration-300 justify-around mx-8")}>
          <span className={cn("flex items-center text-[12px] border-b-3 border-transparent cursor-pointer flex-col", activeNav === 0 ? " border-text font-semibold text-text" : "text-text-muted")} onClick={() => { setActiveNav(0) }}>
            <Image src="/home.avif" alt="Home" width={240} height={216} className={cn("w-16 h-16", scrolled && "hidden")} />
            Homes
          </span>
          <span className={cn("flex items-center text-[12px] border-b-3 border-transparent cursor-pointer flex-col", activeNav === 1 ? " border-text font-semibold text-text" : "text-text-muted")} onClick={() => { setActiveNav(1) }}>
            <Image src="/experience.avif" alt="Experience" width={240} height={216} className={cn("w-16 h-16", scrolled && "hidden")} />
            Experiences
          </span>
          <span className={cn("flex items-center text-[12px] border-b-3 border-transparent cursor-pointer flex-col", activeNav === 2 ? " border-text font-semibold text-text" : "text-text-muted")} onClick={() => { setActiveNav(2) }}>
            <Image src="/service.avif" alt="Service" width={240} height={216} className={cn("w-16 h-16", scrolled && "hidden")} />
            Services
          </span>
        </div>
      </div>
    </header>
  );
}
