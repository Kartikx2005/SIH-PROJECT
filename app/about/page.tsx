"use client";

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Shield, Lightbulb, Users, HandshakeIcon, Mail, Phone } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

const coreValues = [
  { icon: <Shield className="h-8 w-8 text-blue-500" />, title: "Integrity", description: "Ensuring complete transparency and honesty in all operations." },
  { icon: <Lightbulb className="h-8 w-8 text-green-500" />, title: "Innovation", description: "Embracing the latest technologies to provide a top-notch user experience." },
  { icon: <Users className="h-8 w-8 text-blue-500" />, title: "Customer Focus", description: "Your success is our success, and we are dedicated to providing continuous support." },
  { icon: <HandshakeIcon className="h-8 w-8 text-green-500" />, title: "Collaboration", description: "Working together with AYUSH experts, government authorities, and startups to streamline processes." },
]

const teamMembers = [
  { name: "Dr. Ayush Kumar", role: "Chief AYUSH Expert", image: "/placeholder.svg?height=100&width=100" },
  { name: "Priya Sharma", role: "Tech Lead", image: "/placeholder.svg?height=100&width=100" },
  { name: "Rajesh Gupta", role: "Regulatory Specialist", image: "/placeholder.svg?height=100&width=100" },
  { name: "Anita Desai", role: "Customer Support Manager", image: "/placeholder.svg?height=100&width=100" },
]

const testimonials = [
  { text: "This portal transformed how we navigated the regulatory process! It was seamless and efficient.", author: "Arjun Reddy, AyurTech Innovations" },
  { text: "The AI-driven support was incredibly helpful. It felt like having an expert available 24/7.", author: "Meera Patel, Yoga Harmony Startups" },
  { text: "Registering our Unani startup was a breeze thanks to this platform. Highly recommended!", author: "Zain Ahmed, UnaniCare Solutions" },
]

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-green-50">
      <Header />
      <main className="flex-grow p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">About Us</h1>
            <p className="text-lg text-gray-600">
              Welcome to our AYUSH Startup Registration Portal, designed to make the entire registration process easier, faster, and more transparent. Our goal is to empower startups in the fields of Ayurveda, Yoga, Unani, Siddha, and Homoeopathy, integrating these traditional systems with modern technological solutions.
            </p>
          </section>

          <Card className="bg-white shadow-lg">
            <CardHeader className="bg-blue-100">
              <CardTitle className="text-blue-800 text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700">
                Our mission is to support the growth of AYUSH startups by offering a centralized, user-friendly platform. We aim to simplify the registration process, provide 24/7 AI-driven support, and ensure a smooth path for startups to comply with regulations and achieve success in their field.
              </p>
            </CardContent>
          </Card>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardContent className="p-6 flex items-start space-x-4">
                    {value.icon}
                    <div>
                      <h3 className="font-semibold text-lg text-blue-700">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Meet the Team</h2>
            <p className="text-gray-700 mb-6">
              Behind this platform is a team of dedicated professionals who believe in the potential of the AYUSH industry. Our experts in both the tech and healthcare fields ensure the portal stays reliable, secure, and efficient.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-700">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-6">What People Say About Us</h2>
            <Carousel className="w-full max-w-xs sm:max-w-sm mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-white shadow-lg">
                      <CardContent className="p-6">
                        <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                        <p className="text-blue-600 font-semibold">{testimonial.author}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>

          <Card className="bg-white shadow-lg">
            <CardHeader className="bg-green-100">
              <CardTitle className="text-green-800 text-2xl">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                Have questions or feedback? We're always here to help. Reach out to us via the contact form, email, or phone. We're committed to providing ongoing support for your startup journey.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  <Mail className="mr-2 h-4 w-4" /> Contact Us
                </Button>
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  <Phone className="mr-2 h-4 w-4" /> Call Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}