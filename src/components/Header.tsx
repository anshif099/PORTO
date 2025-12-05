import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/identity-logo.svg';

/**
 * Header Component
 * Features:
 * - Toggles between two Logo Images (Open vs Closed state)
 * - 4-dot menu trigger transforms/swaps with Closing X
 * - Full screen immersive overlay
 * - Clash Display Typography
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/Work' },
    { label: 'Who We Are', href: '/WhoWeAre' },
    { label: 'Article', href: '/Article' },
    { label: 'Contact', href: '/Contact' },
  ];

  return (
    <>
      {/* --- Main Navigation Bar --- */}
      <nav
        className="fixed top-0 w-full z-50 bg-[#050505] border-b border-white/5 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center font-clash text-white transition-colors duration-300"
        style={{
          cursor:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 16 16\'%3E%3Ccircle cx=\'8\' cy=\'8\' r=\'8\' fill=\'white\'/%3E%3C/svg%3E") 8 8, auto',
        }}
      >
        {/* LOGO: Toggles between two images based on menu state */}
        <a href="#" className="z-50 block w-28 sm:w-32 md:w-40 relative h-8 sm:h-10">
          {/* Image 1: Shown when menu is CLOSED (The Colorful Logo) */}
          <img
            src={logo}
            alt="Identity"
            className={`absolute inset-0 w-full h-full object-contain object-left transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {/* Image 2: Shown when menu is OPEN (The White Logo) */}
          <img
            src={logo}
            alt="Identity"
            className={`absolute inset-0 w-full h-full object-contain object-left transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </a>

        {/* CENTER TRIGGER: Toggles between 4-Dots and Closing X */}
        <button
          onClick={toggleMenu}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-50 p-3 sm:p-4 group"
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
            {/* 4-DOTS ICON (Visible when Closed) */}
            <div
              className={`grid grid-cols-2 gap-1.5 transition-all duration-300 transform ${
                isMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
              }`}
            >
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>

            {/* CLOSING X (Visible when Open) */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform ${
                isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </button>

        {/* Contact Button */}
        <Link
          to="/Contact"
          className="z-50 px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full border border-white text-white font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs md:text-sm hover:bg-white hover:text-black transition-all duration-300"
        >
          Contact Now
        </Link>
      </nav>

      {/* --- Full Screen Menu Overlay --- */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8 px-5 sm:px-8 md:px-16 bg-[#050505] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] font-clash ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{
          backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          cursor:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 16 16\'%3E%3Ccircle cx=\'8\' cy=\'8\' r=\'8\' fill=\'white\'/%3E%3C/svg%3E") 8 8, auto',
        }}
      >
        {/* Menu Links List */}
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2 md:space-y-0 group/list">
            {menuItems.map((item, index) => (
              item.href.startsWith('/') ? (
                <Link
                  key={index}
                  to={item.href}
                  onClick={toggleMenu}
                  className="
                    font-bold uppercase leading-none text-white
                    transition-all duration-300
                    group-hover/list:opacity-20 group-hover/list:blur-[1px]
                    hover:!opacity-100 hover:!blur-none relative
                    text-[28px] xs:text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px]
                  "
                >
                  {item.label}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-75" />
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-150" />
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-225" />
                    </div>
                  </div>
                </Link>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  onClick={toggleMenu}
                  className="
                    font-bold uppercase leading-none text-white
                    transition-all duration-300
                    group-hover/list:opacity-20 group-hover/list:blur-[1px]
                    hover:!opacity-100 hover:!blur-none relative
                    text-[28px] xs:text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px]
                  "
                >
                  {item.label}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-75" />
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-150" />
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-225" />
                    </div>
                  </div>
                </a>
              )
            ))}
          </div>
        </div>

        {/* Footer Info – copyright + socials */}
        <div className="w-full border-t border-white/10 pt-4 sm:pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white font-clash">
            {/* Left: copyright */}
            <p className="text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-white/70">
              ©2024 All Rights Reserved
            </p>

            {/* Right: social links */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-10 text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.25em] uppercase">
              {['Instagram', 'Dribbble', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex items-center gap-1 hover:text-gray-300 transition-colors"
                >
                  {social}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="sr-only">external link</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
