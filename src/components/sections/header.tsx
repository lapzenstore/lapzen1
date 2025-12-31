"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, Menu, X, Facebook, Instagram, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/cart-context";

const AnnouncementBar = () => {
  return (
    <div className="bg-[#002b5c] overflow-hidden py-2 px-4 relative flex items-center h-[36px]">
      <div className="flex-1 overflow-hidden relative">
        <div className="marquee-content whitespace-nowrap flex">
          {[...Array(10)].map((_, i) =>
          <span key={i} className="text-white text-[12px] font-medium inline-block mx-8">
              Get Free Delivery across all Pakistan!
            </span>
          )}
        </div>
      </div>
      <a
        href="#"
        className="text-white text-[12px] font-bold underline ml-4 hover:opacity-80 transition-opacity whitespace-nowrap z-10">

        Shop now!
      </a>
    </div>);

};

const Header = () => {
  const { itemCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setScrolled(currentScrollY > 20);

        if (currentScrollY > lastScrollY && currentScrollY > 150) {
          setVisible(false);
        } else {
          setVisible(true);
        }

        setLastScrollY(currentScrollY);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setIsMobileMenuOpen(false);
        }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

      return (
          <div className={cn(
            "fixed top-0 z-50 w-full transition-all duration-500 transform",
            mounted && !visible ? "-translate-y-full" : "translate-y-0"
          )}>
            <div className={cn(mounted && scrolled ? "hidden" : "block")}>
              <AnnouncementBar />
            </div>
      
            <header className={cn(
              "transition-all duration-300 flex items-center border-b border-black/5",
              mounted && scrolled ? 
                "h-[65px] bg-white shadow-sm" : 
                "h-[80px] lg:h-[90px] bg-white"
            )}>


        <div className="container mx-auto px-5 lg:px-8 max-w-[1200px] flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-slate-900"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu">

              <Menu size={24} />
            </button>
            <Link href="/" className="flex items-center gap-2 group transition-all hover:scale-105 active:scale-95">
                    <div className="bg-white p-1 rounded-lg shadow-sm flex items-center justify-center border border-slate-100">
                        <Image
                          src="/logo.png"
                          alt="Lapzen Logo"
                          width={40}
                          height={40}
                          className="h-10 w-10 object-contain"
                          priority />
                    </div>
              <span className="text-2xl font-bold tracking-tighter text-navy">Lapzen</span>
            </Link>
          </div>

            <nav className="hidden lg:flex items-center gap-8 ml-8 flex-1">
              <Link href="/" className="nav-link text-slate-900 text-[14px] font-semibold hover:text-blue-700 transition-colors">
                Home
              </Link>
                <Link href="/catalog" className="nav-link text-slate-900 text-[14px] font-semibold hover:text-blue-700 transition-colors">
                  Catalog
                </Link>
              <Link href="/collections" className="nav-link text-slate-900 text-[14px] font-semibold hover:text-blue-700 transition-colors">
                Collections
              </Link>
                <Link href="/contact-us" className="nav-link text-slate-900 text-[14px] font-semibold hover:text-blue-700 transition-colors">
                  Contact
                </Link>
                <Link href="/about" className="nav-link text-slate-900 text-[14px] font-semibold hover:text-blue-700 transition-colors">
                  About
                </Link>
              </nav>

            <div className="flex items-center gap-4 lg:gap-6">
              <div className="hidden lg:flex items-center gap-3 border-r border-black/10 pr-6 mr-2">
                  <a
                    href="https://web.facebook.com/lap.lapzen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-gradient-to-tr hover:from-[#002b5c] hover:to-[#ff0000] hover:text-white hover:shadow-[0_0_15px_rgba(0,43,92,0.4)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">

                    <Facebook size={16} fill="currentColor" strokeWidth={0} />
                  </a>
                  <a
                    href="https://www.instagram.com/lapzenstore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-gradient-to-tr hover:from-[#002b5c] hover:to-[#ff0000] hover:text-white hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">

                    <Instagram size={16} />
                  </a>
                  <a
                    href="https://x.com/lapzenstore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-gradient-to-tr hover:from-[#002b5c] hover:to-[#ff0000] hover:text-white hover:shadow-[0_0_15px_rgba(0,43,92,0.4)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">

                    <Twitter size={16} fill="currentColor" strokeWidth={0} />
                  </a>

              </div>


            <div className="flex items-center gap-4 lg:gap-5">
              <Link href="/search" className="text-slate-900 hover:text-blue-700 transition-colors" aria-label="Search">
                <Search size={22} />
              </Link>
                  <Link href="/cart" className="text-slate-900 hover:text-blue-700 transition-colors relative" aria-label="Shopping cart">
                    <ShoppingCart size={22} />
                    <span className={cn(
                      "absolute -top-2 -right-2 bg-[#ff0000] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in duration-300",
                      (!mounted || itemCount === 0) && "hidden"
                    )}>
                      {itemCount}
                    </span>
                  </Link>

            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen &&
      <div className="fixed inset-0 z-[100] lg:hidden">
          <div
          className="absolute inset-0 bg-white"
          onClick={() => setIsMobileMenuOpen(false)} />

            <div className="absolute top-0 left-0 w-full h-full bg-white text-[#00172E] flex flex-col transition-transform duration-500 ease-out">
              <div className="p-6 flex items-center justify-between border-b border-slate-100">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="bg-white p-1.5 rounded-xl flex items-center justify-center border border-slate-100 shadow-sm">
                        <Image
                          src="/logo.png"
                          alt="Lapzen Logo"
                          width={32}
                          height={32}
                          className="h-8 w-8 object-contain"
                        />
                      </div>
                    <span className="text-2xl font-bold tracking-tight text-[#00172E]">Lapzen</span>
                  </Link>

                <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#00172E] hover:opacity-70 transition-colors">

                  <X size={28} />
                </button>
              </div>
              
              <nav className="flex flex-col py-8">
                <Link
                href="/"
                className="px-8 py-5 text-[#00172E] text-[18px] font-bold border-b border-slate-50 hover:bg-slate-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}>

                  Home
                </Link>
                  <Link
                href="/catalog"
                className="px-8 py-5 text-[#00172E] text-[18px] font-bold border-b border-slate-50 hover:bg-slate-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}>

                    Catalog
                  </Link>
                <Link
                href="/collections"
                className="px-8 py-5 text-[#00172E] text-[18px] font-bold border-b border-slate-50 hover:bg-slate-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}>

                  Collections
                </Link>
                    <Link
                href="/contact-us"
                className="px-8 py-5 text-[#00172E] text-[18px] font-bold border-b border-slate-50 hover:bg-slate-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}>

                      Contact
                    </Link>
                    <Link
                href="/about"
                className="px-8 py-5 text-[#00172E] text-[18px] font-bold border-b border-slate-50 hover:bg-slate-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}>

                      About
                    </Link>
                  </nav>

                  <div className="mt-auto p-8 flex items-center gap-6 border-t border-slate-100">
                    <a
                      href="https://web.facebook.com/lap.lapzen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-[#00172E] hover:bg-gradient-to-tr hover:from-[#002b5c] hover:to-[#ff0000] hover:text-white hover:shadow-[0_0_15px_rgba(0,43,92,0.4)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">

                      <Facebook size={20} fill="currentColor" strokeWidth={0} />
                    </a>
                    <a
                      href="https://www.instagram.com/lapzenstore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-[#00172E] hover:bg-gradient-to-tr hover:from-[#002b5c] hover:to-[#ff0000] hover:text-white hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">

                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://x.com/lapzenstore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-[#00172E] hover:bg-gradient-to-tr hover:from-[#002b5c] hover:to-[#ff0000] hover:text-white hover:shadow-[0_0_15px_rgba(0,43,92,0.4)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">

                      <Twitter size={20} fill="currentColor" strokeWidth={0} />
                    </a>
                  </div>


            </div>
        </div>
      }
    </div>);

};

export default Header;
