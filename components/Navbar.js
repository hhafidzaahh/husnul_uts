'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa'; // ikon hamburger & close

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
     <div className="navbar-top">
  <div className="logo">CV Online</div>
  <div className="menu-icon" onClick={toggleMenu}>
    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
  </div>
</div>


      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link href="/" className={pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
        <li><Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About</Link></li>
        <li><Link href="/portofolio" className={pathname === '/portofolio' ? 'active' : ''} onClick={closeMenu}>Portofolio</Link></li>
        <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link></li>
        <li><Link href="/chatbot" className={pathname === '/chatbot' ? 'active' : ''} onClick={closeMenu}>Chatbot</Link></li>
        <li className="theme-toggle"><ThemeToggle /></li>
      </ul>
    </nav>
  );
}
