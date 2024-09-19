import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  FileText,
  AlertTriangle,
  Clock,
  HelpCircle,
} from "lucide-react";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

const guidelines = [
  {
    title: "Eligibility Criteria",
    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
    content: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Startup Type:</strong> Your startup must belong to one of
            the following categories: Ayurveda, Yoga & Naturopathy, Unani,
            Siddha, or Homoeopathy.
          </li>
          <li>
            <strong>Compliance:</strong> Ensure your startup complies with the
            Ministry of AYUSH regulations and standards.
          </li>
          <li>
            <strong>Documents Required:</strong> You will need to submit legal,
            business, and regulatory documents (e.g., business registration,
            proof of compliance, and AYUSH certifications).
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Application Submission Steps",
    icon: <Clock className="h-6 w-6 text-blue-500" />,
    content: (
      <ol className="list-decimal pl-5 space-y-2">
        <li>Create an account on the AYUSH Startup Registration Portal.</li>
        <li>Complete the application form with your startup details.</li>
        <li>Upload all required documents in the correct formats.</li>
        <li>Review your application and submit it for processing.</li>
      </ol>
    ),
  },
  {
    title: "Document Requirements",
    icon: <FileText className="h-6 w-6 text-blue-500" />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Business Registration Certificate</li>
        <li>AYUSH Certification for your practice/industry</li>
        <li>Proof of compliance with local and national regulations</li>
        <li>Identity and Address Proof of Founders</li>
        <li>Startup Financial Documents (if required)</li>
      </ul>
    ),
  },
  {
    title: "Important Guidelines",
    icon: <AlertTriangle className="h-6 w-6 text-yellow-500" />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Document Formats:</strong> Ensure all documents are uploaded
          in PDF, JPEG, or PNG formats.
        </li>
        <li>
          <strong>File Size Limits:</strong> Individual files should not exceed
          5 MB.
        </li>
        <li>
          <strong>Accuracy:</strong> Double-check the information provided
          before submitting your application. Incomplete or incorrect details
          may lead to delays or rejection.
        </li>
        <li>
          <strong>Communication:</strong> Keep an eye on your email for updates
          on your application status.
        </li>
      </ul>
    ),
  },
  {
    title: "Common Mistakes to Avoid",
    icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Submitting incorrect or outdated documents.</li>
        <li>Missing out on mandatory fields in the application.</li>
        <li>
          Uploading files in unsupported formats or exceeding the size limits.
        </li>
        <li>Not reviewing the application before submission.</li>
      </ul>
    ),
  },
  {
    title: "Post-Submission Process",
    icon: <Clock className="h-6 w-6 text-green-500" />,
    content: (
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          Once submitted, you can track your application status in real-time on
          the portal.
        </li>
        <li>
          The application will undergo a review by the AYUSH regulatory team.
        </li>
        <li>
          If necessary, you may be requested to provide additional information
          or documents.
        </li>
        <li>
          Upon approval, you will receive your registration certificate
          electronically.
        </li>
      </ol>
    ),
  },
  {
    title: "Need Help?",
    icon: <HelpCircle className="h-6 w-6 text-blue-500" />,
    content: (
      <p>
        If you encounter any issues during the registration process, refer to
        our support section or contact us directly. We provide 24/7 AI-powered
        support to address any queries.
      </p>
    ),
  },
];

export default function Guidelines() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-green-50">
      <Header />
      <main className="flex-grow p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">
              AYUSH Startup Registration Guidelines
            </h1>
            <p className="text-lg text-gray-600">
              Welcome to the official guidelines for registering your AYUSH
              startup. Follow these instructions carefully to ensure a smooth
              and successful registration process.
            </p>
          </section>

          <Accordion type="single" collapsible className="w-full">
            {guidelines.map((guideline, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    {guideline.icon}
                    <span className="ml-2 text-lg font-semibold">
                      {guideline.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Card>
                    <CardContent className="pt-6">
                      {guideline.content}
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="bg-blue-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center">
                <HelpCircle className="h-6 w-6 mr-2" />
                Additional Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                For any further assistance or queries regarding the registration
                process, please don&apos;t hesitate to contact our support team.
                We&apos;re here to help you navigate through the AYUSH startup
                registration journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
