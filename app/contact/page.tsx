'use client'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from 'lucide-react'
import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/ui/Footer"
import {AIChatbotIcon} from "@/components/ui/chatbot"

export default function ContactUs() {
  function handleChatbotOpen(): void {
    throw new Error('Function not implemented.')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-blue-50">
      <Header />
      <main className="flex-grow p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-2">Contact Us</h1>
          <p className="text-xl text-blue-700">We're here to help. Feel free to reach out to us with your queries.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-lg">
            <CardHeader className="bg-green-100">
              <CardTitle className="text-green-800 text-xl flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Our Locations
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <p className="font-semibold mb-2">Ministry of Ayush</p>
                <p className="text-sm text-gray-600">Ayush Bhawan, B Block, GPO Complex, INA, New Delhi – 110023.</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2747398896454!2d77.20731431508364!3d28.5859001824368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2728f9c0d8b%3A0x1f5a0c0c5c7b8c1a!2sMinistry%20of%20AYUSH!5e0!3m2!1sen!2sin!4v1625641111111!5m2!1sen!2sin"
                  className="w-full h-48 mt-2 rounded-md"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div>
                <p className="font-semibold mb-2">Ayush NBCC Office</p>
                <p className="text-sm text-gray-600">Nbcc Central Courtyard Garden 1241-1340 Flats, Block B, East Kidwai Nagar, Kidwai Nagar, New Delhi, Delhi 110023.</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.6763454056!2d77.22308731508334!3d28.57465082444078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a00000000f%3A0xf0000000000000!2sAyush%20NBCC%20Office!5e0!3m2!1sen!2sin!4v1625641222222!5m2!1sen!2sin"
                  className="w-full h-48 mt-2 rounded-md"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardHeader className="bg-blue-100">
                <CardTitle className="text-blue-800 text-xl flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Web Information Manager
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="font-semibold">Ms. Kavita Garg, Joint Secretary</p>
                <p className="text-sm text-gray-600">Room No.-212, Ayush Bhawan, GPO Complex, New Delhi-110023.</p>
                <p className="mt-2 flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-green-600" />
                  <a href="tel:01124651938" className="text-blue-600 hover:underline">011-24651938</a>
                </p>
                <p className="mt-1 flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-green-600" />
                  <a href="mailto:webmanager-ayush@gov.in" className="text-blue-600 hover:underline">webmanager-ayush@gov.in</a>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader className="bg-green-100">
                <CardTitle className="text-green-800 text-xl flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  For General Queries
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-green-600" />
                  Toll-Free: <a href="tel:18001122002" className="text-blue-600 hover:underline ml-1">1800-11-22-02</a>
                </p>
                <p className="text-sm text-gray-600 ml-6">(9:00 AM to 5:30 PM, IST)</p>
                <p className="mt-2 flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-green-600" />
                  Phone: <a href="tel:01124651942" className="text-blue-600 hover:underline ml-1">011-24651942</a>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader className="bg-blue-100">
                <CardTitle className="text-blue-800 text-xl flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  For Website-Related Queries
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-green-600" />
                  Phone: <a href="tel:01124648354" className="text-blue-600 hover:underline ml-1">011-24648354</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Card className="bg-white shadow-lg">
          <CardHeader className="bg-green-100">
            <CardTitle className="text-green-800 text-xl">Contact Form</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input id="name" placeholder="Your Name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input id="email" type="email" placeholder="your.email@example.com" required />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input id="subject" placeholder="Subject of your message" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea id="message" placeholder="Your message here..." rows={4} required />
              </div>
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
      </main>
      <Footer/>
    <AIChatbotIcon onOpen={handleChatbotOpen} />
    </div>
  )
}