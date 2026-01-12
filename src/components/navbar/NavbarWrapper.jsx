"use client";
import React from 'react'
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

function NavbarWrapper() {
    const pathname = usePathname();

    const hideNavbarPaths = ['/login', '/signup' , '/about'];
    //const colorchange = ['/insights']

    if (hideNavbarPaths.includes(pathname)) {
        return null; // Do not render the navbar on these paths
    }
  return (
    <div className={pathname === '/insights' ? 'bg-white' : ''}>
      <Navbar />
    </div>
  )
}

export default NavbarWrapper
