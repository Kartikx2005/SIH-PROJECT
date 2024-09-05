// components/Header.tsx
import Link from 'next/link'
import { Search } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-12">
        <div className="flex items-center justify-between py-2 text-sm">
          <div className="flex items-center space-x-4">
            
            <img src="/images/2.jpg" alt="India.gov.in logo" className="h-8" />
            <span>support-moayush[at]nic[dot]in</span>
            <span>011 24648354</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:underline">Screen Reader Access</button>
            <button className="hover:underline">Skip to main Content</button>
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
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/images/1.jpg" alt="Ministry of Ayush logo" className="h-16" />
              {/* <h1 className="text-xl font-bold">Ministry of Ayush</h1> */}
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/services" className="hover:text-blue-600">Services</Link>
              <div className="relative group">
                <button className="hover:text-blue-600">Schemes</button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg hidden group-hover:block">
                  {/* Add dropdown items here */}
                </div>
              </div>
              <div className="relative group">
                <button className="hover:text-blue-600">Media Corner</button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg hidden group-hover:block">
                  {/* Add dropdown items here */}
                </div>
              </div>
              <div className="relative group">
                <button className="hover:text-blue-600">Citizen Corner</button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg hidden group-hover:block">
                  {/* Add dropdown items here */}
                </div>
              </div>
              <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
              <button className="hover:text-blue-600">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </button>
              <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}