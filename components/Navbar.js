"use client"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {List, ItemLinks} from "@/components/Oferta";
import {links} from "@/data/oferta";
// import { Inter } from "next/font/google";


export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMenu = () => setIsMenuOpen(false)
    // telefon full-screen menu
    // komp rozwijane menu
    return(
        <nav 
        className='pt-4 flex justify-between items-center min-h-12 px-8 text-[24px]'>
            <h1 className="relative z-10 font-mono">Moto<label className="text-[#e24b4a]">Strefa</label></h1>
            {/* <img src="/logo.jpg" alt="Logo" className="h-10 w-10"/> */}
            <div className="group relative flex">
    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:pointer-events-none">
        <div className="relative z-10 flex md: text-xl items-center">
            {isMenuOpen ? <X/> : <Menu/>}
        </div>
    </button>

    {/* MOBILE: fullscreen, klik steruje isMenuOpen */}
    {isMenuOpen && (
        <div className="backdrop-blur-[25px]  md:hidden fixed inset-0 flex flex-col items-center justify-center">
            <List list={links} ItemComponent={ItemLinks} onClose={closeMenu}/>
            <div className="w-9 h-0.5 bg-[#e24b4a] mb-8"></div>      
            <a className="text-sm text-white/60">+48 123 456 789</a>      
        </div>
    )}
    {/* DESKTOP: dropdown, hover steruje CSS-em, zero JS */}
    <div className="absolute top-[-9] right-5 flex flex-col
                opacity-0 invisible -translate-y-2
                md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0
                transition-all duration-200">
        <List list={links} ItemComponent={ItemLinks} onClose={closeMenu}/>
    </div>
</div>
        </nav>
    )
}

