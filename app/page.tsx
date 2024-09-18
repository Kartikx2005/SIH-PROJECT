"use client";
import React from "react";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Button } from "@/components/ui/button";
import { AIChatbotIcon } from "@/components/ui/chatbot";
import {
  // random
  ArrowRight,
  CheckCircle,
  Clock,
  FileText,
  Lock,
  MessageCircle,
  Users,
} from "lucide-react";
import Link from "next/link";
// import { Link } from 'react-router-dom';
export default function Home() {
  function handleChatbotOpen(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="container mx-auto px-10 relative z-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Empowering AYUSH Startups
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Simplifying the registration process for Ayurveda, Yoga,
              Naturopathy, Unani, Siddha, and Homoeopathy ventures.
            </p>
            <div className="space-x-4">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white bg-transparent hover:bg-white hover:text-green-700 transition-colors duration-300"
              >
                Track Application Status
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 bg-opacity-20 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center"></div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Register with Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-12 h-12 text-green-600" />,
                  title: "Centralized Portal",
                  description:
                    "One-stop solution for AYUSH startup registration.",
                },
                {
                  icon: <MessageCircle className="w-12 h-12 text-green-600" />,
                  title: "24/7 AI Support",
                  description:
                    "Instant assistance for any query, available round the clock.",
                },
                {
                  icon: <Clock className="w-12 h-12 text-green-600" />,
                  title: "Real-Time Tracking",
                  description:
                    "Track the status of your application with live updates.",
                },
                {
                  icon: <Lock className="w-12 h-12 text-green-600" />,
                  title: "Fast & Secure",
                  description:
                    "Experience a seamless and secure registration process.",
                },
                {
                  icon: <CheckCircle className="w-12 h-12 text-green-600" />,
                  title: "Compliance Assistance",
                  description:
                    "Ensure your startup adheres to all AYUSH guidelines.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg"
                >
                  {feature.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About AYUSH Section */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-10">
            <h2 className="text-3xl font-bold text-center mb-8">About AYUSH</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <p className="text-lg text-gray-700 leading-relaxed">
                  AYUSH stands for Ayurveda, Yoga & Naturopathy, Unani, Siddha,
                  and Homoeopathy. These ancient practices are deeply rooted in
                  the Indian healthcare system, offering holistic treatments
                  that are now embraced worldwide.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="AYUSH Infographic"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Registration Process Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center">
              {[
                {
                  icon: <Users className="w-12 h-12 text-blue-600" />,
                  title: "Create an Account",
                  description: "Register and log in to your dashboard.",
                },
                {
                  icon: <FileText className="w-12 h-12 text-blue-600" />,
                  title: "Fill in Application",
                  description:
                    "Complete the required forms and upload necessary documents.",
                },
                {
                  icon: <ArrowRight className="w-12 h-12 text-blue-600" />,
                  title: "Submit Application",
                  description: "Submit your application for review.",
                },
                {
                  icon: <Clock className="w-12 h-12 text-blue-600" />,
                  title: "Track Status",
                  description:
                    "Monitor your application progress in real-time.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center mb-8 md:mb-0"
                >
                  {step.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories / Testimonials Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Arya Sharma",
                  role: "Founder of AyurHealth",
                  quote:
                    "The AYUSH Startup Registration Portal made the entire process hassle-free and efficient. Highly recommend it for new ventures!",
                },
                {
                  name: "Priya Patel",
                  role: "CEO of YogaWell",
                  quote:
                    "Thanks to this portal, we could focus on our core business while the registration process was smoothly handled.",
                },
                {
                  name: "Dr. Rahul Gupta",
                  role: "Director of HomeoPlus",
                  quote:
                    "The support and guidance provided through the portal were invaluable for our startup's successful registration.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 italic mb-4">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="text-gray-600 italic mb-4">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  <div className="flex items-center">
                    <img
                      src={`/placeholder.svg?height=50&width=50&text=${testimonial.name.charAt(
                        0
                      )}`}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Center / Support Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Resources and Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "FAQs",
                  description:
                    "Find answers to commonly asked questions about AYUSH startup registration.",
                },
                {
                  title: "AYUSH Guidelines",
                  description:
                    "Access official guidelines and regulations for AYUSH startups.",
                },
                {
                  title: "Technical Support",
                  description:
                    "Get help with technical issues related to the registration process.",
                },
              ].map((resource, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Button
                    variant="outline"
                    className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
                  >
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Need Help? Contact Our Support Team
              </Button>
            </div>
          </div>
        </section>

        {/* Highlighted News or Updates Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Latest Updates from AYUSH
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "New AYUSH Policy Announced",
                  description:
                    "The government has released a new policy to boost AYUSH startups. Read about the key points and how it affects you.",
                },
                {
                  title: "Upcoming AYUSH Startup Summit",
                  description:
                    "Join us for the annual AYUSH Startup Summit next month. Network with industry leaders and investors.",
                },
                {
                  title: "Success Story: AyurTech Raises $10M",
                  description:
                    "Learn how AyurTech, an AYUSH startup, secured major funding and their plans for expansion.",
                },
              ].map((news, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.description}</p>
                  <Button variant="link" className="text-green-600 p-0">
                    Read More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the growing community of AYUSH entrepreneurs. Register today
              and take your first step toward transforming healthcare.
            </p>
            <Link href="/startup-registration" passHref>
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100"
              >
                Startup Registration
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <AIChatbotIcon onOpen={handleChatbotOpen} />
    </div>
  );
}
