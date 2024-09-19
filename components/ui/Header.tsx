'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2 text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0">
            <img src="/images/2.jpg" alt="India.gov.in logo" className="h-6 sm:h-8" />
            <span className="text-center sm:text-left">support-moayush[at]nic[dot]in</span>
            <span>011 24648354</span>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end items-center space-x-2 sm:space-x-4">
            <button className="hover:underline text-xs sm:text-sm">Screen Reader Access</button>
            <button className="hover:underline text-xs sm:text-sm">Skip to main Content</button>
            <div className="flex items-center space-x-2">
              <button className="font-bold">A+</button>
              <button>A</button>
              <button>A-</button>
            </div>
            <button className="hover:underline">हिन्दी</button>
          </div>
        </div>
      </div>
      <nav className="bg-[#f8f9fa] py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/images/1.jpg" alt="Ministry of Ayush logo" className="h-12 sm:h-16" />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/services" className="hover:text-blue-600">Services</Link>
              <div className="relative group">
                <button className="hover:text-blue-600">Schemes</button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg hidden group-hover:block">
                  {/* Add dropdown items here */}
                </div>
              </div>
              <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
              <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
            </div>
            <button 
              className="md:hidden z-50" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden flex items-center justify-center">
          <div className="bg-white w-4/5 max-w-md h-3/4 max-h-[600px] rounded-lg shadow-lg relative overflow-y-auto">
            <button 
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col p-6 space-y-6 mt-12">
              <Link href="/" className="hover:text-blue-600 text-xl font-medium border-b pb-3" onClick={toggleMenu}>Home</Link>
              <Link href="/about" className="hover:text-blue-600 text-xl font-medium border-b pb-3" onClick={toggleMenu}>About</Link>
              <Link href="/services" className="hover:text-blue-600 text-xl font-medium border-b pb-3" onClick={toggleMenu}>Services</Link>
              <button className="hover:text-blue-600 text-xl font-medium text-left border-b pb-3">Schemes</button>
              <Link href="/contact" className="hover:text-blue-600 text-xl font-medium border-b pb-3" onClick={toggleMenu}>Contact Us</Link>
              <Link href="/dashboard" className="hover:text-blue-600 text-xl font-medium" onClick={toggleMenu}>Dashboard</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}