"use client";
import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, FileText, PhoneCall } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

const faqs = [
  {
    question: "How do I start my AYUSH startup registration process?",
    answer: "To begin, follow these steps:\n• Click the 'Register Your Startup' button on the homepage\n• Create an account\n• Follow the step-by-step instructions to complete your application"
  },
  {
    question: "What documents are required for registration?",
    answer: "You will need to upload the following documents:\n• Identity proof\n• Business registration documents\n• AYUSH practitioner certifications (if applicable)\n• Proof of address\n\nA full list is available in the 'Document Upload' section."
  },
  {
    question: "Can I track the status of my application?",
    answer: "Yes, you can track your application status:\n• After submission, log into your dashboard\n• View the real-time status of your application\n• Receive notifications for any updates or actions required"
  },
  {
    question: "What are the common errors to avoid during form submission?",
    answer: "To avoid delays, ensure:\n• All mandatory fields are completed\n• Documents are uploaded in the correct format\n• Contact information is accurate\n• All details are double-checked before submission"
  },
  {
    question: "How do I raise a complaint or technical issue?",
    answer: "To raise a complaint or report technical issues:\n• Use our 24/7 AI Support feature\n• The AI engine will either resolve your query instantly\n• Or forward it to the appropriate department for further assistance"
  },
  {
    question: "What should I do if my document upload fails?",
    answer: "If your document upload fails:\n• Ensure the file format is supported (PDF, JPEG, PNG)\n• Check that the file size does not exceed the limit\n• Try uploading again\n• Contact support if the issue persists"
  },
  {
    question: "How long does the approval process take?",
    answer: "The approval process:\n• Typically takes 7-10 business days\n• Depends on the accuracy of your submission\n• Is based on compliance with AYUSH guidelines\n• Updates will be sent via email throughout the process"
  },
  {
    question: "What should I do if my application is rejected?",
    answer: "If your application is rejected:\n• You'll receive an explanation via email and on your dashboard\n• Review the reasons for rejection carefully\n• Make the necessary corrections\n• Resubmit your application"
  }
]

const resources = [
  {
    title: "Contact Support",
    description: "Get in touch with our support team for personalized assistance.",
    icon: <PhoneCall className="h-6 w-6" />,
    link: "#"
  },
  {
    title: "Detailed Guidelines",
    description: "Access comprehensive guidelines for AYUSH startup registration.",
    icon: <FileText className="h-6 w-6" />,
    link: "#"
  },
  {
    title: "Help Articles",
    description: "Browse our collection of helpful articles and tutorials.",
    icon: <HelpCircle className="h-6 w-6" />,
    link: "#"
  }
]
interface FAQItem {
  question: string;
  answer: string;
}
interface AccordionProps {
  items: FAQItem[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <button
            className="w-full text-left p-4 focus:outline-none hover:bg-green-50 transition-colors duration-200"
            onClick={() => toggleItem(index)}
          >
            <div className="flex justify-between items-center">
              <span className="text-green-700 font-medium">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-green-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-green-500" />
              )}
            </div>
          </button>
          {openIndex === index && (
            <div className="p-4 bg-blue-50">
              <div className="text-blue-800 whitespace-pre-line">{item.answer}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-blue-50">
      <Header />
      <main className="flex-grow py-4 px-4 sm:px-6 lg:px-8"></main>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-2">Frequently Asked Questions</h1>
        <p className="text-xl text-center text-blue-700 mb-8">
          Find answers to common queries about AYUSH startup registration, application tracking, and document submission.
        </p>
        
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border-l-4 border-green-500">
          <p className="text-gray-700 leading-relaxed">
          We&apos;ve compiled answers to frequently asked questions to help you navigate the AYUSH startup registration process. Click on any question to reveal the detailed response.
          </p>
        </div>

        <Accordion items={faqs} />

        <h2 className="text-2xl font-semibold text-green-800 mt-12 mb-4">Still Need Help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="bg-blue-100">
                <CardTitle className="flex items-center text-blue-700">
                  <span className="mr-2">{resource.icon}</span>
                  <span className="text-lg">{resource.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5">
                <CardDescription className="text-gray-600">{resource.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}