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
        className='pt-2 flex justify-between items-center min-h-12 px-4'>
            <h1 className="relative z-10 font-mono">Moto<label className="text-[#e24b4a]">Strefa</label></h1>
            {/* <img src="/logo.jpg" alt="Logo" className="h-10 w-10"/> */}
            <div className="group relative flex">
    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:pointer-events-none">
        <div className="relative z-10 flex">
            {isMenuOpen || <span>MENU</span>}
            {isMenuOpen ? <X/> : <Menu/>}
        </div>
    </button>

    {/* MOBILE: fullscreen, klik steruje isMenuOpen */}
    {isMenuOpen && (
        <div className="backdrop-blur-sm  md:hidden fixed inset-0 flex flex-col items-center justify-center">
            <List list={links} ItemComponent={ItemLinks} onClose={closeMenu}/>
        </div>
    )}
    {/* DESKTOP: dropdown, hover steruje CSS-em, zero JS */}
    <div className="hidden md:group-hover:flex absolute top-full right-0">
        <List list={links} ItemComponent={ItemLinks} onClose={closeMenu}/>
    </div>
</div>
        </nav>
    )
}

