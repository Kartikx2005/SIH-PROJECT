import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#337ab7] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 text-sm">
          <Link href="/event-calendar" className="text-white hover:underline font-bold">Event Calendar</Link>
          <span className="mx-1">|</span>
          <Link href="/terms" className="text-white hover:underline font-bold">Terms & Conditions</Link>
          <span className="mx-1">|</span>
          <Link href="/policies" className="text-white hover:underline font-bold">Website Policies</Link>
          <span className="mx-1">|</span>
          <Link href="/help" className="text-white hover:underline font-bold">Help</Link>
          <span className="mx-1">|</span>
          <Link href="/sitemap" className="text-white hover:underline font-bold">Site map</Link>
          <span className="mx-1">|</span>
          <Link href="/old-website" className="text-white hover:underline font-bold">Old Website</Link>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <div className="w-full sm:w-auto mb-3 sm:mb-0">
            <h3 className="font-bold mb-2 text-lg">Useful Links</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <Link href="/ccras" className="text-white hover:underline">CCRAS</Link>
              <Link href="/yoga" className="text-white hover:underline">Yoga</Link>
              <Link href="/pcimh" className="text-white hover:underline">PCIMH</Link>
              <Link href="/rav" className="text-white hover:underline">RAV</Link>
              <Link href="/aih" className="text-white hover:underline">AIH</Link>
            </div>
          </div>
          
          <div className="w-full sm:w-auto">
            <h3 className="font-bold mb-2 text-lg">Get Connected</h3>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook"><Facebook className="w-6 h-6" /></Link>
              <Link href="#" aria-label="Twitter"><Twitter className="w-6 h-6" /></Link>
              <Link href="#" aria-label="YouTube"><Youtube className="w-6 h-6" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="w-6 h-6" /></Link>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center border-t border-white pt-3">
          <div className="text-sm mb-2 text-center">
            <p><span className="font-bold">© Copyright Ministry of Ayush.</span> All Rights Reserved</p>
            <p>In house product</p>
          </div>
          <Image 
            src="/placeholder.svg?height=50&width=50" 
            width={50} 
            height={50} 
            className="rounded-full"
          />
        </div>
      </div>
    </footer>
  )
}