import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/identity-logo.svg';

/**
 * Header Component — fixed: cross (X) visibility robust
 */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((s) => !s);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/Work' },
    { label: 'Who We Are', href: '/WhoWeAre' },
    { label: 'Article', href: '/Article' },
    { label: 'Contact', href: '/Contact' },
  ];

  // custom cursor (keeps your original)
  const cursorStyle =
    'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 16 16\'%3E%3Ccircle cx=\'8\' cy=\'8\' r=\'8\' fill=\'white\'/%3E%3C/svg%3E") 8 8, auto';

  return (
    <>
    <br></br>
      <nav
        className="w-full z-50 border-b border-white/5 px-8 sm:px-10 py-2 sm:py-3 flex justify-between items-center font-clash text-white transition-colors duration-300"
        style={{ cursor: cursorStyle }}
      >
        {/* Logo */}
        <a
          href="#"
          className="z-50 block w-28 sm:w-32 md:w-[240px] relative h-[50px] sm:h-[50px]"
          aria-hidden={isMenuOpen}
        >
          <img
            src={logo}
            alt="Identity"
            className={`absolute inset-0 w-full h-full object-contain object-left transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            src={logo}
            alt="Identity"
            className={`absolute inset-0 w-full h-full object-contain object-left transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </a>

        {/* Center trigger */}
        <button
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          // make sure this sits on top of everything and is easy to click
          style={{ cursor: cursorStyle, zIndex: 9999 }}
          className="absolute left-1/2 top-[4rem] -translate-x-[25px] -translate-y-1/2 p-2.5 sm:p-3 flex items-center justify-center"
        >
          <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
            {/* 4-dots (hidden when open) */}
            <div
              aria-hidden={isMenuOpen}
              className={`grid grid-cols-2 gap-3 transition-all duration-300 transform ${
                isMenuOpen ? 'opacity-0 scale-75 -rotate-12' : 'opacity-100 scale-100 rotate-0'
              }`}
            >
              <div className="w-1 h-1 bg-white rounded-full" />
              <div className="w-1 h-1 bg-white rounded-full" />
              <div className="w-1 h-1 bg-white rounded-full" />
              <div className="w-1 h-1 bg-white rounded-full" />
            </div>

            {/* X (visible when open) — high z and guaranteed white stroke */}
            <div
              aria-hidden={!isMenuOpen}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform text-white`}
              style={{
                zIndex: 10000,
                // toggle opacity and scale for animation
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0) scale(1)' : 'translateY(-4px) scale(0.85)',
                pointerEvents: isMenuOpen ? 'auto' : 'none',
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block"
                aria-hidden="true"
                role="img"
              >
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </button>

        {/* Contact */}
        <Link
          to="/Contact"
          className="z-50 px-4 sm:px-6 md:px-4 py-1.5 md:py-2.5 rounded-[2.5em] border-[2px] border-white text-white font-semibold uppercase tracking-[-0.01em] text-[9px] sm:text-[10px] md:text-[18px] hover:bg-white hover:text-black transition-all duration-300"
        >
          Contact Now
        </Link>
      </nav>

      {/* Full screen overlay */}
      <div
        className={`bg-black fixed inset-0 z-40 flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8 px-5 sm:px-8 md:px-16 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] font-clash ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ cursor: cursorStyle }}
      >
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2 md:space-y-0 group/list">
            {menuItems.map((item, index) =>
              item.href.startsWith('/') ? (
                <Link
                  key={index}
                  to={item.href}
                  onClick={toggleMenu}
                  className="font-bold uppercase leading-none text-white transition-all duration-300 group-hover/list:opacity-20 group-hover/list:blur-[1px] hover:!opacity-100 hover:!blur-none relative text-[28px] xs:text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px]"
                >
                  {item.label}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="grid grid-cols-2 gap-1.5">
                    </div>
                  </div>
                </Link>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  onClick={toggleMenu}
                  className="font-bold uppercase leading-none text-white transition-all duration-300 group-hover/list:opacity-20 group-hover/list:blur-[1px] hover:!opacity-100 hover:!blur-none relative text-[28px] xs:text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px]"
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
            )}
          </div>
        </div>

       <div
  className="w-full border-top border-white/10 pt-4 sm:pt-6"
  style={{
    fontFamily: `"Clash Display", "Clash Display Placeholder", sans-serif`,
    fontSize: "18px",
    fontWeight: 700,
  }}
>
  <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
    
    <p className="tracking-[0.25em] uppercase text-white/70">
      ©2024 All Rights Reserved
    </p>

    <div className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-10 tracking-[0.25em] uppercase">
      {["Instagram", "Dribbble", "Twitter"].map((social) => (
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
